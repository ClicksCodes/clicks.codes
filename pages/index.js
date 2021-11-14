import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from '../Components/Card'
import CardRow from '../Components/CardRow'
import Header from '../Components/Header'
import AutoSpacing from '../Components/AutoSpacing'
import SectionHeading from '../Components/SectionHeading'

export default function Home() {
  return (
    <>
      <Header
        name="Clicks Minute Per"
        subtext="Custom Made Programs"
        gradient={["6576CC", "4B5899"]}
        wave="web/waves/header/cmp"
        buttons={[]}
      />
      <p id="start" />
      <AutoSpacing>
        <SectionHeading>Projects</SectionHeading>
        <CardRow>
          <Card
            wave="gps" title="GPS" subtext="Cards Against Humanity on Discord"
            icon="bots/gps/normal"
            buttons={[
              {color: "6576CC", link: "https://discordapp.com/oauth2/authorize?client_id=679361555732627476&scope=bot&permissions=130048", text: "Invite"},
              {color: "6576CC", link: "/gps", text: "About"}
            ]}
            buttonText={"FFFFFF"} gradient={["78ECF2", "71AFE5"]}
          />
          <Card
            wave="rsm" title="RSM" subtext="Moderation Redefined"
            icon="bots/rsm/normal"
            buttons={[
              {color: "424242", link: "https://discord.com/api/oauth2/authorize?client_id=715989276382462053&permissions=121295465718&scope=bot%20applications.commands",text:"Invite"},
              {color: "424242", link: "/rsm", text:"About"}
            ]}
            buttonText={"FFFFFF"} gradient={["F27878", "D96B6B"]}
          />
          <Card
            wave="clicksforms" title="ClicksForms" subtext="Create custom forms for Discord"
            icon="bots/clicksforms/normal"
            buttons={[
              {color: "775EBF", link: "https://clicksminuteper.github.io/docs/clicksforms", text:"API", newTab: true},
              {color: "775EBF", link: "https://discord.com/api/oauth2/authorize?client_id=805392054678192169&permissions=2416307200&scope=bot%20applications.commands",text:"Invite"},
              {color: "775EBF", link: "/clicksforms", text: "About"}
            ]}
            buttonText={"FFFFFF"} gradient={["71AFE5", "6576CC"]}
          />
          <Card
            wave="castaway" title="Castaway" subtext="Stranded on Discord"
            icon="bots/castaway/normal"
            buttons={[
              {color: "F2D478", link: "/castaway", text: "About"}
            ]}
            buttonText={"000000"} gradient={["71AFE5", "78ECF2"]}
          />
          <Card
            wave="hooky" title="Hooky" subtext="Webhook protection for Discord"
            icon="bots/hooky/normal"
            buttons={[
              {color: "EDC575", link: "https://discord.com/oauth2/authorize?client_id=752188923505279037&scope=bot&permissions=536882176", text: "Invite"},
              {color: "EDC575", link: "/hooky", text: "About"}
            ]}
            buttonText={"000000"} gradient={["424242", "8D8D8D"]}
          />
          <Card
            wave="clcks" title="Clcks" subtext="Clicks Minute Per web apps"
            icon="web/icons/clcks"
            buttons={[
              {color: "78ECF2", link: "https://clcks.dev", text: "View Apps"
            }]}
            buttonText={"000000"} gradient={["C4C4C4", "8D8D8D"]}
          />
        </CardRow>
        <SectionHeading>Code Bases</SectionHeading>
        <CardRow>
          <Card
            wave="github" title="GitHub" subtext="View our open source projects"
            icon="web/icons/github"
            buttons={[
              {color: "424242", link: "https://github.com/clicksminuteper", text: "Visit"}
            ]}
            buttonText={"FFFFFF"} gradient={["FFFFFF", "C4C4C4"]}
          />
          <Card
            wave="pypi" title="PyPi" subtext="View our modules for python"
            icon="web/icons/pypi"
            buttons={[
              {color: "FFC91E", link: "https://pypi.org/user/ClicksMinutePer/", text: "Visit"}
            ]}
            buttonText={"000000"} gradient={["2F6490", "3775A8"]}
          />
        </CardRow>
        <SectionHeading>Socials</SectionHeading>
        <CardRow>
          <Card
            wave="discord" title="Discord" subtext="Join our Discord server to talk with the community"
            icon="web/icons/discord"
            buttons={[
              {color: "404EED", link: "https://discord.gg/bPaNnxe", text: "Join"}
            ]}
            buttonText={"FFFFFF"} gradient={["404EED", "404EED"]}
          />
        </CardRow>
      </AutoSpacing>
    </>
  )
}
