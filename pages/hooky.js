import Card from '../Components/Card'
import CardRow from '../Components/CardRow';
import Header from '../Components/Header'
import { AutoLayout, Panel, Title, Subtitle, Text, Divider } from '../Components/Panels';

export default function Home() {
  return (
    <>
      <Header
        name="Hooky"
        subtext="Webhook protection for Discord"
        gradient={["424242", "8D8D8D"]}
        wave="web/waves/header/hooky"
        buttons={[
          {color: "EDC575", buttonText: "000000", link: "#invite", text: "Invite"}
        ]}
        hideArrow={true}
      />
      <AutoLayout>
        <Panel halfSize={false} id="invite">
          <Title>Invite</Title>
          <Divider />
          <CardRow>
            <Card
              wave="hooky"
              icon="bots/hooky/circle"
              buttonText={"000000"} gradient={["424242", "8D8D8D"]}
              title="Invite"
              subtext="Invite Hooky to your server"
              buttons={[
                {color: "EDC575", link: "https://discord.com/oauth2/authorize?client_id=752188923505279037&scope=bot&permissions=536882176", text: "Invite"}
              ]}
            />
          </CardRow>
        </Panel>
      </AutoLayout>
    </>
  )
}
