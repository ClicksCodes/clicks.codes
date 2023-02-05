import { Card, CardRow } from '../Components/Card';
import Header from '../Components/Header'
import { AutoLayout, Panel, Title, Subtitle, Text, Divider } from '../Components/Panels';

export default function Home(props) {
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
        season={props.season}
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
              title="Hooky"
              subtext="Invite Hooky to your server"
              buttons={[
                {color: "EDC575", link: "https://discord.com/oauth2/authorize?client_id=752188923505279037&scope=bot&permissions=536882176", text: "Invite"}
              ]}
              url="https://discord.com/oauth2/authorize?client_id=752188923505279037&scope=bot&permissions=536882176"
            />
          </CardRow>
        </Panel>
      </AutoLayout>
    </>
  )
}
