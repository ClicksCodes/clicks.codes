import Card from '../Components/Card'
import Header from '../Components/Header'
import AutoSpacing from '../Components/AutoSpacing'
import SectionHeading from '../Components/SectionHeading'
import Subheading from '../Components/Subheading'
import Paragraph from '../Components/Paragraph'
import CardRow from '../Components/CardRow'

export default function Home() {
  return (
    <>
      <Header
        name="GPS"
        subtext="Cards Against Humanity on Discord"
        gradient={["78ECF2", "71AFE5"]}
        wave="GS"
        buttons={[
          {color: "71AFE5", buttonText: "FFFFFF", link: "#commands", text: "Commands"},
          {color: "6576CC", buttonText: "FFFFFF", link: "#invite", text: "Invite"}
        ]}
        hideArrow={true}
      />
      <AutoSpacing>
        <SectionHeading id="commands">Commands</SectionHeading>
        <Paragraph><code>m!getprefix</code>: Shows the bots prefix in the current guild.</Paragraph>
        <Paragraph><code>m!info</code>: View some information about the bot's owners.</Paragraph>
        <Paragraph><code>m!stats</code>: Shows the bot's current statistics.</Paragraph>
        <Paragraph><code>m!ping</code>: Gets the current response time of the bot.</Paragraph>
        <Paragraph><code>m!terms</code>: List all the terms and conditions for the bot.</Paragraph>
        <Paragraph><code>m!setlanguage</code>: Set what language you want to use for your packs.</Paragraph>
        <Paragraph><code>m!packs</code>: Shows a list of packs available in your language.</Paragraph>
        <Paragraph><code>m!play</code>: Starts the game.</Paragraph>
        <Paragraph><code>m!join</code>: Joins an active game in the channel. This can be during the 1m period when starting a game, or midway through.</Paragraph>
        <Paragraph><code>m!leave</code>: Removes the player who ran it from the current game in that channel.</Paragraph>
        <Paragraph><code>m!shuffle</code>: Reshuffles your cards.</Paragraph>
        <Paragraph><code>m!end</code>: Ends the current game in that channel.</Paragraph>
        <Paragraph><code>m!help</code>: Shows all commands</Paragraph>
        <SectionHeading id="invite">Invite</SectionHeading>
        <CardRow>
          <Card
            wave="GS"
            buttonText={"FFFFFF"} gradient={["78ECF2", "71AFE5"]}
            title="Invite"
            subtext="Invite GPS to your server"
            buttons={[
              {color: "424242", link: "https://discordapp.com/oauth2/authorize?client_id=679361555732627476&scope=bot&permissions=130048", text: "Invite"}
            ]}
          />
        </CardRow>
      </AutoSpacing>
    </>
  )
}
