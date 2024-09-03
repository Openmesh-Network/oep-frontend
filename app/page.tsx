import React from "react"
import Image from "next/image"
import NextLink from "next/link"
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
import mongodb from "@/public/mongodb.svg"
import OpenmeshFull from "@/public/OpenmeshFull.png"
import partners from "@/public/partners.svg"
import polygon from "@/public/polygon.png"
import singularitynet from "@/public/singularitynet.svg"
import snowflake from "@/public/snowflake.svg"
import tokenChart from "@/public/token-chart.png"
import validationcloud from "@/public/validationcloud.png"
import vultr from "@/public/vultr.svg"

import { Button } from "@/components/ui/button"
import { Link, ListItem, Subtitle, Text, Title } from "@/components/base"
import Reserved from "@/components/custom/reserved"
import Tickets from "@/components/custom/tickets"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

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
          <div className="pt-2" />
          <Button
            className="w-64 bg-blue-600 text-lg hover:bg-blue-800"
            asChild
          >
            <NextLink href="#Whitelist">Whitelist Now</NextLink>
          </Button>
          <div className="pt-1" />
          <span className="text-wrap text-xs text-secondary">
            Whitelist closes on September 10th
          </span>
        </div>
        <section className="container absolute inset-x-0 top-[450px] grid items-center gap-6 py-10 pb-8">
          <Title>Openmesh Expansion Program</Title>
          <Text>
            The Openmesh Protocol and Openmesh Network are not private
            companies. The Openmesh Expansion Program is the first-ever
            community funding initiative approved by OpenmeshDAO in August to
            support the Openmesh roadmap and the expansion of Openmesh&apos;s
            infrastructure from Q3 2024 to Q4 2025.
          </Text>
          <Text>
            To date, Openmesh has never raised any funds from external sources.
            No VCs, no private sales, no node sales, and no ICOs. Since late
            2020, Openmesh has spent approximately $8.78 million in R&D,
            bootstrapped by the early founders.
          </Text>
          <Title>Background</Title>
          <Text>
            We all admire the core principles of Web3 — decentralization,
            fairness, transparency, and freedom. However, more than 82% of
            critical Web3 infrastructure such as dApps, Web3 services, Web3
            frontends, databases, APIs, and even validator nodes are hosted in
            centralized clouds like AWS/GCP.
          </Text>
          <Text>
            When Ethereum moved from PoW to PoS, it introduced a new problem.
            More than 70% of Ethereum nodes are running on AWS & GCP today. The
            largest, most active RPC providers in the entire Web3 space, not
            just Ethereum, are centralized and privately owned. Their tech is
            proprietary.
          </Text>
          <Text>
            Most of the L1s/L2a and DLTs are backed and managed by foundations.
            Having a private company or a non-profit foundation means having
            shareholders and directors. Having a bank account means having
            account holders and signatories. Having agreements between teams
            with the foundation means people and accountabilities are tied to a
            country or state. If governments or regulators want to shut down a
            Web3 service, they simply tell AWS or Google to shut it down.
          </Text>
          <Text>
            We envision a world where trust is built into the design, not into
            brands or people who are running it. Instead of relying on a small
            group of people, we should have technologies that are immutable by
            design and verified by widely distributed independent verifiers.
          </Text>
          <Title>Openmesh Protocol & Openmesh Network</Title>
