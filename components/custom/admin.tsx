"use client"

import { useState } from "react"
import Link from "next/link"
import { type Reserved } from "@/oep-indexer/types/reserve"
import { User } from "@/oep-indexer/types/user"
import { reviver } from "@/oep-indexer/utils/json"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { Address } from "viem"

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Title } from "../base"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { defaultChain } from "./web3-provider"

export default function Admin() {
  const [secret, setSecret] = useState<string>("")

  const { data: reserved } = useQuery({
    queryKey: ["reserved"],
    queryFn: () => {
      return axios
        .get("/indexer/reserved")
        .then((res) => res.data)
        .then((res) => JSON.parse(JSON.stringify(res), reviver) as Reserved[])
    },
    refetchInterval: 500 * 1000,
  })

  const { data: users, refetch } = useQuery({
    initialData: {} as {
      [address: Address]: User
    },
    queryKey: ["users"],
    queryFn: () => {
      if (!secret) {
        return {} as {
          [address: Address]: User
        }
      }

      return axios
        .get("/indexer/users", {
          headers: {
            Authorization: secret,
          },
        })
        .then((res) => res.data)
        .then(
          (res) =>
            JSON.parse(JSON.stringify(res), reviver) as {
              [address: Address]: User
            }
        )
        .catch((err) => {
          console.error(err)
          return {} as {
            [address: Address]: User
          }
        })
    },
    refetchInterval: 500 * 1000,
  })

  if (!reserved) {
    return <span>Loading...</span>
  }

  return (
    <div className="flex flex-col gap-3 m-2">
      <div>
        <Label>Password</Label>
        <Input
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
          type="password"
        />
        <Button onClick={() => refetch()}>Refresh</Button>
      </div>
      <Title>Tickets</Title>
      {reserved.map((ticket, i) => (
        <Card key={i}>
          <CardHeader>
            <CardTitle>{ticket.account}</CardTitle>
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
      ))}
      <Title>Users</Title>
      {(Object.keys(users) as Address[]).map((u, i) => (
        <Card key={i}>
          <CardHeader>
            <CardTitle>{u}</CardTitle>
            <CardDescription className="flex flex-col">
              <span>Name: {users[u].metadata.name}</span>
              <span>Email: {users[u].metadata.email}</span>
              <span>Social: {users[u].metadata.social}</span>
              <span>Entity: {users[u].metadata.entity}</span>
              <span>URL: {users[u].metadata.URL}</span>
              <span>Country: {users[u].metadata.country}</span>
              <span>Referred By: {users[u].metadata.referredBy}</span>
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Link
              href={`${defaultChain.blockExplorers.default.url}/address/${u}`}
              target="_blank"
            >
              View on explorer
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
