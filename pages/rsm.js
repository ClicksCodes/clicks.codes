import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from '../Components/Card'
import CardRow from '../Components/CardRow'
import Header from '../Components/Header'
import AutoSpacing from '../Components/AutoSpacing'
import SectionHeading from '../Components/SectionHeading'
import AutoGrid from '../Components/AutoGrid'

export default function Home() {
  return (
    <>
      <Header
        name="RSM"
        subtext="Moderation Redefined"
        gradient={["F27878", "D96B6B"]}
        wave="RM"
        buttons={[
          {color: "424242", buttonText: "FFFFFF", link: "#features", text: "Features"},
          {color: "424242", buttonText: "FFFFFF", link: "#commands", text: "Commands"},
          {color: "F27878", buttonText: "FFFFFF", link: "#invite", text: "Invite"}
        ]}
        hideArrow={true}
      />
      <AutoSpacing
        elements={[
          <SectionHeading title="Features" id="features"/>,
          <CardRow tiles={[
            <img src="/Features/RSM/Advertisements.svg" />,
            <img src="/Features/RSM/Automate.svg" />,
            <img src="/Features/RSM/CAPTCHA.svg" />,
            <img src="/Features/RSM/Developed.svg" />,
            <img src="/Features/RSM/NSFW.svg" />,
            <img src="/Features/RSM/Punish.svg" />,
            <img src="/Features/RSM/Raids.svg" />,
            <img src="/Features/RSM/Statistics.svg" />,
            <img src="/Features/RSM/Tags.svg" />
          ]} />,
          <SectionHeading title="Commands" id="commands"/>,
          <SectionHeading title="Invite" id="invite"/>
      ]}/>
    </>
  )
}