<ScrollArea className="w-full whitespace-nowrap rounded-md border">
          <table>
            <tr>
              <td>About</td>
              <td>
                Building a Decentralized Cloud + Data + Oracle Network for the
                world, without a middleman.
                <br />
                <br />
                Openmesh Protocol combines the best features of L1 network
                programmability and security, the flexibility and scalability of
                public cloud solutions like AWS, and immutable data and
                decentralized oracles like Chainlink into a single solution.
                <br />
                <br />
                OpenmeshP2P: A platform that allows anyone to rent their unused
                computers to someone anywhere in the world. Openmesh connects
                providers (individual computer owners, businesses, data centers,
                and even public cloud providers) to customers, enabling
                startups, L1/L2 chains, and DAOs to compare and choose from
                thousands of providers instead of one, saving up to 90% on their
                infrastructure costs.
                <br />
                <br />
                The Openmesh Core is secured by Openmesh Core and a consensus
                algorithm. The network smart contracts and Openmesh PoS ensure
                security, privacy, and accountability, similar to the Bitcoin
                network.
              </td>
            </tr>
            <tr>
              <td>Basics</td>
              <td>
                Founded: Dec, 2020
                <br />
                Industry: Decentralized Cloud, DePin
                <br />
                Data points: 345m+
                <br />
                Products: 8+
                <br />
                Team, Active Contributors & Community: 6,400+
                <br />
                Integrations: 21
                <br />
                Partners: 26
              </td>
            </tr>
            <tr>
              <td>Core industries</td>
              <td>
                Decentralized cloud
                <br />
                Decentralized data lake
                <br />
                Decentralized analytics
                <br />
                Decentralized oracles
                <br />
                Node as a service
                <br />
                Decentralized infrastructure as a service
                <br />
                DePin
                <br />
              </td>
            </tr>
            <tr>
              <td>Vision & Why</td>
              <td>
                Building the next generation of open infrastructure that will be
                pivotal in shaping the next 10-20 years of the internet,
                preserving democracy, and ensuring a free flow of information.
              </td>
            </tr>
            <tr>
              <td>Core & Mission</td>
              <td>
                Bridging the gap between Web2 & Web3 and accelerate the Web3
                industry
              </td>
            </tr>
            <tr>
              <td>Team & Contributors</td>
              <td>
                Team brings diverse experience from prominent projects,
                including Fantom, Ripple, AWS, Cosmos, and Aragon.
              </td>
            </tr>
            <tr>
              <td>Core Technologies</td>
              <td>
                - Openmesh Cloud: Decentralized Cloud + Data + Oracle Network{" "}
                <br />- OpenmeshPoS: Consensus mechanism in the Openmesh Network{" "}
                <br />-{" "}
                <Link href="https://docs.openmesh.network/infrastructure/openmesh-core">
                  Openmesh Consensus
                </Link>
                : CometBFT engine in openmesh core to facilitate synchronisation
                between nodes who are listening to the same data, where a node
                proposes message chunks as a transaction and other nodes will
                verify that chunk.
                <br />-{" "}
                <Link href="https://docs.openmesh.network/products/openmesh-api/universal-data-collector-udc">
                  The Universal Data Collector (UDC)
                </Link>{" "}
                is a core component of Openmesh that collects, enhances, and
                standardizes data from various sources, including centralized
                exchanges and blockchain nodes.
                <br />
                - Openmesh Resource Aggregation Layer (ORAL): Pools and manages
                computational power, storage, and other network resources across
                Xnodes, enabling flexible, scalable, and market-driven resource
                provisioning.
                <br />-{" "}
                <Link href="https://docs.openmesh.network/infrastructure/xnodeos">
                  XnodeOS
                </Link>
                : decentralized operating system designed to manage and optimize
                the deployment of Xnodes within the Openmesh Network. It ensures
                efficient resource management, security, and interoperability
                for running decentralized applications and services, all while
                supporting the seamless integration of Web2 and Web3
                technologies.
              </td>
            </tr>
            <tr>
              <td>Technologies & Products</td>
              <td>
                -{" "}
                <Link href="https://www.openmesh.network/OpenAPI">OpenAPI</Link>
                : One of the largest data lakes and free crypto data streaming
                services.
                <br />-{" "}
                <Link href="https://www.openmesh.network/xnode">Xnode</Link>:
                Manages Openmesh network resources, including computational
                power and storage, across various deployment environments.
                <br />-{" "}
                <Link href="https://www.openmesh.network/xnode/templates">
                  Xnode Search
                </Link>
                : A Skyscanner-style infrastructure aggregation tool to search
                and connect with public clouds, private and public data centers,
                and independent resource providers.
                <br />-{" "}
                <Link href="https://www.openmesh.network/Pythiax">Pythia</Link>:
                ChatGPT for web3
                <br />-{" "}
                <Link href="https://www.openmesh.network/Pythiapro">
                  PythiaPro
                </Link>
                : Design, build, visualize, deploy, and store powerful data
                products directly in your Web3 wallet.
              </td>
            </tr>
            <tr>
              <td>Integrations & Partners</td>
              <td>
                Polygon, Chainlink, Aragon, MangoDB, ValidationCloud,
                DigitalOcean, Hivelocity, Equinix, SingularityNET, Snowflake,
                Vultr, Aiven, Confluent, Ascend, NVidia, Google Cloud,
                Avalanche, Arbatron, IBMcloud, Cosmos, Databricks, OVHcloud,
                Confluent, MotherDuck.
              </td>
            </tr>
            <tr>
              <td>Core Innovation & Breakthroughs</td>
              <td>
                - Multi-purpose Infrastructure as a Service (MPIaaS)
                <br />
                - Decentralized infrastructure as a foundation & censorship
                resistance by design
                <br />
                - Node Operator Economic Viability.
                <br />
                - Introducing a new kind of P2P open cloud infrastructure for
                compute, storage, and GPUs
                <br />
                - Better, faster, and affordable physical infrastructure
                <br />
                - DePINaaS: leveraging established cloud, physical
                infrastructure, and data center reliability to accelerate the
                decentralized network ecosystem
                <br />
                - Fully democratic data layer for the world without a middleman
                <br />
                - A great leap in infrastructure space - introducing greater
                user experience for infrastructure building
                <br />
                - Composable and interoperable network for Web2 and Web3 worlds
                <br />- Better open governance framework for ultimate
                transparency
              </td>
            </tr>
            <tr>
              <td>Network architecture </td>
              <td>
                - Decentralized architecture (No middleman)
                <br />
                - Immutability by design
                <br />
                - Local Interconnectivity
                <br />
                - Self-Healing Systems
                <br />
                - Redundancy Design
                <br />- Openmesh PoS
              </td>
            </tr>
            <tr>
              <td>Openmesh Major Highlights for 2024</td>
              <td>
                - <strong>September:</strong> Openmesh is giving away $100m
                worth of cloud credit to Web3 startups, protocols, and DAOs to
                jump-start the DePIN movement.
                <br />- <strong>September:</strong> Artificial Superintelligence
                Alliance RFP - Large-scale AI-optimized data center in
                collaboration with Nvidia, The Xnode MDC (Modular Data Center).
                <br />- <strong>September:</strong> Web3 Node Adoption
                Initiative with Chainlink, Fantom, Polygon, Avalanche, and 6+
                more chains.
                <br />- <strong>October:</strong> Openmesh Cloud launch with 90%
                lower costs than any cloud provider.
                <br />- <strong>October:</strong> Openmesh Node Sale.
                <br />- <strong>October:</strong> CCIP {"<>"} Xnode
                Launch—Connecting On-chain to Web2 Infrastructure for devs, Web3
                startups, protocols & DAOs + $5m Openmesh Cloud Resources
                announcement.
                <br />- <strong>October:</strong> First decentralized Xnode
                Hardware Launch.
                <br />- <strong>November:</strong> NYC OpenD/I 2024 Conference
                by Openmesh.
                <br />- <strong>December:</strong> OpenD/I Developer Conference
                2024 by Openmesh.
              </td>
            </tr>
            <tr>
              <td>
                <Link href="https://www.openmesh.network/Governance">
                  Governance & Transparency
                </Link>
              </td>
              <td>
                - Decentralized Governance: Decisions are made collectively by
                the community through OpenmeshDAO, where stakeholders can
                propose, vote, and implement changes to the network.
                <br />
                - Transparency: All decisions, financial allocations, and
                updates are publicly accessible, ensuring that the community can
                track the progress and actions taken within the network.
                <br />- Accountability: The framework ensures that those
                involved in governance are held accountable for their actions,
                promoting trust and integrity within the network.
              </td>
            </tr>
            <tr>
              <td>
                <Link href="https://open-mesh.gitbook.io/l3a-dao-documentation">
                  OpenmeshDAO
                </Link>
              </td>
              <td>
                Manage community projects, Openmesh Protocol Bylaws, propose,
                and implement decisions, treasury management, ensuring
                collective governance and transparency within the network.
              </td>
            </tr>
            <tr>
              <td>
                <Link href="https://circle.openmesh.network/">OpenCircle</Link>
              </td>
              <td>
                A go-to place to learn, meet people, connect, and apply what
                you have learned. Find projects to work on and earn for your
                contributions, regardless of where you live and work, through
                OpenR&D.
              </td>
            </tr>
            <tr>
              <td>Important Links</td>
              <td>
                <Link href="https://www.openmesh.network/Protocol">
                  Protocol & Network
                </Link>
                <br />
                <Link href="https://boards.greenhouse.io/openmesh">Career</Link>
                <br />
                <Link href="https://circle.openmesh.network/">OpenCircle</Link>
                <br />
                <Link href="https://www.openmesh.network/Openrnd">OpenR&D</Link>
                <br />
                <Link href="https://www.openmesh.network/Xnodepage">Xnode</Link>
                <br />
                <Link href="https://www.openmesh.network/xnode">
                  Xnode Studio
                </Link>
                <br />
                <Link href="https://docs.openmesh.network/infrastructure/xnodeos">
                  XnodeOS
                </Link>
                <br />
                <Link href="https://www.openmesh.network/Pythiax">PythiaX</Link>
                <br />
                <Link href="https://blog.openmesh.network/">
                  Updates & News
                </Link>
                <br />
                <Link href="https://www.openmesh.network/ExpertNetwork">
                  Expert Network
                </Link>
                <br />
                <Link href="https://www.openmesh.network/Documentation">
                  Documentation
                </Link>
                <br />
                <Link href="https://github.com/Openmesh-Network">Github</Link>
                <br />
                <Link href="https://www.openmesh.network/Socialmedia">
                  Social Media
                </Link>
                <br />
                <Link href="https://docs.openmesh.network/products/openmesh-api/supported-feeds-and-symbols">
                  Price Feeds
                </Link>
                <br />
                <Link href="https://www.openmesh.network/xnode/rpc">
                  RPC Nodes
                </Link>
                <br />
                <Link href="https://odi.openmesh.network/">OpenD/I</Link>
              </td>
            </tr>
          </table>
