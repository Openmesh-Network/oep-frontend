import Image from "next/image"
import Link from "next/link"
import HeaderBackground from "@/public/HeaderBackground.png"
import OpenmeshFull from "@/public/OpenmeshFull.png"

import { Text, Title } from "@/components/base"
import { DonateForm } from "@/components/custom/donate-form"

export default function DonatePage() {
  return (
    <>
      <div className="absolute inset-x-0 top-0 -z-50 flex h-[500px] place-content-center overflow-hidden bg-black">
        <Image
          className="w-full object-none"
          alt="Header background"
          src={HeaderBackground}
          height={500}
        />
      </div>
      <section className="container grid items-center gap-6 py-10 pb-8">
        <div className="ml-12 flex w-full flex-col items-start gap-2">
          <div className="pt-6" />
          <Link href="/">
            <Image
              className="h-[50px] w-[225px] md:h-[66px] md:w-[300px]"
              alt="Openmesh logo"
              src={OpenmeshFull}
              height={66}
              width={300}
            />
          </Link>
          <div className="pt-6" />
          <Link href="/">
            <h1 className="whitespace-break-spaces text-4xl text-secondary md:text-6xl">
              Openmesh Expansion <br className="hidden sm:inline" />
              Program (OEP) 2024
            </h1>
          </Link>
        </div>
        <section className="container absolute inset-x-0 top-[450px] grid items-center gap-6 py-10 pb-8">
          <Title>Asset Transfer</Title>
          <Text>
            Perform asset transfer of the whitelisted amount. Assets will be
            sent to openmesh-network.eth, after which they will be used to fund
            several OpenR&D tasks. You are recommended to perform a test
            transaction first.
          </Text>
          <Link
            className="text-blue-600 hover:text-blue-800 underline"
            href="https://docs.openmesh.network/openmesh-expansion-program/how-to-perform-asset-transfer"
            target="_blank"
          >
            Asset Transfer Guide
          </Link>
          <DonateForm />
        </section>
      </section>
    </>
  )
}
