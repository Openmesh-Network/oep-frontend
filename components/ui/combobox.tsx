"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export type Status = {
  value: string
  label: string
}

export interface ComboBoxProps {
  className?: string
  statuses: Status[]
  selectedStatus?: Status
  setSelectedStatus: (status: Status | undefined) => void
}
export function ComboBox({
  className,
  statuses,
  selectedStatus,
  setSelectedStatus,
}: ComboBoxProps) {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen} modal>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn("w-[150px] justify-start", className)}
          >
            {selectedStatus ? <>{selectedStatus.label}</> : <>Select</>}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className={cn("w-[200px] p-0", className)}
          align="start"
        >
          <StatusList
            setOpen={setOpen}
            setSelectedStatus={setSelectedStatus}
            statuses={statuses}
          />
        </PopoverContent>
      </Popover>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className={cn("w-[150px] justify-start", className)}
        >
          {selectedStatus ? <>{selectedStatus.label}</> : <>Select</>}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <StatusList
            setOpen={setOpen}
            setSelectedStatus={setSelectedStatus}
            statuses={statuses}
          />
        </div>
      </DrawerContent>
    </Drawer>
  )
}

function StatusList({
  setOpen,
  setSelectedStatus,
  statuses,
}: {
  setOpen: (open: boolean) => void
  setSelectedStatus: (status: Status | undefined) => void
  statuses: Status[]
}) {
  return (
    <Command
      filter={(value, search) => {
        if (value.startsWith(search)) return 1
        return 0
      }}
    >
      <CommandInput placeholder="Search" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {statuses.map((status) => (
            <CommandItem
              key={status.value}
              value={status.value}
              onSelect={(value) => {
                setSelectedStatus(
                  statuses.find((priority) => priority.value === value)
                )
                setOpen(false)
              }}
            >
              {status.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
