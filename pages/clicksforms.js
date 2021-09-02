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
        name="ClicksForms"
        subtext="Custom forms on Discord"
        gradient={["71AFE5", "6576CC"]}
        wave="CF"
        buttons={[
          {color: "6576CC", buttonText: "FFFFFF", link: "#features", text: "Features"},
          {color: "6576CC", buttonText: "FFFFFF", link: "#commands", text: "Commands"},
          {color: "775EBF", buttonText: "FFFFFF", link: "#invite", text: "Invite"}
        ]}
        hideArrow={true}
      />
      <AutoSpacing
        elements={[
          <SectionHeading title="Features" id="features"/>,
          <SectionHeading title="Commands" id="commands"/>,
          <SectionHeading title="Invite" id="invite"/>
      ]}/>
    </>
  )
}
