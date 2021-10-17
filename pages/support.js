import Card from '../Components/Card'
import TileRow from '../Components/TileRow'
import Header from '../Components/Header'
import AutoSpacing from '../Components/AutoSpacing'
import Paragraph from '../Components/Paragraph'
import SectionHeading from '../Components/SectionHeading'

export default function Home() {
  return (
    <>
      <Header
        name="Support"
        subtext="Get support for ClicksMinutePer products"
        gradient={["71AFE5", "6576CC"]}
        wave="CF"
        buttons={[]}
      />
      <AutoSpacing>
        <SectionHeading id="start">Email</SectionHeading>
        <Paragraph>Send us an email at <a href="mailto:support@clicksminuteper.net">support@clicksminuteper.net</a> and we will get back to you as quick as possible.</Paragraph>
        <SectionHeading id="start">Discord</SectionHeading>
        <Paragraph>For a faster response, you can join our <a href="https://discord.gg/bPaNnxe">Discord server</a> where our staff members can help you with any questions.</Paragraph>
        <Paragraph>Type <code>m!mail</code> in <code>#ticketmaster</code> to create a support ticket.</Paragraph>
      </AutoSpacing>
    </>
  )
}
