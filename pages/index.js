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
        wave="Main"
        buttons={[]}
      />
      <p id="start" />
      <AutoSpacing>
        <SectionHeading title="Projects" />
        <CardRow>
          <Card
            wave="GS" title="GPS" subtext="Cards Against Humanity on Discord"
            buttons={[
              {color: "6576CC", link: "https://discordapp.com/oauth2/authorize?client_id=679361555732627476&scope=bot&permissions=130048", text: "Invite"},
              {color: "6576CC", link: "/gps", text: "About"}
            ]}
            buttonText={"FFFFFF"} gradient={["78ECF2", "71AFE5"]}
          />
          <Card
            wave="RM" title="RSM" subtext="Moderation Redefined"
            buttons={[
              {color: "424242", link: "https://discord.com/api/oauth2/authorize?client_id=715989276382462053&permissions=121295465718&scope=bot%20applications.commands",text:"Invite"},
              {color: "424242", link: "/rsm", text:"About"}
            ]}
            buttonText={"FFFFFF"} gradient={["F27878", "D96B6B"]}
          />
          <Card
            wave="CF" title="ClicksForms" subtext="Create custom forms for Discord"
            buttons={[
              {color: "775EBF", link: "https://clicksminuteper.github.io/docs/clicksforms", text:"API", newTab: true},
              {color: "775EBF", link: "https://discord.com/api/oauth2/authorize?client_id=805392054678192169&permissions=2416307200&scope=bot%20applications.commands",text:"Invite"},
              {color: "775EBF", link: "/clicksforms", text: "About"}
            ]}
            buttonText={"FFFFFF"} gradient={["71AFE5", "6576CC"]}
          />
          <Card
            wave="CA" title="Castaway" subtext="Stranded on Discord"
            buttons={[
              {color: "F2D478", link: "/", text: "Invite"},
              {color: "F2D478", link: "/castaway", text: "About"}
            ]}
            buttonText={"000000"} gradient={["71AFE5", "78ECF2"]}
          />
          <Card
            wave="HY" title="Hooky" subtext="Webhook protection for Discord"
            buttons={[
              {color: "EDC575", link: "/", text: "Invite"},
              {color: "EDC575", link: "/hooky", text: "About"}
            ]}
            buttonText={"000000"} gradient={["424242", "8D8D8D"]}
          />
          <Card
            wave="CL" title="Clcks" subtext="Clicks Minute Per web apps"
            buttons={[
              {color: "78ECF2", link: "https://clcks.dev", text: "View Apps"
            }]}
            buttonText={"000000"} gradient={["C4C4C4", "8D8D8D"]}
          />
        </CardRow>
        <SectionHeading title="Code Bases" />
        <CardRow>
          <Card
            wave="GH" title="GitHub" subtext="View our open source projects"
            buttons={[
              {color: "424242", link: "https://github.com/clicksminuteper", text: "Visit"}
            ]}
            buttonText={"FFFFFF"} gradient={["FFFFFF", "C4C4C4"]}
          />
          <Card
            wave="PY" title="PyPi" subtext="View our modules for python"
            buttons={[
              {color: "FFC91E", link: "https://pypi.org/user/ClicksMinutePer/", text: "Visit"}
            ]}
            buttonText={"000000"} gradient={["2F6490", "3775A8"]}
          />
        </CardRow>
        <SectionHeading title="Socials" />
        <CardRow>
          <Card
            wave="DS" title="Discord" subtext="Join our Discord server to talk with the community"
            buttons={[
              {color: "424242", link: "https://discord.gg/bPaNnxe", text: "Join"}
            ]}
            buttonText={"FFFFFF"} gradient={["404EED", "404EED"]}
          />
        </CardRow>
      </AutoSpacing>
    </>
  )
}
