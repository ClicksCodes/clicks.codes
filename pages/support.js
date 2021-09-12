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
        <SectionHeading id="start">Discord</SectionHeading>
        <Paragraph>Support can be found by joining our <a href="https://discord.gg/bPaNnxe">Discord server</a>.</Paragraph>
      </AutoSpacing>
    </>
  )
}
