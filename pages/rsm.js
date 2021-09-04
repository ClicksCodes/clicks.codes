import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from '../Components/Card'
import TileRow from '../Components/TileRow'
import Header from '../Components/Header'
import AutoSpacing from '../Components/AutoSpacing'
import SectionHeading from '../Components/SectionHeading'

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
      <AutoSpacing>
          <SectionHeading title="Features" id="features"/>
          <TileRow>
            <img alt="Moderate images"      src="/Features/RSM/Images.svg" />
            <img alt="Automate your server" src="/Features/RSM/Automate.svg" />
            <img alt="CAPTCHA verification" src="/Features/RSM/CAPTCHA.svg" />
            <img alt="Actively developed"   src="/Features/RSM/Developed.svg" />
            <img alt="Advanced logging"     src="/Features/RSM/Logging.svg" />
            <img alt="NSFW Moderation"      src="/Features/RSM/NSFW.svg" />
            <img alt="Eaily punish users"   src="/Features/RSM/Punish.svg" />
            <img alt="Stop raids quickly"   src="/Features/RSM/Raids.svg" />
            <img alt="Track statistics"     src="/Features/RSM/Statistics.svg" />
            <img alt="Custom tags"          src="/Features/RSM/Tags.svg" />
          </TileRow>
          <SectionHeading title="Commands" id="commands"/>
          <SectionHeading title="Invite" id="invite"/>
      </AutoSpacing>
    </>
  )
}
