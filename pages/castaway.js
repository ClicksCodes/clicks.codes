import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from '../Components/Card'
import CardRow from '../Components/CardRow'
import Header from '../Components/Header'
import AutoSpacing from '../Components/AutoSpacing'
import SectionHeading from '../Components/SectionHeading'
import Paragraph from '../Components/Paragraph'

export default function Home() {
  return (
    <>
      <Header
        name="Castaway"
        subtext="Stranded on Discord"
        gradient={["71AFE5", "78ECF2"]}
        wave="CA"
        buttons={[
          {color: "78ECF2", buttonText: "000000", link: "#timeline", text: "Timeline"}
        ]}
        hideArrow={true}
      />
      <AutoSpacing>
        <SectionHeading id="timeline">Development Timeline</SectionHeading>
        <Paragraph>Under construction</Paragraph>
      </AutoSpacing>
    </>
  )
}
