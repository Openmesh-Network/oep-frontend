"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { OEPReserveContract } from "@/oep-indexer/contracts/OEPReserve"
import type { Reserved } from "@/oep-indexer/types/reserve"
import type { User } from "@/oep-indexer/types/user"
import { reviver } from "@/oep-indexer/utils/json"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { ColumnDef } from "@tanstack/react-table"
import { useWeb3Modal } from "@web3modal/wagmi/react"
import axios, { AxiosError } from "axios"
import { countries } from "countries-list"
import { Hex } from "viem"
import { useAccount, useWalletClient } from "wagmi"

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
import { ComboBox, Status as ComboBoxOption } from "@/components/ui/combobox"
import { DataTable } from "@/components/ui/data-table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { useToast } from "@/components/ui/use-toast"
import { Subtitle, Text } from "@/components/base"
import Disclaimer from "@/components/custom/disclaimer"
import { defaultChain } from "@/components/custom/web3-provider"

import Summary from "./summary"
import Tasks from "./tasks"

export interface Ticket {
  ticketSize: number
  bonus: number
  tx?: Hex
}
enum Step {
  None,
  SetMetadata,
  AcceptDisclaimer,
  SubmitMetadata,
  SignTransaction,
  Completed,
}

export const rawTickets: Ticket[] = [
  {
    ticketSize: 25000,
    bonus: 15.0,
  },
  {
    ticketSize: 50000,
    bonus: 20.0,
  },
  {
    ticketSize: 100000,
    bonus: 30.0,
  },
  {
    ticketSize: 250000,
    bonus: 50.0,
  },
  {
    ticketSize: 500000,
    bonus: 75.0,
  },
]

