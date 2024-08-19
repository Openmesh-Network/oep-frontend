import React from "react"
import Image from "next/image"
import aiven from "@/public/aiven.svg"
import aragon from "@/public/aragon.png"
import chainlink from "@/public/chainlink.svg"
import digitalocean from "@/public/digitalocean.svg"
import equinix from "@/public/equinix.svg"
import fantom from "@/public/fantom.png"
import HeaderBackground from "@/public/HeaderBackground.png"
import hivelocityFull from "@/public/hivelocity-full.svg"
import hivelocity from "@/public/hivelocity.svg"
import OpenmeshLogo from "@/public/logo.svg"
import Mechanics from "@/public/mechanics.png"
import mongodb from "@/public/mongodb.svg"
import OpenmeshFull from "@/public/OpenmeshFull.png"
import partners from "@/public/partners.svg"
import polygon from "@/public/polygon.png"
import singularitynet from "@/public/singularitynet.svg"
import snowflake from "@/public/snowflake.svg"
import validationcloud from "@/public/validationcloud.png"
import vultr from "@/public/vultr.svg"

import { ListItem, Subtitle, Text, Title } from "@/components/base"
import Reserved from "@/components/custom/reserved"
import Tickets from "@/components/custom/tickets"

export default function IndexPage() {
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
          <Image
            className="h-[50px] w-[225px] md:h-[66px] md:w-[300px]"
            alt="Openmesh logo"
            src={OpenmeshFull}
            height={66}
            width={300}
          />
          <div className="pt-6" />
          <h1 className="whitespace-break-spaces text-4xl text-secondary md:text-6xl">
            Openmesh Expansion <br className="hidden sm:inline" />
            Program (OEP) 2024
          </h1>
          <div className="pt-36" />
        </div>
        <Title>Objective</Title>
        <Text>
          The Openmesh Expansion Program aims to secure financial sponsorships
          to support the growth and expansion of Openmesh’s infrastructure in
          Q3-Q4 2024. By participating in this program, sponsors will directly
          contribute to the development of a decentralized cloud network,
          furthering the mission of democratizing access to decentralized
          infrastructure for the Web3 and startup ecosystems.
        </Text>
        <Title>About Openmesh</Title>
        <Text>
          Openmesh Network is a new kind of Cloud + Data Network built for the
          web2 and web3 industries. Openmesh is similar to Amazon AWS, Microsoft
          Azure, NVidia, and Google Cloud but designed for the future of the
          internet - web3. It combines the best features of AWS, IPFS,
          Chainlink, BitTorrent, and Oracle Cloud into a single solution that
          offers decentralized oracle and cloud capabilities. Our team brings
          diverse experience from prominent web2 companies and web3 projects,
          including Fantom, Ripple, AWS, Oracle, Cosmos, and Aragon. Our team is
          predominantly located in Sydney and the U.S.
        </Text>
        <Title>The Problem We Are Solving</Title>
        <Text>
          To grow and innovate in any industry, we need better infrastructure.
          Just as cities require improved bridges, schools, roads, and
          healthcare systems to enhance productivity and quality of life, so too
          does the technology that powers our daily lives. . Web3 is the future
          of the internet, and it is a pivotal point where improvements are
          necessary.
        </Text>
        <Text>
          The cloud and data industry is a $5 trillion dollar industry and is
          expected to grow, but it is currently controlled by 4-5 large
          corporations that dominate the world&apos;s data, IT infrastructure,
          and AI capabilities. Openmesh aims to do what Airbnb and Uber did for
          the transportation and hotel industries, allowing people to offer
          their unused compute, storage, and GPUs instead of relying solely on
          large corporations like Google.
        </Text>
        <Text>
          We currently have the largest data center connectivity and access to
          CPUs, GPUs, and storage in web3. Our goal is to accelerate web3 by
          integrating the world&apos;s fastest internet connectivity, data
          centers, GPUs, CPUs, and storage.
        </Text>
        <Title>Our Vision</Title>
        <Text>
          We envision a world where data is open, decentralized, and beneficial
          to everyone, not just a select few. This isn&apos;t solely about
          technology but rather about shaping the next 10-20 years of the
          internet, preserving democracy, and ensuring a free flow of
          information for generations to come.
        </Text>
        <Subtitle>Main Products</Subtitle>
        <Text>
          <ListItem>
            Openmesh Cloud: Decentralized Cloud + Data + Oracle Network
          </ListItem>
          <ListItem>
            OpenAPI: One of the largest data lakes and free crypto data
            streaming services.
          </ListItem>
          <ListItem>
            Xnode: Manages Openmesh network resources, including computational
            power and storage, across various deployment environments.
          </ListItem>
          <ListItem>
            Xnode Search: A Skyscanner-style infrastructure aggregation tool to
            search and connect with public clouds, private and public data
            centers, and independent resource providers.
          </ListItem>
          <ListItem>Pythia: ChatGPT for web3</ListItem>
        </Text>
        <Subtitle>Openmesh partners</Subtitle>
        {/* <div className="flex w-full flex-wrap items-center gap-x-10 gap-y-5 pt-5 md:gap-x-28">
          <Partner src={equinix} />
          <Partner src={singularitynet} />
          <Partner src={vultr} />
          <Partner src={snowflake} />
          <Partner src={aiven} />
          <Partner src={polygon} />
          <Partner src={chainlink} />
          <Partner src={aragon} />
          <Partner src={mongodb} />
          <Partner src={validationcloud} />
          <Partner src={digitalocean} />
          <Partner src={hivelocityFull} />
          <Partner src={fantom} />
        </div> */}
        <Image alt="Partners" src={partners} />
        <Subtitle>Openmesh Major Highlights for 2024</Subtitle>
        <Text>
          <ListItem>
            July: We launched the world&apos;s first decentralized virtual
            machine, which we called Xnode, and plan to scale significantly in
            the next 6-12 months.
          </ListItem>
          <ListItem>
            August: We are launching a $100 Million Decentralized Cloud Credit
            Giveaway marketing campaign (“Decentralized Cloud Initiative 2024”),
            where we are committing $100 million worth of cloud credits to
            support the web3 startup ecosystem. This is the largest commitment
            by any decentralized cloud project in web3 to date.
          </ListItem>
          <ListItem>
            August: Nvidia, Snowflake, Google partnership announcements
          </ListItem>
          <ListItem>
            September: Web3 Node Adoption Initiative with Chainlink, Fantom,
            Polygon, Avalanche, and 20+ more chains
          </ListItem>
          <ListItem>
            September: CCIP and Decentralized Cloud Infrastructure
          </ListItem>
          <ListItem>
            September: Openmesh Cloud launch with 90% lower cost than any cloud
            provider
          </ListItem>
          <ListItem>
            September: Openmesh Developer Conference in Bangalore, India,
            expecting 2,000+ web developers in attendance
          </ListItem>
          <ListItem>
            October: First decentralized Xnode Hardware Launch
          </ListItem>
          <ListItem>
            November: OpenD/I 2024 Conference & Hackathon sponsored by Openmesh
            and held in New York City
          </ListItem>
        </Text>
        <Title>Sponsorship Overview</Title>
        <Subtitle>Key Dates for Financial Sponsors</Subtitle>
        <Text>
          <ListItem>
            July 6th - September 15th, 2024: Payment and Confirmation Phase
          </ListItem>
          <ListItem>
            July 8th, 2024 - July 7th, 2025: Post-Participation and Minting
            Phase
          </ListItem>
        </Text>
        <Subtitle>Target Sponsorship Goals</Subtitle>
        <Text>
          <ListItem>Minimum Funding Target: US$500,000</ListItem>
          <ListItem>
            Funds will be used for Openmesh operational expenses and to support
            strategic expansions planned through 2024.
          </ListItem>
        </Text>
        <Subtitle>Sponsorship Levels</Subtitle>
        <Text>
          Sponsors can contribute through donations ranging from $50,000 to
          $500,000. These contributions will be funneled into an OpenR&D smart
          contract, ensuring transparency and proper allocation of resources
          towards Openmesh&apos;s expansion goals.
        </Text>
        <Subtitle>Accepted Payment Methods</Subtitle>
        <Text>
          <ListItem>Cryptocurrencies: ETH, USDT, USDC</ListItem>
          <ListItem>Bank Transfer</ListItem>
        </Text>
        <Title>Participation Logistics</Title>
        <Subtitle>1. Sponsors Meetup</Subtitle>
        <Text>
          <ListItem>Event Date: Next Saturday (Specific date TBD)</ListItem>
          <ListItem>Location: Sydney and remote participation options</ListItem>
          <ListItem>
            Purpose: Selected sponsors will meet the Openmesh team to discuss
            the roadmap and understand how their contributions will accelerate
            Openmesh&apos;s expansion. This event will also serve as an
            opportunity for in-depth discussions and clarifications regarding
            the sponsorship process.
          </ListItem>
        </Text>
        <Subtitle>
          2. Payment and Confirmation Phase (July 6th - September 15th)
        </Subtitle>
        <Text>
          <ListItem>
            Invoice & Payment: After the event, sponsors will receive an invoice
            and choose their preferred payment method. The payment should be
            completed during this phase to confirm participation in the program.
          </ListItem>
        </Text>
        <Subtitle>
          3. Post-Participation and Minting Phase (July 8th, 2024 - July 7th,
          2025)
        </Subtitle>
        <Text>
          <ListItem>
            Minting Cloud Credits: Sponsors will receive Cloud Credits,
            redeemable as Xnodes, which can be utilized to support the
            Decentralized Cloud Initiative (DCI) or other Openmesh services.
          </ListItem>
          <ListItem>
            Governance Tokens: As early backers, sponsors may also receive
            governance tokens as an appreciation for their support. These tokens
            will allow sponsors to contribute to the network&apos;s governance,
            particularly in becoming an Openmesh Verified Resource Provider.
          </ListItem>
        </Text>
        <Title>Key Considerations</Title>
        <Subtitle>Legal and Tax Compliance</Subtitle>
        <Text>
          Openmesh is taking proactive steps to address legal and tax-related
          concerns, particularly for sponsors based in Australia. A specialized
          tax law firm in Sydney will manage all necessary reporting and
          filings, ensuring compliance without requiring the establishment of a
          formal company, given Openmesh is structured as a Decentralized
          Autonomous Organization (DAO). (DAO structures are very common
          practice in the Web3 industry)
        </Text>
        <Subtitle>Liability and Risk Management</Subtitle>
        <Text>
          <ListItem>
            Liability Waivers: A legal agreement will be drafted, clearly
            stating that the sponsorship is a donation to support
            Openmesh&apos;s roadmap, with no expectations of returns or
            liabilities. This agreement will protect both the sponsors and the
            Openmesh team from legal risks.
          </ListItem>
          <ListItem>
            DAO Structure: Openmesh operates as a DAO, which allows for
            decentralized management of resources and decision-making. This
            structure aligns with our core values and mitigates traditional
            business liabilities.
          </ListItem>
        </Text>
        <Title>Transparency and Ethical Commitment</Title>
        <Text>
          Openmesh is committed to transparency and ethical operations. All
          activities related to the Openmesh Expansion Program will be conducted
          with the highest standards of integrity, ensuring that all parties
          involved are fully informed and protected.
        </Text>
        <Title>Next Steps for Sponsors</Title>
        <Text>
          <ListItem>
            Attend the Sponsors Meetup: Engage with the Openmesh team to
            understand the roadmap and clarify any questions.
          </ListItem>
          <ListItem>
            Complete Payment: Choose a sponsorship level and complete the
            payment within the designated phase.
          </ListItem>
          <ListItem>
            Receive Cloud Credits & Tokens: After participation, mint your Cloud
            Credits and, if desired, claim governance tokens.
          </ListItem>
          <ListItem>
            Stay Engaged: Contribute to the Openmesh community and stay informed
            about ongoing developments.
          </ListItem>
        </Text>
        <Title>Whitelist</Title>
        <Tickets />
        <Title>Your tickets</Title>
        <Reserved />
      </section>
    </>
  )
}
