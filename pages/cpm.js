/* This file has been kept as part of the easter egg. No domain will redirect to it. The page will not be updated in the future. */

import { Card, CardRow } from '../Components/Card';
import Header from '../Components/Header';
import { AutoLayout, Panel, Title, Subtitle, Text, Divider } from '../Components/Panels';

export default function Home() {
  return (
    <>
      <Header
        name="Clicks Per Minute"
        subtext="Crappy Projects Mate"
        gradient={["6576CC", "4B5899"]}
        wave="web/waves/header/cmp"
        buttons={[]}
      />
      <AutoLayout>
        <Panel halfSize={false}>
          <Title>Projects</Title>
          <Divider />
          <CardRow>
            <Card
              wave="gps" title="GPS" subtext="Satelite navigation on Discord - Get tracked easily"
              icon="bots/gps/circle"
              buttons={[
                {color: "6576CC", link: "https://discordapp.com/oauth2/authorize?client_id=679361555732627476&scope=bot&permissions=130048", text: "Invite"},
                {color: "6576CC", link: "/gps", text: "Abot"}
              ]}
              buttonText={"FFFFFF"} gradient={["78ECF2", "71AFE5"]}
            />
            <Card
              wave="rsm" title="RSM" subtext="Moderation, it's about average"
              icon="bots/rsm/circle"
              buttons={[
                {color: "424242", link: "https://discord.com/api/oauth2/authorize?client_id=715989276382462053&permissions=121295465718&scope=bot%20applications.commands",text:"Invite"},
                {color: "424242", link: "/rsm", text:"About"}
              ]}
              buttonText={"FFFFFF"} gradient={["F27878", "D96B6B"]}
            />
            <Card
              wave="clicksforms" title="ClocksForms" subtext="Submit your data directly to us!"
              icon="bots/clicksforms/circle"
              buttons={[
                {color: "775EBF", link: "https://clicksminuteper.github.io/docs/clicksforms", text:"APi", newTab: true},
                {color: "775EBF", link: "https://discord.com/api/oauth2/authorize?client_id=805392054678192169&permissions=2416307200&scope=bot%20applications.commands",text:"Invite"},
                {color: "775EBF", link: "/clicksforms", text: "About"}
              ]}
              buttonText={"FFFFFF"} gradient={["71AFE5", "6576CC"]}
            />
            <Card
              wave="castaway" title="Castway" subtext="Idk its not made yet, im just the web developer"
              icon="bots/castaway/circle"
              buttons={[
                {color: "F2D478", link: "/castaway", text: "About"}
              ]}
              buttonText={"000000"} gradient={["71AFE5", "78ECF2"]}
            />
            <Card
              wave="hooky" title="Hooky" subtext="No, its not what you think from that name"
              icon="bots/hooky/circle"
              buttons={[
                {color: "EDC575", link: "https://discord.com/oauth2/authorize?client_id=752188923505279037&scope=bot&permissions=536882176", text: "Invit"},
                {color: "EDC575", link: "/hooky", text: "e About"}
              ]}
              buttonText={"000000"} gradient={["424242", "8D8D8D"]}
            />
            <Card
              wave="clcks" title="Clcks" subtext="(This one genuinely isn't a typo)"
              icon="web/icons/clcks"
              buttons={[
                {color: "78ECF2", link: "https://clcks.dev", text: "View Apps"
              }]}
              buttonText={"000000"} gradient={["C4C4C4", "8D8D8D"]}
            />
          </CardRow>
        </Panel>
        <Panel halfSize={true}>
          <Title>Steal our code</Title>
          <Divider />
          <Text>I dare you.</Text>
          <CardRow>
            <Card
              wave="github" title="GitHub" subtext="Git clone someone's repo, and push to your own"
              icon="web/icons/github"
              buttons={[
                {color: "424242", link: "https://github.com/clicksminuteper", text: "Sacrifice your soul"}
              ]}
              buttonText={"FFFFFF"} gradient={["FFFFFF", "C4C4C4"]}
            />
            <Card
              wave="pypi" title="PyPi" subtext="pypipypipypipypipypipi"
              icon="web/icons/pypi"
              buttons={[
                {color: "FFC91E", link: "https://pypi.org/user/ClicksMinutePer/", text: "Visit"}
              ]}
              buttonText={"000000"} gradient={["2F6490", "3775A8"]}
            />
          </CardRow>
        </Panel>
        <Panel halfSize={true}>
          <Title>Stranger Danger</Title>
          <Divider />
          <Text>Your parents were right, this place is terrifying</Text>
          <CardRow>
          <Card
            wave="discord" title="Discord" subtext="No, dat cord sorry for the confusion"
            icon="web/icons/discord"
            buttons={[
              {color: "404EED", link: "https://discord.gg/bPaNnxe", text: "Join"}
            ]}
            buttonText={"FFFFFF"} gradient={["404EED", "404EED"]}
          />
          </CardRow>
        </Panel>
      </AutoLayout>
    </>
  )
}
