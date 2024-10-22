"use client"

import { Subtitle, Text } from "@/components/base"

import { applyBonus, Ticket, toCloudCredits, toSOPEN } from "./tickets"

export default function Summary({ ticket }: { ticket: Ticket }) {
  return (
    <>
      <Subtitle>Summary</Subtitle>
      <div className="flex flex-wrap items-center gap-y-3 pr-3 text-left md:pr-4">
        <Text className="w-1/2">You Selected</Text>
        <Text className="w-1/2">
          ${ticket.ticketSize.toLocaleString("en-US")}
        </Text>{" "}
        <Text className="w-1/2">Cloud Credits (incl. bonus)</Text>
        <Text className="w-1/2">
          {toCloudCredits(
            applyBonus(ticket.ticketSize, ticket.bonus)
          ).toLocaleString("en-US")}
        </Text>
        <Text className="w-1/2">Exchanged for sOPEN (incl. bonus)</Text>
        <Text className="w-1/2">
          {toSOPEN(applyBonus(ticket.ticketSize, ticket.bonus)).toLocaleString(
            "en-US"
          )}
        </Text>{" "}
        <Text className="w-1/2">Bonus</Text>
        <Text className="w-1/2">{ticket.bonus.toFixed(2)}%</Text>{" "}
        <Text className="w-1/2">Market Capitalization</Text>
        <Text className="w-1/2">$8,760,000</Text>
        <Text className="w-1/2">OPEN TGE Date</Text>
        <Text className="w-1/2">End 2024</Text>
      </div>
    </>
  )
}
