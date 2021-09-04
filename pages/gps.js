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
        name="GPS"
        subtext="Cards Against Humanity on Discord"
        gradient={["78ECF2", "71AFE5"]}
        wave="GS"
        buttons={[
          {color: "71AFE5", buttonText: "FFFFFF", link: "#features", text: "Features"},
          {color: "71AFE5", buttonText: "FFFFFF", link: "#commands", text: "Commands"},
          {color: "6576CC", buttonText: "FFFFFF", link: "#invite", text: "Invite"}
        ]}
        hideArrow={true}
      />
      <AutoSpacing>
          <SectionHeading title="Features" id="features"/>,
          <SectionHeading title="Commands" id="commands"/>,
          <SectionHeading title="Invite" id="invite"/>
        </AutoSpacing>s
    </>
  )
}
