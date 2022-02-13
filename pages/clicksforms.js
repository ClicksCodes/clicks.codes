import Card from '../Components/Card'
import CardRow from '../Components/CardRow';
import Header from '../Components/Header'
import { AutoLayout, Panel, Title, Subtitle, Text, Divider } from '../Components/Panels';
import { List, ListItem, Code } from '../Components/Texttools';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header
        name="ClicksForms"
        subtext="Custom forms on Discord"
        gradient={["71AFE5", "6576CC"]}
        wave="web/waves/header/clicksforms"
        buttons={[
          // {color: "6576CC", buttonText: "FFFFFF", link: "#features", text: "Features"},
          {color: "6576CC", buttonText: "FFFFFF", link: "#commands", text: "Commands"},
          {color: "6576CC", buttonText: "FFFFFF", link: "#services", text: "Services"},
          {color: "775EBF", buttonText: "FFFFFF", link: "#invite", text: "Invite"}
        ]}
        hideArrow={true}
      />
      <AutoLayout>
        <Panel halfSize={true} id="commands">
          <Title>Commands</Title>
          <Divider />
          <Text>Standard commands to use ClicksForms</Text>
          <List colour="6576CC">
            <ListItem><Code colour="6576CC">/accept</Code> Completes a form you are asked to fill in.</ListItem>
            <ListItem><Code colour="6576CC">/apply</Code> Apply to a form.</ListItem>
            <ListItem><Code colour="6576CC">/create</Code> Creates a new form.</ListItem>
            <ListItem><Code colour="6576CC">/download</Code> Downloads a form from a service e.g. Google Forms.</ListItem>
            <ListItem><Code colour="6576CC">/help</Code> Lists all commands.</ListItem>
            <ListItem><Code colour="6576CC">/responses</Code> Lets you view responses to your servers form.</ListItem>
            <ListItem><Code colour="6576CC">/manage</Code> Lets you manage your servers forms.</ListItem>
          </List>
        </Panel>
        <Panel halfSize={true} id="services">
          <Title>Services</Title>
          <Divider />
          <Text>ClicksForms supports services such as <a href="https://docs.google.com/forms">Google Forms</a> through our Add-on.</Text>
          <Text>Our API is public. You can view it <Link href="/clicksforms/privacy">GitHub</Link>.</Text>
        </Panel>
        <Panel halfSize={true} id="invite">
          <Title>Invite</Title>
          <Divider />
          <CardRow><Card
            wave="clicksforms"
            icon="bots/clicksforms/circle"
            buttonText={"FFFFFF"} gradient={["71AFE5", "6576CC"]}
            title="Invite"
            subtext="Invite ClicksForms to your server"
            buttons={[
              {color: "775EBF", link: "https://discord.com/api/oauth2/authorize?client_id=805392054678192169&permissions=2416307200&scope=bot%20applications.commands", text: "Invite"}
            ]}
          /></CardRow>
        </Panel>
      </AutoLayout>
    </>
  )
}
