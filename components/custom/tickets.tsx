"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { OEPReserveContract } from "@/oep-indexer/contracts/OEPReserve"
import type { Reserved } from "@/oep-indexer/types/reserve"
import { reviver } from "@/oep-indexer/utils/json"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { ColumnDef } from "@tanstack/react-table"
import { useWeb3Modal } from "@web3modal/wagmi/react"
import axios from "axios"
import { Hex } from "viem"
import { useAccount } from "wagmi"

import { usePerformTransaction } from "@/hooks/usePerformTransaction"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTable } from "@/components/ui/data-table"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Disclaimer from "@/components/custom/disclaimer"
import { defaultChain } from "@/components/custom/web3-provider"

export interface Ticket {
  ticketSize: number
  bonus: number
  tx?: Hex
}

export default function Tickets() {
  const { address, isConnected } = useAccount()
  const { open } = useWeb3Modal()
  const { performTransaction, performingTransaction } = usePerformTransaction({
    chainId: defaultChain.id,
  })
  const queryClient = useQueryClient()
  const { data: reserved } = useQuery({
    queryKey: ["reserved"],
    queryFn: () => {
      return axios
        .get("/indexer/reserved")
        .then((res) => res.data)
        .then((res) => JSON.parse(JSON.stringify(res), reviver) as Reserved[])
    },
    refetchInterval: 5 * 1000,
  })
  const reservedTicket =
    !reserved || !address
      ? undefined
      : reserved.some(
          (ticket) => ticket.account.toLowerCase() === address.toLowerCase()
        )

  const [disclaimerAccepted, setDisclaimerAccepted] = useState<boolean>(false)
  const [disclaimerOpen, setDisclaimerOpen] = useState<boolean>(false)

  const [rawTickets, setRawTickets] = useState<Ticket[]>([
    {
      ticketSize: 25000,
      bonus: 6.0,
    },
    {
      ticketSize: 50000,
      bonus: 12.6,
    },
    {
      ticketSize: 100000,
      bonus: 21.75,
    },
    {
      ticketSize: 250000,
      bonus: 24.75,
    },
    {
      ticketSize: 500000,
      bonus: 31.54,
    },
  ])

  useEffect(() => {
    if (!reserved) {
      return
    }

    const newTickets = rawTickets.map((ticket) => {
      return {
        ...ticket,
        tx: reserved.findLast((r) => r.amount === BigInt(ticket.ticketSize))
          ?.transactionHash,
      }
    })
    setRawTickets(newTickets)
  }, [reserved])

  const tickets = rawTickets

  const columns: ColumnDef<Ticket>[] = [
    {
      header: "Ticket Size (USD)",
      cell: ({ row }) => (
        <span>${row.original.ticketSize.toLocaleString("en-US")}</span>
      ),
    },
    {
      header: "Cloud Credits",
      cell: ({ row }) => (
        <span>
          {toCloudCredits(
            applyBonus(row.original.ticketSize, row.original.bonus)
          ).toLocaleString("en-US")}
        </span>
      ),
    },
    {
      header: "Exchanged for sOPEN",
      cell: ({ row }) => (
        <span>
          {toSOPEN(
            applyBonus(row.original.ticketSize, row.original.bonus)
          ).toLocaleString("en-US")}
        </span>
      ),
    },
    {
      header: "Bonus",
      cell: ({ row }) => (
        <span className="text-green-700">
          <span>{row.original.bonus.toFixed(2)}%</span>
        </span>
      ),
    },
    {
      header: "Actions",
      cell: ({ row }) => {
        return (
          <Button
            onClick={() => {
              if (!disclaimerAccepted) {
                setDisclaimerOpen(true)
                return
              }

              if (!isConnected) {
                open()
                return
              }

              performTransaction({
                transaction: async () => {
                  return {
                    abi: OEPReserveContract.abi,
                    address: OEPReserveContract.address,
                    functionName: "reserve",
                    args: [BigInt(row.original.ticketSize)],
                  }
                },
                onConfirmed: (receipt) => {
                  queryClient.invalidateQueries({ queryKey: ["reserved"] })
                },
              })
            }}
            className="bg-blue-600 hover:bg-blue-700"
            disabled={reservedTicket || performingTransaction}
          >
            Whitelist
          </Button>
        )
      },
    },
    {
      header: "Last Tx",
      cell: ({ row }) => {
        const tx = row.original.tx
        if (!tx) {
          return <span>-</span>
        }
        return (
          <Link
            className="text-blue-500"
            href={`${defaultChain.blockExplorers.default.url}/tx/${tx}`}
            target="_blank"
          >{`${tx.substring(0, 6)}...${tx.substring(tx.length - 4)}`}</Link>
        )
      },
    },
  ]

  return (
    <>
      <ScrollArea className="w-full whitespace-nowrap rounded-md border">
        <DataTable columns={columns} data={tickets} />
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <span>You can only reserve one ticket per address.</span>
      <AlertDialog open={disclaimerOpen} onOpenChange={setDisclaimerOpen}>
        <AlertDialogTrigger />
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Disclaimer</AlertDialogTitle>
            <AlertDialogDescription>
              <div className="flex flex-col gap-y-2">
                <ScrollArea className="h-96">
                  <div className="flex flex-col gap-y-3 pr-3 text-left md:pr-4">
                    <Disclaimer />
                  </div>
                </ScrollArea>
                <div className="items-top flex space-x-2">
                  <Checkbox
                    id="disclaimerAccepted"
                    checked={disclaimerAccepted}
                    onCheckedChange={(c) =>
                      c !== "indeterminate" && setDisclaimerAccepted(c)
                    }
                  />
                  <label
                    htmlFor="disclaimerAccepted"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Accept
                  </label>
                </div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setDisclaimerAccepted(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => setDisclaimerOpen(false)}
              disabled={!disclaimerAccepted}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

function applyBonus(ticketSize: number, bonus: number): number {
  return ticketSize * (1 + bonus / 100)
}

function toCloudCredits(ticketSize: number): number {
  return ticketSize * 2.5
}

function toSOPEN(ticketSize: number): number {
  return ticketSize * 6.5
}
