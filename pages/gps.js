import Card from '../Components/Card'
import Header from '../Components/Header'
import AutoSpacing from '../Components/AutoSpacing'
import SectionHeading from '../Components/SectionHeading'
import Paragraph from '../Components/Paragraph'
import CardRow from '../Components/CardRow'

export default function Home() {
  return (
    <>
      <Header
        name="GPS"
        subtext="Cards Against Humanity on Discord"
        gradient={["78ECF2", "71AFE5"]}
        wave="web/waves/header/gps"
        buttons={[
          {color: "71AFE5", buttonText: "FFFFFF", link: "#features", text: "Features"},
          {color: "71AFE5", buttonText: "FFFFFF", link: "#commands", text: "Commands"},
          {color: "6576CC", buttonText: "FFFFFF", link: "#invite", text: "Invite"}
        ]}
        hideArrow={true}
      />
      <AutoSpacing>
        <SectionHeading id="features">Features</SectionHeading>
        <CardRow>
          <Card
            icon="web/icons/gps/players"
            title="Lots of friends?"
            subtext="You probably don't have 50 friends - But if you did, you can play with every one of them at the same time"
            wave="gps"
            gradient={["78ECF2", "71AFE5"]}
          />
          <Card
            icon="web/icons/gps/cards"
            title="2000+ cards"
            subtext="Enjoy games with over 2000 cards, written for you to insult others"
            wave="clicksforms"
            gradient={["71AFE5", "6576CC"]}
          />
          <Card
            icon="web/icons/gps/customisation"
            title="Customisation."
            subtext="Customise every setting of your game and be as pedantic as you wish"
            wave="hooky"
            gradient={["424242", "8D8D8D"]}
          />
          <Card
            icon="web/icons/gps/time"
            title="Patience is a virtue"
            subtext="But you don't have a lot of it - Your friends may be slow at picking cards, but you don't have to live with it"
            wave="rsm"
            gradient={["F27878", "D96B6B"]}
          />
          <Card
            icon="web/icons/gps/shuffles"
            title="Shuffles"
            subtext={`Replace your worst cards with new ones because \"The bot is unfair
            and always gives me the worst cards and everyone else is better at the game than me\"`}
            wave="clcks"
            gradient={["C4C4C4", "8D8D8D"]}
          />
        </CardRow>
        <SectionHeading id="commands">Commands</SectionHeading>
        <Paragraph><code>$getprefix</code>: Shows the bots prefix in the current guild.</Paragraph>
        <Paragraph><code>$info</code>: View some information about the bot&apos;s owners.</Paragraph>
        <Paragraph><code>$stats</code>: Shows the bot&apos;s current statistics.</Paragraph>
        <Paragraph><code>$ping</code>: Gets the current response time of the bot.</Paragraph>
        <Paragraph><code>$terms</code>: List all the terms and conditions for the bot.</Paragraph>
        <Paragraph><code>$setlanguage</code>: Set what language you want to use for your packs.</Paragraph>
        <Paragraph><code>$packs</code>: Shows a list of packs available in your language.</Paragraph>
        <Paragraph><code>$play</code>: Starts the game.</Paragraph>
        <Paragraph><code>$join</code>: Joins an active game in the channel. This can be during the 1m period when starting a game, or midway through.</Paragraph>
        <Paragraph><code>$leave</code>: Removes the player who ran it from the current game in that channel.</Paragraph>
        <Paragraph><code>$shuffle</code>: Reshuffles your cards.</Paragraph>
        <Paragraph><code>$end</code>: Ends the current game in that channel.</Paragraph>
        <Paragraph><code>$help</code>: Shows all commands</Paragraph>
        <SectionHeading id="invite">Invite</SectionHeading>
        <CardRow>
          <Card
            wave="gps"
            icon="bots/gps/circle"
            buttonText={"FFFFFF"} gradient={["78ECF2", "71AFE5"]}
            title="Invite"
            subtext="Invite GPS to your server"
            buttons={[
              {color: "6576CC", link: "https://discordapp.com/oauth2/authorize?client_id=679361555732627476&scope=bot&permissions=130048", text: "Invite"}
            ]}
          />
        </CardRow>
      </AutoSpacing>
    </>
  )
}
