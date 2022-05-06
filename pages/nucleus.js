import { Card, CardRow } from '../Components/Card';
import Header from '../Components/Header'
import { AutoLayout, Panel, Title, Subtitle, Text, Divider } from '../Components/Panels';
import { List, ListItem, Code } from '../Components/Texttools';
import { useColorMode } from 'theme-ui';

export default function Home() {
  const [theme, setTheme] = useColorMode()

  return (
    <>
      <Header
        name="Nucleus"
        customImage="https://assets.clicks.codes/web/logos/nucleus.svg"
        embedImage="https://assets.clicks.codes/bots/nucleus/normal.png"
        subtext="The core of your server"
        gradient={["F27878", "D96B6B"]}
        wave="web/waves/header/nucleus"
        buttons={[
          // {color: "424242", buttonText: "FFFFFF", link: "#features", text: "Features"},
          {color: "424242", buttonText: "FFFFFF", link: "#commands", text: "Commands"},
          {color: "424242", buttonText: "FFFFFF", link: "#privacy", text: "Privacy"},
          {color: "F27878", buttonText: "FFFFFF", link: "#invite", text: "Invite"}
        ]}
      />
      <AutoLayout>
        <Panel halfSize={true} id="commands">
          <Title>General Commands</Title>
          <Divider />
          <Text>Standard commands to use Nucleus</Text>
          <List colour="F27878">
            <ListItem><Code colour="F27878">/help</Code> Shows all commands and info.</ListItem>
            <ListItem><Code colour="F27878">/settings</Code> Shows all settings and info.</ListItem>
            <ListItem>Theres a lot more settings commands but they&apos;re subject to change before release.</ListItem>
            <ListItem>Expect this list to be longer</ListItem>
          </List>
        </Panel>
        <Panel halfSize={true}>
          <Title>Moderation Commands</Title>
          <Divider />
          <Text>Commands to manage your users and channels</Text>
          <List colour="F27878">
            <ListItem><Code colour="F27878">/mod warn</Code> Warns a member.</ListItem>
            <ListItem><Code colour="F27878">/mod kick</Code> Kicks a member.</ListItem>
            <ListItem><Code colour="F27878">/mod softban</Code> Soft bans a member.</ListItem>
            <ListItem><Code colour="F27878">/mod ban</Code> Bans a member.</ListItem>
            <ListItem><Code colour="F27878">/mod unban</Code> Unbans a member.</ListItem>
            <ListItem><Code colour="F27878">/mod purge</Code> Deletes messages in the channel.</ListItem>
            <ListItem><Code colour="F27878">/mod mute</Code> Mutes a member.</ListItem>
            <ListItem><Code colour="F27878">/mod unmute</Code> Unmutes a member.</ListItem>
            <ListItem><Code colour="F27878">/mod nick</Code> Changes the nickname of a member.</ListItem>
            <ListItem><Code colour="F27878">/mod lock</Code> Stops people from sending messages in a channel.</ListItem>
            <ListItem><Code colour="F27878">/mod slowmode</Code> Edits the slowmode in a channel.</ListItem>
            <ListItem><Code colour="F27878">/mod viewas</Code> Allows you to view the server as a member or role.</ListItem>
          </List>
        </Panel>
        <Panel halfSize={true}>
          <Title>Internal Commands</Title>
          <Divider />
          <Text>Commands to check the status of and information about Nucleus</Text>
          <List colour="F27878">
            <ListItem><Code colour="F27878">/nucleus guide</Code> Shows the setup guide and tips for setup.</ListItem>
            <ListItem><Code colour="F27878">/nucleus invite</Code> Shows the invite link for Nucleus.</ListItem>
            <ListItem><Code colour="F27878">/nucleus ping</Code> Shows the latency of the bot.</ListItem>
            <ListItem><Code colour="F27878">/nucleus stats</Code> Shows the stats of the bot.</ListItem>
            <ListItem><Code colour="F27878">/nucleus suggest</Code> Sends a feature request to the developers.</ListItem>
          </List>
        </Panel>
        <Panel halfSize={true} id="server">
          <Title>Server Management</Title>
          <Divider />
          <Text>Commands to manage your server and members</Text>
          <List colour="F27878">
            <ListItem><Code colour="F27878">/server about</Code> Shows the server information.</ListItem>
            <ListItem><Code colour="F27878">/server rules</Code> Shows the server rules.</ListItem>
            <ListItem><Code colour="F27878">/ticket create</Code> Creates a ticket.</ListItem>
            <ListItem><Code colour="F27878">/ticket close</Code> Closes a ticket.</ListItem>
            <ListItem><Code colour="F27878">/user about</Code> Shows the user information.</ListItem>
            <ListItem><Code colour="F27878">/user avatar</Code> Shows the user avatar.</ListItem>
            <ListItem><Code colour="F27878">/user track</Code> Allows you to move a user up and down a role track.</ListItem>
            <ListItem><Code colour="F27878">/verify</Code> Verifies a member to give them access to the server.</ListItem>
          </List>
        </Panel>
        <Panel halfSize={false} id="verify">
            <Title>Verification</Title>
            <Divider />
            <Text>Verification ensures all members in your server are human, and prevents automated accounts from joining.</Text>
            <Text>For more information, see the <a href="/nucleus/verify/about">about</a> page.</Text>
        </Panel>
        <Panel halfSize={true} id="privacy">
          <Title>Privacy</Title>
          <Divider />
          <Text>You can run <Code colour="F27878">/privacy</Code> to view and manage all data stored about your server</Text>
          <Text>You should always know what we know and store about you, so <a href="https://clicksminuteper.github.io/policies/nucleus">here</a> is the complete list.</Text>
        </Panel>
        <Panel halfSize={true} id="invite">
          <Title>Invite</Title>
          <Divider />
          <CardRow>
            <Card
              wave="nucleus"
              icon="bots/nucleus/circle"
              buttonText={"FFFFFF"} gradient={["F27878", "D96B6B"]}
              title="Nucleus"
              subtext="Invite Nucleus to your server"
              buttons={[
                  {color: "424242", link: "https://discord.com/api/oauth2/authorize?client_id=715989276382462053&permissions=121295465718&scope=bot%20applications.commands", text: "Invite"}
              ]}
              url="https://discord.com/api/oauth2/authorize?client_id=715989276382462053&permissions=121295465718&scope=bot%20applications.commands"
            />
          </CardRow>
        </Panel>
      </AutoLayout>
    </>
  )
}
