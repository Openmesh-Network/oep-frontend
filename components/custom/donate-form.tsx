"use client"

import { useEffect, useState } from "react"
import { Reserved } from "@/oep-indexer/types/reserve"
import { reviver } from "@/oep-indexer/utils/json"
import { useQuery } from "@tanstack/react-query"
import { useWeb3Modal } from "@web3modal/wagmi/react"
import axios from "axios"
import { Address, parseAbiItem, parseUnits, zeroAddress } from "viem"
import { useAccount } from "wagmi"

import { usePerformTransaction } from "@/hooks/usePerformTransaction"
import { Button } from "@/components/ui/button"

import { Checkbox } from "../ui/checkbox"
import { Label } from "../ui/label"
import { AddressPicker, SelectableAddresses } from "./address-picker"
import Summary from "./summary"
import { rawTickets } from "./tickets"
import { defaultChain } from "./web3-provider"

const to = "0x24496D746Fd003397790E41d0d1Ce61F4F7fd61f"
export function DonateForm() {
  const { address, isConnected } = useAccount()
  const { open } = useWeb3Modal()
  const { performTransaction, performingTransaction, loggers } =
    usePerformTransaction({
      chainId: defaultChain.id,
    })

  const [tokenContract, setTokenContract] = useState<Address>(zeroAddress)
  const [skipTest, setSkipTest] = useState<boolean>(false)
  const { data: ethPrice } = useQuery({
    queryKey: ["ethPrice"],
    queryFn: async () => {
      const data = await axios
        .get("https://api.coinbase.com/v2/exchange-rates?currency=ETH")
        .then((res) => res.data as { data: { rates: { USD: string } } })
      return parseFloat(data.data.rates.USD)
    },
    staleTime: 5 * 1000,
  })

  const { data: reserved } = useQuery({
    queryKey: ["reserved"],
    queryFn: () => {
      return axios
        .get("/indexer/reserved")
        .then((res) => res.data)
        .then((res) => JSON.parse(JSON.stringify(res), reviver) as Reserved[])
    },
    refetchInterval: Infinity,
  })

  const [yourTickets, setYourTickets] = useState<Reserved[]>([])
  useEffect(() => {
    if (!reserved || !address) {
      return
    }

    setYourTickets(
      reserved.filter(
        (ticket) => ticket.account.toLowerCase() === address.toLowerCase()
      )
    )
  }, [reserved, address])

  async function assetTransfer(amount: number) {
    await performTransaction({
      transactionName: "Asset transfer",
      transaction: async () => {
        if (tokenContract === zeroAddress) {
          if (!ethPrice) {
            loggers?.onError?.({
              title: "Error",
              description: "Could not fetch latest ETH price",
            })
            return undefined
          }

          return {
            to: to,
            value: parseUnits((amount / ethPrice).toString(), 18),
            data: "0x",
            chain: defaultChain,
          }
        }

        return {
          abi: [parseAbiItem("function transfer(address to, uint256 amount)")],
          address: tokenContract,
          functionName: "transfer",
          args: [to, parseUnits(amount.toString(), 6)],
        }
      },
      onConfirmed: (receipt) => {
        if (amount === 10) {
          setSkipTest(true)
        }
      },
    })
  }

  const budgetTokens: SelectableAddresses = {
    [zeroAddress]: {
      name: `${defaultChain.nativeCurrency.name} (${defaultChain.nativeCurrency.symbol})`,
      //logo: ""
    },
  }

  if (!isConnected) {
    return (
      <Button onClick={() => open()} className="max-w-96">
        Connect your wallet to verify your whitelist.
      </Button>
    )
  }

  if (yourTickets.length === 0) {
    return (
      <span className="text-red-500">
        Address {address} is not whitelisted.
      </span>
    )
  }

  const fullAmount = Number(yourTickets[0].amount)
  const ticket = rawTickets.find((t) => t.ticketSize === fullAmount)

  return (
    <div className="space-y-8">
      {ticket && <Summary ticket={ticket} />}
      <div>
        <Label>Asset</Label>
        <AddressPicker
          chainId={defaultChain.id}
          addressName="asset"
          selectableAddresses={budgetTokens}
          value={tokenContract}
          onChange={(a) => {
            setTokenContract(a ?? zeroAddress)
          }}
        />
      </div>
      <div className="space-y-4">
        <div className="space-x-2">
          <Button
            onClick={() => assetTransfer(10).catch(console.error)}
            disabled={skipTest || performingTransaction}
          >
            Transfer $10
          </Button>
          <Button
            onClick={() => assetTransfer(fullAmount).catch(console.error)}
            disabled={!skipTest || performingTransaction}
          >
            Transfer ${fullAmount.toLocaleString("en-US")}
          </Button>
        </div>
        {ethPrice !== undefined && (
          <span>
            1 ETH :{" "}
            {ethPrice.toLocaleString("en-US", { maximumFractionDigits: 2 })} USD
          </span>
        )}
        <div className="items-top flex space-x-2">
          <Checkbox
            id="skipTest"
            checked={skipTest}
            onCheckedChange={(c) => c !== "indeterminate" && setSkipTest(c)}
          />
          <label
            htmlFor="skipTest"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Skip test transfer
          </label>
        </div>
      </div>
    </div>
  )
}
