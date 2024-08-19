"use client"

import { ListItem, Text } from "@/components/base"

export default function Disclaimer() {
  return (
    <>
      <Text>
        This proposal is provided for informational purposes only and does not
        constitute an offer or solicitation for investment or financial advice.
        Participation in the Decentralized Cloud Initiative (DCI) 2024 as a
        sponsor involves significant risks. Sponsors should perform their own
        due diligence and fully understand the associated risks before
        committing any resources. This initiative is strictly a sponsorship and
        not an investment.
      </Text>
      <Text>
        <strong>Key Risks:</strong>
        <br />
        <ListItem>
          <strong>Financial Risk:</strong> There is no guarantee of returns, and
          sponsors may experience a total loss of their contribution.
        </ListItem>
        <ListItem>
          <strong>Regulatory Risk:</strong> The legal status of decentralized
          projects is uncertain and may vary by jurisdiction. Sponsors are
          responsible for ensuring compliance with all applicable laws and
          regulations.
        </ListItem>
        <ListItem>
          <strong>Technical Risk:</strong> The initiative involves complex
          technologies that may encounter unforeseen issues, leading to
          potential operational failures.
        </ListItem>
      </Text>
      <Text>
        <strong>Nature of Participation:</strong> This initiative is a
        sponsorship to support the development of decentralized cloud
        infrastructure and the Web3 ecosystem. It is not an investment. By
        sponsoring the DCI 2024, you are contributing to a community-driven
        effort to democratize access to decentralized cloud resources and
        support innovation in the Web3 space.
      </Text>
      <Text>
        <strong>Sponsorship Details:</strong>
        <br />
        <ListItem>
          <strong>Personal Capacity:</strong> You are acting in a personal
          capacity and not as part of a registered entity. The DAO and its
          members, including Openmesh, are not registered entities and operate
          without formal legal recognition.
        </ListItem>
        <ListItem>
          <strong>No Guarantees:</strong> Openmesh and the DAO make no
          representations, warranties, or guarantees regarding the performance
          or future value of the sOPEN tokens or any related assets.
        </ListItem>
        <ListItem>
          <strong>Own Due Diligence:</strong> It is your responsibility to
          conduct thorough due diligence and seek independent advice if
          necessary. You should fully understand the risks involved before
          participating.
        </ListItem>
        <ListItem>
          <strong>Liability:</strong> Openmesh and the DAO are not responsible
          for any financial loss, adverse outcomes, or legal implications
          arising from your participation. All sponsorship activities are
          undertaken at your own risk.
        </ListItem>
      </Text>
      <Text>
        <strong>Indemnification:</strong> By participating in this initiative,
        you agree to indemnify, defend, and hold harmless the DAO, its members,
        and Openmesh from any claims, losses, damages, liabilities, penalties,
        actions, proceedings, judgments, or any other costs arising out of or
        related to your participation in the initiative. This includes, but is
        not limited to, any actions taken by end users of the virtual machines.
      </Text>
    </>
  )
}
