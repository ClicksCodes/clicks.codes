import Card from '../Components/Card'
import TileRow from '../Components/TileRow'
import Header from '../Components/Header'
import AutoSpacing from '../Components/AutoSpacing'
import SectionHeading from '../Components/SectionHeading'
import Subheading from '../Components/Subheading'
import Paragraph from '../Components/Paragraph'
import CardRow from '../Components/CardRow'

import FeatureImages from '../public/Features/RSM/Images.svg';
import FeatureAutomate from '../public/Features/RSM/Automate.svg';
import FeatureCAPTCHA from '../public/Features/RSM/CAPTCHA.svg';
import FeatureDeveloped from '../public/Features/RSM/Developed.svg';
import FeatureLogging from '../public/Features/RSM/Logging.svg';
import FeatureNSFW from '../public/Features/RSM/NSFW.svg';
import FeaturePunish from '../public/Features/RSM/Punish.svg';
import FeatureRaids from '../public/Features/RSM/Raids.svg';
import FeatureStatistics from '../public/Features/RSM/Statistics.svg';
import FeatureTags from '../public/Features/RSM/Tags.svg';

export default function Home() {
  return (
    <>
      <Header
        name="RSM"
        subtext="Moderation Redefined"
        gradient={["F27878", "D96B6B"]}
        wave="web/waves/header/rsm"
        buttons={[
          {color: "424242", buttonText: "FFFFFF", link: "#features", text: "Features"},
          {color: "424242", buttonText: "FFFFFF", link: "#commands", text: "Commands"},
          {color: "F27878", buttonText: "FFFFFF", link: "#invite", text: "Invite"}
        ]}
        hideArrow={true}
      />
      <AutoSpacing>
          <SectionHeading id="features">Features</SectionHeading>
          <Paragraph>For a full list of features, check our commands</Paragraph>
          {/* <TileRow divless={false}>
            <FeatureImages />
            <FeatureAutomate />
            <FeatureCAPTCHA />
            <FeatureDeveloped />
            <FeatureLogging />
            <FeatureNSFW />
            <FeaturePunish />
            <FeatureRaids />
            <FeatureStatistics />
            <FeatureTags />
          </TileRow> */}
          <SectionHeading id="commands">Commands</SectionHeading>
          <Paragraph><code>m!info</code>: Shows all commands and info.</Paragraph>
          <Paragraph><code>m!stats</code>: Shows the bot statistics</Paragraph>
          <Paragraph><code>m!settings</code>: Shows your servers log settings.</Paragraph>
          <Paragraph><code>m!user</code>: Shows information about a user.</Paragraph>
          <Paragraph><code>m!avatar</code>: Shows a users avatar.</Paragraph>
          <Paragraph><code>m!roleall</code>: Role all humans or bots in the server.</Paragraph>
          <Paragraph><code>m!suggest</code>: Sends a suggestion to add to the bot for voting.</Paragraph>
          <Paragraph><code>m!ping</code>: Checks the bots ping time.</Paragraph>
          <Paragraph><code>m!server</code>: Shows all information about your server.</Paragraph>
          <Paragraph><code>m!tag</code>: m!tag create/delete title text, or m!tag title</Paragraph>
          <Paragraph><code>m!role</code>: With Role: Shows information about a role.</Paragraph>
          <Paragraph><code>m!role</code>: With Mention: Lets you edit or view a users roles.</Paragraph>
          <Paragraph><code>m!viewas</code>: Shows the channels that a member can see.</Paragraph>
          <Paragraph><code>m!verify</code>: Lets users verify in your server.</Paragraph>
          <Paragraph><code>m!setverify</code>: Sets the role given when you m!verify. Name or ID.</Paragraph>
          <Paragraph><code>m!mail</code>: Creates a modmail ticket if set up.</Paragraph>
          <Paragraph><code>m!prefix</code>: Shows the bots prefix. Use @ if unknown.</Paragraph>
          <Paragraph><code>m!setprefix</code>: Sets the bots prefix. You can always @ the bot.</Paragraph>
          <Subheading>Moderation</Subheading>
          <Paragraph><code>m!warn</code>: Warns a member.</Paragraph>
          <Paragraph><code>m!clear</code>: Clears messages from a channel</Paragraph>
          <Paragraph><code>m!kick</code>: Kicks a member.</Paragraph>
          <Paragraph><code>m!softban</code>: Soft bans a member.</Paragraph>
          <Paragraph><code>m!ban</code>: Bans a member.</Paragraph>
          <Paragraph><code>m!unban</code>: Unbans a member.</Paragraph>
          <Paragraph><code>m!purge</code>: Deletes messages in the channel.</Paragraph>
          <Paragraph><code>m!punish</code>: Punishes a user.</Paragraph>
          <Paragraph><code>m!setlog</code>: Sets the servers log channel.</Paragraph>
          <Paragraph><code>m!ignore</code>: Stops logging users, roles and channels provided.</Paragraph>
        <Paragraph><code>m!ignored</code>: Shows the ignored users, roles and channels.</Paragraph>
        <Paragraph><code>m!stafflog</code>: Sets the staff log channel for reports and messages.</Paragraph>
        <Paragraph><code>m!auto</code>: Lets you edit your server automations.</Paragraph>
        <Paragraph><code>m!modmail</code>: Shows the setup for the mail command.</Paragraph>
        <Subheading>Emergency</Subheading>
        <Paragraph><code>m!slowmode</code>: Sets the channel slowmode.</Paragraph>
        <Paragraph><code>m!lock</code>: Locks the channel. Applies slowmode and stops messages being sent.</Paragraph>
        <Paragraph><code>m!unlock</code>: Unlocks the channel. Slowmode is removed and messages can be sent.</Paragraph>
        <SectionHeading id="invite">Invite</SectionHeading>
        <CardRow>
          <Card
            wave="rsm"
            icon="bots/rsm/normal"
            buttonText={"FFFFFF"} gradient={["F27878", "D96B6B"]}
            title="Invite"
            subtext="Invite RSM to your server"
            buttons={[
                {color: "F27878", link: "https://discord.com/api/oauth2/authorize?client_id=715989276382462053&permissions=121295465718&scope=bot%20applications.commands", text: "Invite"}
            ]}
          />
        </CardRow>
      </AutoSpacing>
    </>
  )
}
