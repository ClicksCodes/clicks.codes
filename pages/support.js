import Header from '../Components/Header'
import { AutoLayout, Panel, Title, Subtitle, Text, Divider } from '../Components/Panels';
import { List, ListItem, Code } from '../Components/Texttools';

export default function Home(props) {
  return (
    <>
      <Header
        name="Support"
        subtext="Get support for Clicks products"
        gradient={["71AFE5", "6576CC"]}
        wave="web/waves/header/clicksforms"
        buttons={[]}
        season={props.season}
      />
      <AutoLayout>
        <Panel halfSize={true}>
          <Title>Email</Title>
          <Divider />
          <Text>Send us an email at <a href="mailto:support@clicks.codes">support@clicks.codes</a> and we will get back to you as quick as possible.</Text>
        </Panel>
        <Panel halfSize={true}>
          <Title>Discord</Title>
          <Divider />
          <Text>For a faster response, you can join our <a href="https://discord.gg/bPaNnxe">Discord server</a> where our staff members can help you with any questions.</Text>
          <Text>Type <Code colour="71AFE5">m!mail</Code> in <Code colour="71AFE5">#ticketmaster</Code> to create a support ticket.</Text>
        </Panel>
      </AutoLayout>
    </>
  )
}
