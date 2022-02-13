import Card from '../Components/Card'
import Header from '../Components/Header'
import { AutoLayout, Panel, Title, Subtitle, Text, Divider } from '../Components/Panels';
import { List, ListItem, Code } from '../Components/Texttools';
import CardRow from '../Components/CardRow'

// import FeatureImages from '../public/Features/RSM/Images.svg';
// import FeatureAutomate from '../public/Features/RSM/Automate.svg';
// import FeatureCAPTCHA from '../public/Features/RSM/CAPTCHA.svg';
// import FeatureDeveloped from '../public/Features/RSM/Developed.svg';
// import FeatureLogging from '../public/Features/RSM/Logging.svg';
// import FeatureNSFW from '../public/Features/RSM/NSFW.svg';
// import FeaturePunish from '../public/Features/RSM/Punish.svg';
// import FeatureRaids from '../public/Features/RSM/Raids.svg';
// import FeatureStatistics from '../public/Features/RSM/Statistics.svg';
// import FeatureTags from '../public/Features/RSM/Tags.svg';

export default function Home() {
  return (
    <>
      <Header
        name="RSM"
        subtext="Moderation Redefined"
        gradient={["F27878", "D96B6B"]}
        wave="web/waves/header/rsm"
        buttons={[
          // {color: "424242", buttonText: "FFFFFF", link: "#features", text: "Features"},
          {color: "424242", buttonText: "FFFFFF", link: "#commands", text: "Commands"},
          {color: "F27878", buttonText: "FFFFFF", link: "#invite", text: "Invite"}
        ]}
        hideArrow={true}
      />
      <AutoLayout>
        <Panel halfSize={true} id="commands">
          <Title>Commands</Title>
          <Divider />
          <Text>Standard commands to use RSM</Text>
          <List colour="F27878">
            <ListItem><Code colour="F27878">m!info</Code> Shows all commands and info.</ListItem>
            <ListItem><Code colour="F27878">m!stats</Code> Shows the bot statistics</ListItem>
            <ListItem><Code colour="F27878">m!settings</Code> Shows your servers log settings.</ListItem>
            <ListItem><Code colour="F27878">m!user</Code> Shows information about a user.</ListItem>
            <ListItem><Code colour="F27878">m!avatar</Code> Shows a users avatar.</ListItem>
            <ListItem><Code colour="F27878">m!roleall</Code> Role all humans or bots in the server.</ListItem>
            <ListItem><Code colour="F27878">m!suggest</Code> Sends a suggestion to add to the bot for voting.</ListItem>
            <ListItem><Code colour="F27878">m!ping</Code> Checks the bots ping time.</ListItem>
            <ListItem><Code colour="F27878">m!server</Code> Shows all information about your server.</ListItem>
            <ListItem><Code colour="F27878">m!tag</Code> m!tag create/delete title text, or m!tag title</ListItem>
            <ListItem><Code colour="F27878">m!role</Code> With Role: Shows information about a role.</ListItem>
            <ListItem><Code colour="F27878">m!role</Code> With Mention: Lets you edit or view a users roles.</ListItem>
            <ListItem><Code colour="F27878">m!viewas</Code> Shows the channels that a member can see.</ListItem>
            <ListItem><Code colour="F27878">m!verify</Code> Lets users verify in your server.</ListItem>
            <ListItem><Code colour="F27878">m!setverify</Code> Sets the role given when you m!verify. Name or ID.</ListItem>
            <ListItem><Code colour="F27878">m!mail</Code> Creates a modmail ticket if set up.</ListItem>
            <ListItem><Code colour="F27878">m!prefix</Code> Shows the bots prefix. Use @ if unknown.</ListItem>
            <ListItem><Code colour="F27878">m!setprefix</Code> Sets the bots prefix. You can always @ the bot.</ListItem>
          </List>
        </Panel>
        <Panel halfSize={true}>
          <Title>Moderation Commands</Title>
          <Divider />
          <Text>Moderation commands to set up systems and moderate users</Text>
          <List colour="F27878">
            <ListItem><Code colour="F27878">m!warn</Code> Warns a member.</ListItem>
            <ListItem><Code colour="F27878">m!clear</Code> Clears messages from a channel</ListItem>
            <ListItem><Code colour="F27878">m!kick</Code> Kicks a member.</ListItem>
            <ListItem><Code colour="F27878">m!softban</Code> Soft bans a member.</ListItem>
            <ListItem><Code colour="F27878">m!ban</Code> Bans a member.</ListItem>
            <ListItem><Code colour="F27878">m!unban</Code> Unbans a member.</ListItem>
            <ListItem><Code colour="F27878">m!purge</Code> Deletes messages in the channel.</ListItem>
            <ListItem><Code colour="F27878">m!punish</Code> Punishes a user.</ListItem>
            <ListItem><Code colour="F27878">m!setlog</Code> Sets the servers log channel.</ListItem>
            <ListItem><Code colour="F27878">m!ignore</Code> Stops logging users, roles and channels provided.</ListItem>
            <ListItem><Code colour="F27878">m!ignored</Code> Shows the ignored users, roles and channels.</ListItem>
            <ListItem><Code colour="F27878">m!stafflog</Code> Sets the staff log channel for reports and messages.</ListItem>
            <ListItem><Code colour="F27878">m!auto</Code> Lets you edit your server automations.</ListItem>
            <ListItem><Code colour="F27878">m!modmail</Code> Shows the setup for the mail command.</ListItem>
          </List>
        </Panel>
        <Panel halfSize={true}>
          <Title>Emergency Commands</Title>
          <Divider />
          <Text>Moderation commands to set up systems and moderate users</Text>
          <List colour="F27878">
            <ListItem><Code colour="F27878">m!slowmode</Code> Sets the channel slowmode.</ListItem>
            <ListItem><Code colour="F27878">m!lock</Code> Locks the channel. Applies slowmode and stops messages being sent.</ListItem>
            <ListItem><Code colour="F27878">m!unlock</Code> Unlocks the channel. Slowmode is removed and messages can be sent.</ListItem>
          </List>
        </Panel>
        <Panel halfSize={true} id="invite">
          <Title>Invite</Title>
          <Divider />
          <CardRow>
            <Card
              wave="rsm"
              icon="bots/rsm/circle"
              buttonText={"FFFFFF"} gradient={["F27878", "D96B6B"]}
              title="Invite"
              subtext="Invite RSM to your server"
              buttons={[
                  {color: "424242", link: "https://discord.com/api/oauth2/authorize?client_id=715989276382462053&permissions=121295465718&scope=bot%20applications.commands", text: "Invite"}
              ]}
            />
          </CardRow>
        </Panel>
      </AutoLayout>
    </>
  )
}
