"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { type Reserved } from "@/oep-indexer/types/reserve"
import { reviver } from "@/oep-indexer/utils/json"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useAccount } from "wagmi"

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { defaultChain } from "./web3-provider"

export default function Reserved() {
  const { address } = useAccount()

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

  if (!address) {
    return (
      <span>You need to connect your wallet to see your reserved tickets.</span>
    )
  }

  if (!reserved) {
    return <span>Loading...</span>
  }

  return (
    <div className="flex flex-col gap-3">
      {yourTickets.length === 0 ? (
        <span>No reserved tickets found.</span>
      ) : (
        yourTickets.map((ticket) => (
          <Card>
            <CardHeader>
              <CardTitle>Whitelist ticket</CardTitle>
              <CardDescription>{ticket.amount.toString()} USD</CardDescription>
            </CardHeader>
            <CardFooter>
              <Link
                href={`${defaultChain.blockExplorers.default.url}/tx/${ticket.transactionHash}`}
                target="_blank"
              >
                View on explorer
              </Link>
            </CardFooter>
          </Card>
        ))
      )}
    </div>
  )
}
