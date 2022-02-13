import Header from '../Components/Header'
import { AutoLayout, Panel, Title, Subtitle, Text, Divider } from '../Components/Panels';

export default function Home() {
  return (
    <>
      <Header
        name="Castaway"
        subtext="Stranded on Discord"
        gradient={["71AFE5", "78ECF2"]}
        wave="web/waves/header/castaway"
        buttons={[
          {color: "78ECF2", buttonText: "000000", link: "#timeline", text: "Timeline"}
        ]}
        hideArrow={true}
      />
      <AutoLayout>
        <Panel halfSize={false} id="timeline">
          <Divider />
          <Title>Under Development</Title>
          <Text>This bot is still in development, please check back later</Text>
        </Panel>
      </AutoLayout>
    </>
  )
}
