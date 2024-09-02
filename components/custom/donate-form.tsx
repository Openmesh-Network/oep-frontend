"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Reserved } from "@/oep-indexer/types/reserve"
import { reviver } from "@/oep-indexer/utils/json"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useWeb3Modal } from "@web3modal/wagmi/react"
import { Alchemy, AssetTransfersCategory, Network } from "alchemy-sdk"
import axios from "axios"
import { Address, parseAbiItem, parseUnits, zeroAddress } from "viem"
import { useAccount } from "wagmi"

import { usePerformTransaction } from "@/hooks/usePerformTransaction"
import { Button } from "@/components/ui/button"

import { Text, Title } from "../base"
import { Card, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Checkbox } from "../ui/checkbox"
import { ComboBox, Status } from "../ui/combobox"
import { Label } from "../ui/label"
import { AddressPicker, SelectableAddresses } from "./address-picker"
import Summary from "./summary"
import { rawTickets } from "./tickets"
import { defaultChain } from "./web3-provider"

const to = "0x24496D746Fd003397790E41d0d1Ce61F4F7fd61f"
const alchemy = new Alchemy({
  apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
})
export function DonateForm() {
  const { address, isConnected } = useAccount()
  const { open } = useWeb3Modal()
  const { performTransaction, performingTransaction, loggers } =
    usePerformTransaction({
      chainId: defaultChain.id,
    })
  const queryClient = useQueryClient()

  const [tokenContract, setTokenContract] = useState<Address>(zeroAddress)
  const [skipTest, setSkipTest] = useState<boolean>(false)
  const [complete, setComplete] = useState<boolean>(false)
  const [amountOverride, setAmountOverride] = useState<Status | undefined>(
    undefined
  )
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

  const [yourTickets, setYourTickets] = useState<Reserved[] | undefined>(
    undefined
  )
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

  const { data: transfers } = useQuery({
    queryKey: ["assetTransfers", address || zeroAddress],
    queryFn: async () => {
      if (!address) return undefined

      return await alchemy.core.getAssetTransfers({
        fromBlock: "0x0",
        fromAddress: address,
        toAddress: to,
        excludeZeroValue: true,
        category: [
          AssetTransfersCategory.INTERNAL,
          AssetTransfersCategory.EXTERNAL,
          AssetTransfersCategory.ERC20,
        ],
      })
    },
    staleTime: 5 * 1000,
  })

  useEffect(() => {
    if (!transfers) {
      return
    }

    if (
      transfers.transfers.some(
        (t) =>
          (t.rawContract.address === null &&
            t.value !== null &&
            t.value < 0.01) ||
          (t.rawContract.address !== null && t.value !== null && t.value < 25)
      )
    ) {
      setSkipTest(true)
    }
    if (
      transfers.transfers.some(
        (t) =>
          (t.rawContract.address === null &&
            t.value !== null &&
            t.value > 0.01) ||
          (t.rawContract.address !== null && t.value !== null && t.value > 25)
      )
    ) {
      setComplete(true)
    }
  }, [transfers])

  async function assetTransfer(amount: number) {
    await performTransaction({
      transactionName: "Asset transfer",
      simulate: false,
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
        } else {
          setComplete(true)
        }
        queryClient.invalidateQueries({ queryKey: ["assetTransfers"] })
      },
    })
  }

  const budgetTokens: SelectableAddresses = {
    [zeroAddress]: {
      name: `ETH`,
      logo: "/eth.svg",
    },
    "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48": {
      name: "USDC",
      logo: "usdc.svg",
    },
    "0xdAC17F958D2ee523a2206206994597C13D831ec7": {
      name: "USDT",
      logo: "usdt.svg",
    },
  }

  if (!isConnected || !yourTickets) {
    return (
      <Button onClick={() => open()} className="max-w-96">
        Connect your wallet to verify your whitelist.
      </Button>
    )
  }

  if (yourTickets.length === 0 && amountOverride === undefined) {
    return (
      <div className="flex flex-col space-y-2">
        <span className="text-red-500">
          Address {address} is not whitelisted.
        </span>
        <div className="space-x-3">
          <Label>Input amount</Label>
          <ComboBox
            statuses={[25000, 50000, 100000, 250000, 500000].map((a) => {
              return { label: a.toLocaleString("en-US"), value: a.toString() }
            })}
            selectedStatus={amountOverride}
            setSelectedStatus={setAmountOverride}
          />
        </div>
      </div>
    )
  }

  const fullAmount = amountOverride
    ? parseInt(amountOverride.value)
    : Number(yourTickets[0].amount)
  const ticket = rawTickets.find((t) => t.ticketSize === fullAmount)

  return (
    <div className="space-y-8">
      {ticket && <Summary ticket={ticket} />}
      {complete ? (
        <div className="flex flex-col space-y-2">
          <Title>Complete!</Title>
          <Text>
            Thank you for participating. You will receive an email once your
            cloud credits are available.
          </Text>
        </div>
      ) : (
        <>
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
                {ethPrice.toLocaleString("en-US", { maximumFractionDigits: 2 })}{" "}
                USD
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
        </>
      )}
      <div className="flex flex-col space-y-2">
        {transfers && <Title>Transfers</Title>}
        {transfers?.transfers.map((t) => (
          <Card>
            <CardHeader>
              <CardTitle>
                {t.value} {t.asset}
              </CardTitle>
            </CardHeader>
            <CardFooter>
              <Link
                href={`${defaultChain.blockExplorers.default.url}/tx/${t.hash}`}
                target="_blank"
              >
                View on explorer
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