<ScrollBar orientation="horizontal" /></ScrollArea>
          <Title>Token distribution</Title>
<ScrollArea className="w-full whitespace-nowrap rounded-md border">
          <table>
            <tr>
              <td>
                <strong>Core, Network, Security & Node Operators</strong>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>- Technical Infrastructure & Server Maintenance</td>
              <td>2%</td>
            </tr>
            <tr>
              <td>- Node Operators Rewards</td>
              <td>20%</td>
            </tr>
            <tr>
              <td>- Early Node Validators Program Rewards</td>
              <td>8%</td>
            </tr>
            <tr>
              <td>- Early Node Validators Program Bonus</td>
              <td>2%</td>
            </tr>
            <tr>
              <td>- Verified Resource Providers</td>
              <td>2%</td>
            </tr>
            <tr>
              <td>- Data Providers, Indexers & Data Validators</td>
              <td>1%</td>
            </tr>
            <tr>
              <td>- Staking Rewards</td>
              <td>1%</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <strong>36%</strong>
              </td>
            </tr>
            <tr>
              <td></td>
              <td><br /></td>
            </tr>
            <tr>
              <td>
                <strong>Research and Development</strong>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>- Current & Future Team, Advisors & Supporters</td>
              <td>20%</td>
            </tr>
            <tr>
              <td>- Verified Contributors Incentive (OpenR&D)</td>
              <td>8%</td>
            </tr>
            <tr>
              <td>- Team Achievements Rewards Fund</td>
              <td>1%</td>
            </tr>
            <tr>
              <td>- Support Fund</td>
              <td>0.5%</td>
            </tr>
            <tr>
              <td>- Grants</td>
              <td>1%</td>
            </tr>
            <tr>
              <td>- Circle (Education and Training)</td>
              <td>0.5%</td>
            </tr>
            <tr>
              <td>- Bug Bounties</td>
              <td>1%</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <strong>32%</strong>
              </td>
            </tr>
            <tr>
              <td></td>
              <td><br /></td>
            </tr>
            <tr>
              <td>
                <strong>Ecosystem Development</strong>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>- Decentralized Cloud Initiative</td>
              <td>5%</td>
            </tr>
            <tr>
              <td>- Community Content Creation & Community Development</td>
              <td>1%</td>
            </tr>
            <tr>
              <td>- Circle Reserve (Community Incentives)</td>
              <td>2%</td>
            </tr>
            <tr>
              <td>- Partnerships and Collaborations</td>
              <td>2%</td>
            </tr>
            <tr>
              <td>- User Acquisition & Ecosystem Incentives</td>
              <td>2%</td>
            </tr>
            <tr>
              <td>- Other Community and Marketing</td>
              <td>8%</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <strong>20%</strong>
              </td>
            </tr>
            <tr>
              <td></td>
              <td><br /></td>
            </tr>
            <tr>
              <td>
                <strong>Fundraising and Reserves</strong>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>- Fundraising Activities and Future Growth</td>
              <td>5%</td>
            </tr>
            <tr>
              <td>- Reserve</td>
              <td>3%</td>
            </tr>
            <tr>
              <td>- Liquidity</td>
              <td>2%</td>
            </tr>
            <tr>
              <td>- Governance and Administration</td>
              <td>1%</td>
            </tr>
            <tr>
              <td>- Operational Costs</td>
              <td>1%</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <strong>12%</strong>
              </td>
            </tr>
          </table>
