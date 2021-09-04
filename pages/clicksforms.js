import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from '../Components/Card'
import CardRow from '../Components/CardRow'
import Header from '../Components/Header'
import AutoSpacing from '../Components/AutoSpacing'
import TileRow from '../Components/TileRow'
import SectionHeading from '../Components/SectionHeading'
import Paragraph from '../Components/Paragraph'

export default function Home() {
  return (
    <>
      <Header
        name="ClicksForms"
        subtext="Custom forms on Discord"
        gradient={["71AFE5", "6576CC"]}
        wave="CF"
        buttons={[
          {color: "6576CC", buttonText: "FFFFFF", link: "#features", text: "Features"},
          {color: "6576CC", buttonText: "FFFFFF", link: "#commands", text: "Commands"},
          {color: "6576CC", buttonText: "FFFFFF", link: "#services", text: "Services"},
          {color: "775EBF", buttonText: "FFFFFF", link: "#invite", text: "Invite"}
        ]}
        hideArrow={true}
      />
      <AutoSpacing>
        <SectionHeading title="Features" id="features"/>
        <TileRow>
          <img alt="Anonymous forms"       src="/Features/ClicksForms/Anonymous.svg" />
          <img alt="Discord buttons"       src="/Features/ClicksForms/Buttons.svg" />
          <img alt="Export formats"        src="/Features/ClicksForms/Export.svg" />
          <img alt="Up to 25 Forms"        src="/Features/ClicksForms/Forms.svg" />
          <img alt="Multiple Choice"       src="/Features/ClicksForms/Multichoice.svg" />
          <img alt="Up to 25 questions"    src="/Features/ClicksForms/Questions.svg" />
          <img alt="Many question types"   src="/Features/ClicksForms/Types.svg" />
          <img alt="Easily view responses" src="/Features/ClicksForms/Responses.svg" />
        </TileRow>
        <SectionHeading title="Commands" id="commands"/>
        <Paragraph><code>/accept</code>: Completes a form you are asked to fill in</Paragraph>
        <Paragraph><code>/apply</code>: Apply to a form</Paragraph>
        <Paragraph><code>/create</code>: Creates a new form</Paragraph>
        <Paragraph><code>/download</code>: Downloads a form from a service e.g. Google Forms</Paragraph>
        <Paragraph><code>/help</code>: Lists all commands</Paragraph>
        <Paragraph><code>/responses</code>: Lets you view responses to your servers form</Paragraph>
        <Paragraph><code>/manage</code>: Lets you manage your servers forms</Paragraph>
        <SectionHeading title="Services" id="services"/>
        <Paragraph>ClicksForms support services like <a href="https://forms.google.com">Google Forms</a> through our Add-on (Awaiting approval)</Paragraph>
        <Paragraph>Our API is public. You can view it on <a href="https://clicksminuteper.giuthub.io/docs/clicksforms">GitHub</a></Paragraph>
        <SectionHeading title="Invite" id="invite"/>
        <Paragraph>
          ClicksForms is available for free on&nbsp;
          <a href="https://discord.com/api/oauth2/authorize?client_id=805392054678192169&permissions=2416307200&scope=bot%20applications.commands" text="Discord">Discord</a>
        </Paragraph>
      </AutoSpacing>
    </>
  )
}
