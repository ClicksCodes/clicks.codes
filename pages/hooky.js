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
        name="Hooky"
        subtext="Webhook protection for Discord"
        gradient={["424242", "8D8D8D"]}
        wave="CA"
        buttons={[
          {color: "EDC575", buttonText: "000000", link: "#invite", text: "Invite"}
        ]}
        hideArrow={true}
      />
      <AutoSpacing>
        <SectionHeading id="invite">Invite</SectionHeading>
        <CardRow>
          <Card
            wave="CF"
            buttonText={"000000"} gradient={["424242", "8D8D8D"]}
            title="Invite"
            subtext="Invite Hooky to your server"
            buttons={[
              {color: "775EBF", link: "https://discord.com/oauth2/authorize?client_id=752188923505279037&scope=bot&permissions=536882176", text: "Invite"}
            ]}
          />
        </CardRow>
      </AutoSpacing>
    </>
  )
}