<ScrollBar orientation="horizontal" /></ScrollArea>
          <Image alt="Token distribution chart" src={tokenChart} />
          <Title>Openmesh partners</Title>
          <Image alt="Partners" src={partners} />
          <Title>Primary resource allocation</Title>
<ScrollArea className="w-full whitespace-nowrap rounded-md border">
          <table>
            <tr>
              <td>Pre-Genesis</td>
              <td>
                Dec 2020 - Sep 2024
                <br />
                $8,856,898 by Openmesh founding team
              </td>
            </tr>
            <tr>
              <td>Genesis Private Event</td>
              <td>
                <strong>Openmesh Expansion Program</strong>
                <br />
                Purpose: Support Q3 2024 - Q3 2025 R&D
                <br />
                <br />
                Dates: Sep 01 - Sep 10, 2024
                <br />
                Soft cap: $500,000
                <br />
                MaxCap: $1,800,000
                <br />
                sOPEN: $0.073
                <br />
                MC (CS): $8,760,000
              </td>
            </tr>
            <tr>
              <td>Private Event</td>
              <td>
                <strong>Decentralized Cloud Initiative</strong>
                <br />
                Purpose: US$100 million in public cloud resources to support and
                accelerate the Web3 ecosystem in 2024
                <br />
                <br />
                Dates: Sep 20 - Sep 30, 2024
                <br />
                Soft cap: $1,200,000
                <br />
                MaxCap: $6,300,000
                <br />
                sOPEN: $0.14
                <br />
                MC (CS): $16,800,000
              </td>
            </tr>
            <tr>
              <td>Public Event</td>
              <td>
                <strong>Openmesh Node Sale</strong>
                <br />
                Purpose: Xnode License Distribution & Early Node Validator
                Program
                <br />
                <br />
                Dates: Oct 28 - Oct 30, 2024
                <br />
                Soft cap: $8,700,000
                <br />
                MaxCap: $18,000,000
                <br />
                OPEN: $0.21-$0.27
                <br />
                MC (CS): $25,320,000 - $32,400,000
              </td>
            </tr>
          </table>
