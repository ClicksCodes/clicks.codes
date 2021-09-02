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
        name="Castaway"
        subtext="Stranded on Discord"
        gradient={["71AFE5", "78ECF2"]}
        wave="CA"
        buttons={[
          {color: "EDC575", buttonText: "000000", link: "#features", text: "Features"},
          {color: "EDC575", buttonText: "000000", link: "#commands", text: "Commands"},
          {color: "78ECF2", buttonText: "000000", link: "#invite", text: "Invite"}
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
