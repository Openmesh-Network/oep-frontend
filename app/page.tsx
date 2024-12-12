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
            Whitelist closes on December 31st
          </span>
        </div>
        <section className="container absolute inset-x-0 top-[475px] grid items-center gap-6 py-10 pb-8">
          <Text>
            <strong>
              Openmesh: Powering a Decentralized Future with Permissionless
              Cloud Infrastructure. Seamlessly Operate Blockchain Nodes, Web3,
              and Web2 Apps - Free from Centralized Servers.
            </strong>
          </Text>
          <Title>Decentralization Compromised</Title>
          <Text>
            A critical issue in Web3 is the growing dependence of blockchain
            nodes being hosted on centralized Web2 infrastructure.{" "}
          </Text>
          <Text>
            More than 80% of critical Web3 infrastructure—including validator
            nodes, dApps, frontends, databases, and APIs—relies on centralized
            cloud platforms like AWS and Google Cloud. Ethereum&apos;s
            transition from Proof of Work (PoW) to Proof of Stake (PoS)
            exacerbated this centralization, with more than 70% of Ethereum
            nodes now relying on these same centralized cloud providers.
          </Text>
          <Text>
            This reliance undermines decentralization both operationally and
            technically, introducing avoidable vulnerabilities. If governments
            or regulatory authorities seek to target and terminate any Web3
            service, they can direct cloud service providers, such as AWS or
            Google, to cease providing their services to these nodes. Similarly,
            a simple change in a cloud provider&apos;s Terms of Service could
            disrupt or even block the ability of nodes to operate.
          </Text>
          <Text>
            The impact on blockchains and the dApps they support is substantial,
            calling for a solution that can restore true decentralization and
            resilience in Web3 infrastructure.
          </Text>
          <Title>Openmesh&apos;s Solution</Title>
          <Text>
            Openmesh is building a fully decentralized cloud, data, and oracle
            network that eliminates the need for middlemen and centralized
            servers. By providing decentralized, permissionless cloud
            infrastructure, Openmesh ensures that blockchain nodes, Web3, and
            even Web2 applications can operate seamlessly without the threat of
            regulatory overreach or centralized control. With Openmesh, trust is
            embedded in the system itself, validated by a decentralized network
            of independent, anonymous validators, ensuring immutability and
            security by design.
          </Text>
          <Title>Principles and Governance</Title>
          <Text>
            Openmesh is built on the core principles of Web3: decentralization,
            transparency, immutability, and security, ensuring sovereignty for
            all users. These values are deeply embedded in Openmesh&apos;s
            design and architecture, making it a truly decentralized solution.{" "}
          </Text>
          <Text>
            Openmesh operates under a Decentralized Autonomous Organization
            (DAO), not as a private company. This governance model allows for
            community-driven decision-making and ensures that no single entity
            has control over the network. Since its inception in late 2020,
            Openmesh has invested approximately $8.78 million in research and
            development, entirely bootstrapped by its early founders without any
            external funds, venture capital, private sales, or ICOs. This
            self-sustained approach demonstrates our commitment to building a
            resilient and independent network. The DAO structure not only aligns
            with our decentralization goals but also fosters a collaborative
            environment where all stakeholders have a voice in shaping the
            future of Openmesh.
          </Text>
          <Title>Community-Driven Growth</Title>
          <Text>
            The Openmesh Expansion Program (OEP) is a community-funded
            initiative approved by OpenmeshDAO to support the development of the
            Openmesh roadmap and expand its infrastructure from Q3 2024 through
            Q4 2025. Whitelist now—closing December 31st—to participate in
            Openmesh&apos;s ongoing efforts to reshape decentralized
            infrastructure and secure the future of Web3.
          </Text>
          <Text>
            By participating in the OEP, you play a crucial role in advancing
            decentralized cloud infrastructure and securing the future of Web3.
          </Text>
          <Title>Whitelist now - closing December 31st</Title>
          <Text>
            <Button
              className="w-64 bg-blue-600 text-lg hover:bg-blue-800"
              asChild
            >
              <NextLink href="#Whitelist">Whitelist Now</NextLink>
            </Button>
          </Text>
          <Title>Openmesh Protocol & Openmesh Network</Title>
          <table className="w-full">
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
                Industry: Decentralized Cloud Infrastructure. Decentralized
                Cloud DePin (Decentralized Physical Infrastructure Network)
                <br />
                Data points: 345m+
                <br />
                Products: 8+ to date
                <br />
                Team, Active Contributors & Community: 6,400+
                <br />
                Integrations: 21 to date
                <br />
                Partners: 26 to date
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
                DePin (Decentralized Physical Infrastructure Network)
                <br />
              </td>
            </tr>
            <tr>
              <td>Vision & Why</td>
              <td>
                Building the next generation of open infrastructure that will be
                pivotal in shaping the future of permissionless internet,
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
                - <strong>XnodeOS</strong>: Efficiently managing Xnodes,
                ensuring security, resource optimization, and Web2/Web3
                integration.
                <br />-{" "}
                <strong>Openmesh Resource Aggregation Layer (ORAL)</strong>:
                Pools and manages computational power, storage, and other
                network resources across Xnodes, enabling flexible, scalable,
                and market-driven resource provisioning.
                <br />-{" "}
                <Link href="https://www.openmesh.network/OpenAPI">OpenAPI</Link>
                : One of the largest data lakes and free crypto data streaming
                services.
                <br />-{" "}
                <Link href="https://www.openmesh.network/xnode">Xnode</Link>:
                Manages Openmesh network resources, including computational
                power and storage, across various deployment environments.
                <br />-{" "}
                <Link href="https://www.openmesh.network/Pythiax">Pythia</Link>:
                ChatGPT for web3
                <br />-{" "}
                <Link href="https://www.openmesh.network/Pythiapro">
                  PythiaPro
                </Link>
                : Design, build, visualize, deploy, and store powerful data
                products directly in your Web3 wallet.
                <br />-{" "}
                <Link href="https://www.openmesh.network/xnode/app-store">
                  Xnode Search
                </Link>
                : A Skyscanner-style infrastructure aggregation tool to search
                and connect with public clouds, private and public data centers,
                and independent resource providers.
                <br />- <strong>OpenmeshConsensus</strong>
                <br />- <strong>OpenmeshPoS</strong>
                <br />- <strong>The Universal Data Collector (UDC)</strong>
              </td>
            </tr>
            <tr>
              <td>Integrations & Partners</td>
              <td>
                Equinix, OVHcloud, Vultr, Chainlink, Polygon, Aragon, MangoDB,
                ValidationCloud, DigitalOcean, Hivelocity, SingularityNET,
                Snowflake, Aiven, Confluent, Ascend, NVidia, Google Cloud,
                Avalanche, Arbitrum, IBMcloud, Cosmos, Databricks, MotherDuck.
              </td>
            </tr>
            <tr>
              <td>Core Innovation & Breakthroughs</td>
              <td>
                - Decentralized & Immutable Cloud as a Service.
                <br />- Xnode Studio: enabling anyone to rent their computers
                unused storage and bandwidth for hosting files to someone
                anywhere in the world. An Airbnb for cloud and Infrastructure.
                <br />- Resource Aggregation for digital commodities; Like
                Skyscanner for CPUs, GPUs, storage and bandwidth aggregation
                tool that searches and connects with public clouds, private and
                public data centers, and independent resource providers.
                <br />- Rapid Infrastructure-deployment-as-a-service (RIDaaS). A
                transformative advancement in Web2 & Web3 infrastructure design
                and deployment.
                <br />- Access 100,000+ Web2 & Web3 Apps
                <br />- XnodeOS: Fast, Lightweight, Runs on Raspberry Pi
                <br />- Multi-purpose Infrastructure as a Service (MPIaaS)
                <br />- World&apos;s First Decentralized Virtual Machine (DVM)
                <br />- Node Operator Economic Viability.
              </td>
            </tr>
            <tr>
              <td>Network architecture </td>
              <td>
                - Decentralized Network Topology: A network where nodes operate
                independently without reliance on a central authority.
                <br />- Immutable Ledger: Data is permanently recorded on the
                blockchain, ensuring it cannot be altered or tampered with.
                <br />- Local Node Interconnectivity: Nodes within the network
                communicate directly, ensuring efficient and distributed data
                exchange.
                <br />- Autonomous Recovery Mechanisms: Systems that can
                automatically detect and resolve failures to maintain stability
                and uptime.
                <br />- Redundant Consensus Protocols: Ensures continuous
                network operation by duplicating key processes to prevent single
                points of failure.
                <br />- Openmesh Proof of Stake (PoS): A consensus mechanism
                where validators are selected based on the amount of stake they
                hold in the network.
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
                A go-to place to learn, meet people, connect, and apply what you
                have learned. Find projects to work on and earn for your
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
          <Title>Go to market milestones</Title>
          <Text>
            <strong>[ Q1/Q2 2024 ]</strong>
            <ListItem>
              Integrate Xnode with Equnix, Hivolcity, Google, Vultr,
              ValidationCloud, Snowflake, Aiven
            </ListItem>
            <ListItem>Xnode Studio V.4.0 Beta</ListItem>
            <ListItem>Decentralized Cloud Initiative 2024</ListItem>
            <ListItem>
              Launched World&apos;s First Decentralized Virtual Machine (DVM)
            </ListItem>
          </Text>
          <Text>
            <strong>[ Q3/Q4 2024 ]</strong>
            <ListItem>
              Openmesh is giving away USD100m worth of cloud credit to Web3
              startups, protocols, and DAOs to jump-start the DePIN movement.
            </ListItem>
            <ListItem>
              Artificial Superintelligence Alliance RFP - Large-scale
              AI-optimized data center in collaboration with Nvidia, The Xnode
              MDC (Modular Data Center).
            </ListItem>
            <ListItem>
              Web3 Node Adoption Initiative with Chainlink, Fantom, Polygon,
              Avalanche, and 6+ more chains.
            </ListItem>
            <ListItem>
              Openmesh Decentralized & Immutable Cloud: Up to 80% cheaper that
              incumbent web2 providers
            </ListItem>
            <ListItem>Xnode integrations with the Solana</ListItem>
            <ListItem>Xnode Studio v6 launch with 10,000+ apps</ListItem>
            <ListItem>
              Partnership with Hackernoon to host a DePIN educational content
              hackathon.
            </ListItem>
            <ListItem>Openmesh Node Sale.</ListItem>
            <ListItem>Validator Nodes Rewards Beta</ListItem>
            <ListItem>
              Openmesh Town Hall Event (Nvidia, Snowflake, Polygon, Databricks,
              MongoDB, Avien, Hivelocity, Google, and more)
            </ListItem>
            <ListItem>
              CCIP {"<>"} Xnode Launch—Connecting On-chain to Web2
              Infrastructure for devs, Web3 startups, protocols & DAOs + $5m
              Openmesh
            </ListItem>
            <ListItem>Cloud Resources announcement.</ListItem>
            <ListItem>Xnode Node Hardware Launch.</ListItem>
            <ListItem>
              OpenD/I 2024 Conference in New York by Openmesh.
            </ListItem>
            <ListItem>
              OpenD/I Developer Conference 2024 in Bangalore by Openmesh.
            </ListItem>
            <ListItem>OpenAPI v6 Launch</ListItem>
          </Text>
          <Title>Token distribution</Title>
          <table className="w-full">
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
              <td>
                <br />
              </td>
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
              <td>
                <br />
              </td>
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
              <td>
                <br />
              </td>
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
          <Image alt="Token distribution chart" src={tokenChart} />
          <Title>Openmesh partners</Title>
          <Image alt="Partners" src={partners} />
          <Title>Primary resource allocation</Title>
          <table className="w-full">
            <tr>
              <td>Pre-Genesis</td>
              <td>
                Dec 2020 - Sept 2024
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
                Dates: Sept 01 - Dec 31, 2024
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
                accelerate the Web3 ecosystem
                <br />
                <br />
                Dates: Jan 1, 2025 - Jan 31, 2025
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
                Dates: End 2024
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
          <Title>Openmesh Expansion Program (OEP) 2024 Participation</Title>
          <table className="w-full">
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
              <td>11:59 PM UTC, Sept 01, 2024 - 11:59 PM UTC, Dec 31, 2024</td>
            </tr>
            <tr>
              <td>Payment and Confirmation Phase</td>
              <td>11:59 PM UTC, Sept 01, 2024 - 11:59 PM UTC, Dec 31, 2024</td>
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
                <Link href="https://oep.openmesh.network">Main website</Link>
                <br />
                <Link href="https://oep.openmesh.network/assetTransfer">
                  Asset transfer
                </Link>
                <br />
                <Link href="https://docs.openmesh.network/openmesh-expansion-program/how-to-whitelist">
                  Whitelist guide
                </Link>
                <br />
                <Link href="https://docs.openmesh.network/openmesh-expansion-program/how-to-perform-asset-transfer">
                  Asset transfer guide
                </Link>
              </td>
            </tr>
            <tr>
              <td>Receiving wallet</td>
              <td className="break-all">
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
            2. Payment and Confirmation Phase (Sept 01st - Dec 31st)
          </Subtitle>
          <Text>Whitelist and payment confirmation.</Text>
          <Subtitle>
            3. Post-Participation and Minting Phase (Dec 31st, 2024 - Dec 31st,
            2025)
          </Subtitle>
          <Text>
            Sponsors will receive Cloud Credits, redeemable as Xnodes, which can
            be utilized to support the Decentralized Cloud Initiative (DCI) and
            other Openmesh services, or converted into sOPEN or OPEN tokens. As
            early backers, sponsors may also receive governance tokens as a
            token of appreciation for their support. These tokens will enable
            sponsors to contribute to the network&apos;s governance,
            particularly in roles such as network operators, Verified
            Contributors, and Openmesh Verified Resource Providers.
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