<ScrollBar orientation="horizontal" /></ScrollArea>
          <Title>Openmesh Expansion Program (OEP) 2024 Participation</Title>
<ScrollArea className="w-full whitespace-nowrap rounded-md border">
          <table>
            <tr>
              <td>Basics</td>
              <td>
                Soft cap: $500,000
                <br />
                MaxCap: $1,800,000
                <br />
                sOPEN: $0.073
                <br />
                MC (CS): $8,760,000
                <br />
                FDV: 73,000,000
                <br />
                Min. Ticket Size 25k
              </td>
            </tr>
            <tr>
              <td>Tokens</td>
              <td>
                sOPEN (ERC20) - Pre-TGE
                <br />
                OPEN (ERC20)
                <br />
                1:1 Exchange rate
              </td>
            </tr>
            <tr>
              <td>Discount</td>
              <td>Up to 75%</td>
            </tr>
            <tr>
              <td>Redeem</td>
              <td>Openmesh Cloud or sOPEN</td>
            </tr>
            <tr>
              <td>Whitelisting</td>
              <td>11:59 PM UTC, Sep 01, 2024 - 11:59 PM UTC, Sep 10, 2024</td>
            </tr>
            <tr>
              <td>Payment and Confirmation Phase</td>
              <td>11:59 PM UTC, Sep 01, 2024 - 11:59 PM UTC, Sep 10, 2024</td>
            </tr>
            <tr>
              <td>Accepted Payment Methods</td>
              <td>ETH, USDT, USDC</td>
            </tr>
            <tr>
              <td>Vesting</td>
              <td>12 Months (linear)</td>
            </tr>
            <tr>
              <td>Not available for</td>
              <td>
                China, South Korea, India, United States, Canada, Russia, Saudi
                Arabia
              </td>
            </tr>
            <tr>
              <td>Important Links</td>
              <td>
                <Link href="https://oep.openmesh.network">Main website</Link><br />
                <Link href="https://oep.openmesh.network/assetTransfer">
                  Asset transfer
                </Link><br />
                <Link href="https://docs.openmesh.network/openmesh-expansion-program/how-to-whitelist">
                  Whitelist guide
                </Link><br />
                <Link href="https://docs.openmesh.network/openmesh-expansion-program/how-to-perform-asset-transfer">
                  Asset transfer guide
                </Link>
              </td>
            </tr>
            <tr>
              <td>Receiving wallet</td>
              <td>
                <Link href="https://etherscan.io/address/0x24496D746Fd003397790E41d0d1Ce61F4F7fd61f">
                  0x24496D746Fd003397790E41d0d1Ce61F4F7fd61f
                </Link>
              </td>
            </tr>
            <tr>
              <td>ENS</td>
              <td>openmesh-network.eth</td>
            </tr>
          </table>
