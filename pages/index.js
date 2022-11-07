import { Card, CardRow } from '../Components/Card';
import Header from '../Components/Header';
import { AutoLayout, Panel, Title, Subtitle, Text, Divider } from '../Components/Panels';

const duplicate = (arr, numberOfRepetitions) => arr.flatMap(i => Array.from({ length: numberOfRepetitions }).fill(i));

export default function Home(props) {
  return (
    <>
      <Header
        name="Clicks"
        subtext="We develop "
        customImage="https://assets.clicks.codes/web/logos/clicks.svg"
        embedImage="https://assets.clicks.codes/web/logos/clicks.png"
        gradient={["6576CC", "4B5899"]}
        wave="web/waves/header/cmp"
        buttons={[]}
        index={true}
        fullscreen={true}
        showSubBar={props.showSubBar}
        effects={{ type: 50, changingSubtext: {
          common: [
            "websites", "Discord bots", "utilities", "APIs"
          ], rare: ["overly complicated header animations"]
        }}}
      />
      <AutoLayout>
        <Panel halfSize={false}>
          <Title>Projects</Title>
          <Divider />
          <Text>{"Here's things we've released and are in the making"}</Text>
          <CardRow>
            <Card
              wave="gps" title="GPS" subtext="Cards Against Humanity on Discord"
              icon="bots/gps/circle"
              buttons={[
                {color: "6576CC", link: "https://discordapp.com/oauth2/authorize?client_id=679361555732627476&scope=bot&permissions=130048", text: "Invite"},
                {color: "6576CC", link: "/gps", text: "About"}
              ]}
              buttonText={"FFFFFF"} gradient={["78ECF2", "71AFE5"]}
              url="/gps"
              showMessage={props.showMessage}
            />
            <Card
              wave="rsm" title="RSM" subtext="Moderation Redefined"
              icon="bots/rsm/circle"
              buttons={[
                {color: "424242", link: "https://discord.com/api/oauth2/authorize?client_id=715989276382462053&permissions=121295465718&scope=bot%20applications.commands",text:"Invite"},
                {color: "424242", link: "/rsm", text:"About"}
              ]}
              buttonText={"FFFFFF"} gradient={["F27878", "D96B6B"]}
              url="/rsm"
              showMessage={props.showMessage}
            />
            <Card
              wave="clicksforms" title="ClicksForms" subtext="Create custom forms for Discord"
              icon="bots/clicksforms/circle"
              buttons={[
                {color: "775EBF", link: "https://clicksminuteper.github.io/docs/clicksforms", text:"API", newTab: true},
                {color: "775EBF", link: "https://discord.com/api/oauth2/authorize?client_id=805392054678192169&permissions=2416307200&scope=bot%20applications.commands",text:"Invite"},
                {color: "775EBF", link: "/clicksforms", text: "About"}
              ]}
              buttonText={"FFFFFF"} gradient={["71AFE5", "6576CC"]}
              url="/clicksforms"
            />
            <Card
              wave="castaway" title="Castaway" subtext="Stranded on Discord"
              icon="bots/castaway/circle"
              buttons={[
                {color: "F2D478", link: "/castaway", text: "About"}
              ]}
              buttonText={"000000"} gradient={["71AFE5", "78ECF2"]}
              url="/castaway"
            />
            <Card
              wave="hooky" title="Hooky" subtext="Webhook protection for Discord"
              icon={"bots/hooky/circle"}
              buttons={[
                {color: "EDC575", link: "https://discord.com/oauth2/authorize?client_id=752188923505279037&scope=bot&permissions=536882176", text: "Invite"},
                {color: "EDC575", link: "/hooky", text: "About"}
              ]}
              buttonText={"000000"} gradient={["424242", "8D8D8D"]}
              url="/hooky"
            />
            <Card
              title="New projects..." subtext="We're actively working on projects! You can join our Discord to find out more."
              buttons={[
                {color: "6576CC", link: "https://discord.gg/bPaNnxe", text:"Join our Discord"}
              ]}
              buttonText={"FFFFFF"} border={"C4C4C4"}
              url="/" overwritePosition={"center"}
            />
          </CardRow>
        </Panel>
        <Panel halfSize={true}>
          <Title>Code Bases</Title>
          <Divider />
          <Text>We release open source projects in a few different places depending on the language and purpose</Text>
          <CardRow>
            <Card
              wave="github" title="GitHub" subtext="View our open source projects"
              icon="web/icons/github"
              buttons={[
                {color: "424242", link: "https://github.com/clicksminuteper", text: "Visit"}
              ]}
              buttonText={"FFFFFF"} gradient={["FFFFFF", "C4C4C4"]}
              url="https://github.com/clicksminuteper"
            />
            <Card
              wave="pypi" title="PyPi" subtext="View our modules for python"
              icon="web/icons/pypi"
              buttons={[
                {color: "FFC91E", link: "https://pypi.org/user/ClicksMinutePer/", text: "Visit"}
              ]}
              buttonText={"000000"} gradient={["2F6490", "3775A8"]}
              url="https://pypi.org/user/ClicksMinutePer/"
            />
          </CardRow>
        </Panel>
        <Panel halfSize={true}>
          <Title>Socials</Title>
          <Divider />
          <Text>{"We've got Discord, feel free to ask us anything"}</Text>
          <CardRow>
            <Card
              wave="discord" title="Discord" subtext="Join our Discord server to talk with the community"
              icon="web/icons/discord"
              buttons={[
                {color: "404EED", link: "https://discord.gg/bPaNnxe", text: "Join"}
              ]}
              buttonText={"FFFFFF"} gradient={["404EED", "404EED"]}
              url="https://discord.gg/bPaNnxe"
            />
          </CardRow>
        </Panel>
      </AutoLayout>
    </>
  )
}
