import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from '../Components/Card'

export default function Home() {
  return (
    <Card wave="GS" title="GPS" subtext="Cards Against Humanity on Discord" buttons={[{color:"#6576CC",link:"/GPS",text:"About"},{color:"#6576CC",link:"/GPS",text:"Invite"}]}/>
  )
}