<ScrollBar orientation="horizontal" /></ScrollArea>
          <Title>Participation Logistics</Title>
          <Subtitle>1. Sponsors Meetup</Subtitle>
          <Text>
            Selected sponsors will meet the Openmesh team to discuss the roadmap
            and understand how their contributions will accelerate
            Openmesh&apos;s expansion. This event will also serve as an
            opportunity for in-depth discussions and clarifications regarding
            the sponsorship process.
          </Text>
          <Subtitle>
            2. Payment and Confirmation Phase (Sep 01st - September 10th)
          </Subtitle>
          <Text>Whitelist and payment confirmation.</Text>
          <Subtitle>
            3. Post-Participation and Minting Phase (Sep 10th, 2024 - Sep 10th,
            2025)
          </Subtitle>
          <Text>
            Sponsors will receive Cloud Credits, redeemable as Xnodes, which can
            be utilized to support the Decentralized Cloud Initiative (DCI) and
            other Openmesh services, or converted into sOPEN or OPEN tokens. As
            early backers, sponsors may also receive governance tokens as a
            token of appreciation for their support. These tokens will enable
            sponsors to contribute to the network&apos;s governance, particularly in
            roles such as network operators, Verified Contributors, and Openmesh
            Verified Resource Providers.
          </Text>
          <Title>Key Considerations</Title>
          <Subtitle>Legal and Tax Compliance</Subtitle>
          <Text>
            DAO Culture and Legal Considerations:
            <ListItem>
              Exploring DAO Culture: Openmesh operates within the evolving
              framework of a DAO, a structure that is relatively new and still
              in experimental phases. Openmesh is taking proactive steps to
              address legal and tax-related concerns, particularly for sponsors
              based in Australia. A specialized tax law firm in Sydney will
              manage all necessary reporting and filings, ensuring compliance
              without requiring the establishment of a formal company, given
              that Openmesh is structured as a Decentralized Autonomous
              Organization (DAO). (DAO structures are very common practice in
              the Web3 industry)
            </ListItem>
            <ListItem>
              To ensure the integrity and longevity of Openmesh and following
              the pure decentralization philosophy, we refuse to establish a
              legal entity where we may have centralized chokepoints.
            </ListItem>
            <ListItem>
              The legal status of DAOs in Australia and the US is unclear,
              creating certain ambiguities. Openmesh is navigating this emerging
              space with a focus on innovation and ethical practices, while also
              trying to navigate and respect the law of the land.
            </ListItem>
          </Text>
          <Subtitle>Liability and Risk Management</Subtitle>
          <Text>
            By participating in or contributing to the Openmesh initiative,
            including but not limited to providing sponsorship, donations, or
            any form of support, all participants, contributors, and sponsors
            expressly agree to waive any and all claims of liability against
            Openmesh, its brand, its contributors, and any associated
            individuals or entities.
          </Text>
          <Text>
            Furthermore, all participants, contributors, and sponsors agree to
            indemnify, defend, and hold harmless Openmesh, its affiliates,
            employees, agents, and representatives from and against any and all
            claims, liabilities, damages, losses, or expenses (including
            reasonable attorneys&apos; fees) arising out of or related to their
            participation or contributions to Openmesh.
          </Text>
          <Text>
            This waiver is comprehensive and covers all forms of potential
            liability, ensuring that Openmesh and its associated parties are
            fully protected from any legal or financial consequences related to
            the initiative.
          </Text>
          <Subtitle>Transparency and Ethical Commitment</Subtitle>
          <Text>
            Openmesh is committed to transparency and ethical operations. All
            activities related to the Openmesh Expansion Program will be
            conducted with the highest standards of integrity, ensuring that all
            parties involved are fully informed and protected.
          </Text>
          <Title id="Whitelist">Whitelist</Title>
          <Link href="https://docs.openmesh.network/openmesh-expansion-program/how-to-whitelist">
            Whitelist Guide
          </Link>
          <Tickets />
          <Title>Your tickets</Title>
          <Reserved />
        </section>
      </section>
    </>
  )
}