export default function Tickets() {
  const { address, isConnected } = useAccount()
  const { open } = useWeb3Modal()
  const { performTransaction, performingTransaction } = usePerformTransaction({
    chainId: defaultChain.id,
  })
  const { data: walletClient } = useWalletClient({ chainId: defaultChain.id })
  const queryClient = useQueryClient()
  const { toast } = useToast()
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
  const [step, setStep] = useState<{ step: Step; ticket: Ticket }>({
    step: Step.None,
    ticket: { ticketSize: 0, bonus: 0 },
  })
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [social, setSocial] = useState<string>("")
  const [entity, setEntity] = useState<string>("")
  const [url, setUrl] = useState<string>("")
  const [country, setCountry] = useState<ComboBoxOption | undefined>()
  const [referredBy, setReferredBy] = useState<string>("")

  const [tickets, setTickets] = useState<Ticket[]>(rawTickets)
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
    setTickets(newTickets)
  }, [rawTickets, reserved])

  useEffect(() => {
    if (step.step === Step.None) {
      return
    }

    if (!isConnected) {
      try {
        open()
      } catch (err) {
        toast({
          title: "Error",
          description: "Wallet modal could not be opened.",
          variant: "destructive",
        })
      }
      return
    }

    if (step.step === Step.SubmitMetadata) {
      const metadata = JSON.stringify({
        name: name,
        email: email,
        social: social,
        entity: entity,
        URL: url,
        country: country?.value,
        referredBy: referredBy,
      } as User["metadata"])
      if (!walletClient) {
        toast({
          title: "Error",
          description: "Wallet not connected.",
          variant: "destructive",
        })
        return
      }
      walletClient
        .signMessage({
          message: `OEP metadata: ${metadata}`,
        })
        .catch((err) => {
          toast({
            title: "Singing error",
            description: err.toString(),
            variant: "destructive",
          })
        })
        .then((signature) => {
          if (!signature) {
            return
          }

          return axios.post("/indexer/setMetadata", {
            account: address,
            metadata: metadata,
            signature: signature,
          })
        })
        .catch((err: AxiosError) => {
          toast({
            title: "Upload error",
            description: (err?.response?.data as string) ?? err.message,
            variant: "destructive",
          })
        })
        .then((res) => {
          if (!res) {
            return
          }

          setStep({ ...step, step: step.step + 1 })
        })
    }

    if (step.step === Step.SignTransaction) {
      performTransaction({
        transaction: async () => {
          return {
            abi: OEPReserveContract.abi,
            address: OEPReserveContract.address,
            functionName: "reserve",
            args: [BigInt(step.ticket.ticketSize)],
          }
        },
        onConfirmed: (receipt) => {
          queryClient.invalidateQueries({ queryKey: ["reserved"] })
          setStep({ ...step, step: step.step + 1 })
        },
      })
      return
    }
  }, [isConnected, step])

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
              setStep({ step: 1, ticket: row.original })
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
      <AlertDialog
        open={
          step.step >= Step.SetMetadata && step.step <= Step.AcceptDisclaimer
        }
        onOpenChange={(open) => {}}
      >
        <AlertDialogTrigger />
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex flex-col gap-y-2">
              <span>Openmesh Expansion Program</span>
              <span className="text-xs">Slogan</span>
            </AlertDialogTitle>
            <AlertDialogDescription>
              <div>
                {step.step === Step.SetMetadata && (
                  <ScrollArea className="h-96">
                    <div className="flex flex-col gap-y-2">
                      <Subtitle>Note</Subtitle>
                      <Text>
                        This is a whitelisting process only. You will receive an
                        email confirmation once your whitelisting is approved.
                        No asset transfer is required until you qualify.
                      </Text>
                      <Summary ticket={step.ticket} />
                      <Subtitle>Contact Information</Subtitle>
                      <div className="flex flex-wrap items-center gap-y-3 pr-3 text-left md:pr-4">
                        <Label className="w-1/3">Your Name*</Label>
                        <Input
                          className="w-2/3"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <Label className="w-1/3">Your Email*</Label>
                        <Input
                          className="w-2/3"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <Label className="w-1/3">Telegram/LinkedIn</Label>
                        <Input
                          className="w-2/3"
                          value={social}
                          onChange={(e) => setSocial(e.target.value)}
                        />
                        <Label className="w-1/3">Entity*</Label>
                        <RadioGroup
                          className="w-2/3 grid-cols-2 py-3"
                          value={entity}
                          onValueChange={setEntity}
                        >
                          <div className="flex grow items-center space-x-1">
                            <RadioGroupItem value="Entity" id="entity" />
                            <Label htmlFor="entity">Entity</Label>
                          </div>
                          <div className="flex grow items-center space-x-1">
                            <RadioGroupItem
                              value="Individual"
                              id="individual"
                            />
                            <Label htmlFor="individual">Individual</Label>
                          </div>
                        </RadioGroup>
                        <Label className="w-1/3">Company URL</Label>
                        <Input
                          className="w-2/3"
                          value={url}
                          onChange={(e) => setUrl(e.target.value)}
                        />
                        <Label className="w-1/3">Country*</Label>
                        <ComboBox
                          className="w-2/3"
                          selectedStatus={country}
                          setSelectedStatus={setCountry}
                          statuses={Object.values(countries)
                            .toSorted((c1, c2) => {
                              if (c1.name < c2.name) {
                                return -1
                              }
                              if (c1.name > c2.name) {
                                return 1
                              }
                              return 0
                            })
                            .map((c) => {
                              return {
                                label: c.name,
                                value: c.name.toLowerCase(),
                              }
                            })}
                        />
                        <Label className="w-1/3">Referred By</Label>
                        <Input
                          className="w-2/3"
                          value={referredBy}
                          onChange={(e) => setReferredBy(e.target.value)}
                        />
                      </div>
                    </div>
                  </ScrollArea>
                )}
                {step.step === Step.AcceptDisclaimer && (
                  <>
                    <ScrollArea className="h-96">
                      <div className="flex flex-col gap-y-2">
                        <Subtitle>Note</Subtitle>
                        <Text>
                          This is a whitelisting process only. You will receive
                          an email confirmation once your whitelisting is
                          approved. No asset transfer is required until you
                          qualify.
                        </Text>
                        <div className="flex flex-col gap-y-3 pr-3 text-left md:pr-4">
                          <Tasks />
                          <Subtitle>Terms</Subtitle>
                          <Disclaimer />
                        </div>
                      </div>
                    </ScrollArea>
                    <div className="items-top flex space-x-2 pt-1">
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
                  </>
                )}
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => {
                setStep({ ...step, step: step.step - 1 })
              }}
            >
              {step.step === 1 ? "Cancel" : "Previous"}
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                setStep({ ...step, step: step.step + 1 })
              }}
              disabled={
                (step.step === Step.SetMetadata &&
                  (!name || !email || !entity || !country)) ||
                (step.step === Step.AcceptDisclaimer && !disclaimerAccepted)
              }
            >
              {step.step === Step.SubmitMetadata - 1 ? "Send" : "Next"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <AlertDialog
        open={step.step === Step.Completed}
        onOpenChange={(open) => {
          if (!open) {
            setStep({ ...step, step: Step.None })
          }
        }}
      >
        <AlertDialogTrigger />
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex flex-col gap-y-2">
              <span>Openmesh Expansion Program</span>
              <span className="text-xs">Slogan</span>
            </AlertDialogTitle>
            <AlertDialogDescription>
              Thank you! Openmesh will email you once your whitelist is
              confirmed and ready for the next step.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Close</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

export function applyBonus(ticketSize: number, bonus: number): number {
  return ticketSize * (1 + bonus / 100)
}

export function toCloudCredits(ticketSize: number): number {
  return Math.round(ticketSize / (0.21 * 2.6))
}

export function toSOPEN(ticketSize: number): number {
  return Math.round(ticketSize / 0.21)
}
