import { Card, CardRow } from '../Components/Card';
import Header from '../Components/Header'
import { AutoLayout, Panel, Title, Subtitle, Text, Divider } from '../Components/Panels';
import { List, ListItem, Code } from '../Components/Texttools';
import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toHighlight: null,
    };
  }

  highlightSection(section) {
    this.setState({toHighlight: section});
  }

  render() {
    return (
      <>
        <Header
          name={"Clicks​Forms"}
          customImage={"https://assets.clicks.codes/web/logos/clicksforms.svg"}
          embedImage="https://assets.clicks.codes/bots/clicksforms/normal.png"
          subtext="Custom forms on Discord"
          gradient={["71AFE5", "6576CC"]}
          wave="web/waves/header/clicksforms"
          buttons={[
            {id: "commands", color: "6576CC", buttonText: "FFFFFF", link: "#commands", text: "Commands"},
            {id: "services", color: "6576CC", buttonText: "FFFFFF", link: "#services", text: "Services"},
            {id: "privacy", color: "6576CC", buttonText: "FFFFFF", link: "#privacy", text: "Privacy"},
            {id: "invite", color: "775EBF", buttonText: "FFFFFF", link: "#invite", text: "Invite"}
          ]}
          callback={() => this.highlightSection()}
          season={this.props.season}
        />
        <AutoLayout>
          <Panel halfSize={true} id="commands">
            <Title>Commands</Title>
            <Divider toHighlight={this.state.toHighlight} highlightColour="6576CC" name="commands"/>
            <Text>Standard commands to use ClicksForms</Text>
            <List colour="6576CC">
              <ListItem><Code colour="6576CC">/accept</Code> Completes a form you are asked to fill in.</ListItem>
              <ListItem><Code colour="6576CC">/apply</Code> Apply to a form.</ListItem>
              <ListItem><Code colour="6576CC">/create</Code> Creates a new form.</ListItem>
              <ListItem><Code colour="6576CC">/download</Code> Downloads a form from a service e.g. Google Forms.</ListItem>
              <ListItem><Code colour="6576CC">/help</Code> Lists all commands.</ListItem>
              <ListItem><Code colour="6576CC">/responses</Code> Lets you view responses to your servers form.</ListItem>
              <ListItem><Code colour="6576CC">/manage</Code> Lets you manage your servers forms.</ListItem>
            </List>
          </Panel>
          <Panel halfSize={true} id="services" style={this.state.toHighlight === "services" ? {border: "solid 10px red"} : {}}>
            <Title>Services</Title>
            <Divider toHighlight={this.state.toHighlight} highlightColour="6576CC" name="services"/>
            <Text>ClicksForms supports services such as <a href="https://docs.google.com/forms">Google Forms</a> through our Add-on.</Text>
            <Text>Our API is public. You can view it <a href="/clicksforms/docs">here</a>.</Text>
          </Panel>
          <Panel halfSize={true} id="privacy">
            <Title>Privacy</Title>
            <Divider toHighlight={this.state.toHighlight} highlightColour="6576CC" name="privacy"/>
            <Text>You should always know what we know and store about you, so <a href="https://clickscodes.github.io/policies/clicksforms">here</a> is the complete list.</Text>
            <Text>We also have a list of terms for using ClicksForms, it can be viewed <a href="https://clickscodes.github.io/policies/clicksformstos">here</a>.</Text>
          </Panel>
          <Panel halfSize={true} id="invite">
            <Title>Invite</Title>
            <Divider toHighlight={this.state.toHighlight} highlightColour="6576CC" name="invite"/>
            <CardRow><Card
              wave="clicksforms"
              icon="bots/clicksforms/circle"
              buttonText={"FFFFFF"} gradient={["71AFE5", "6576CC"]}
              title="ClicksForms"
              subtext="Invite ClicksForms to your server"
              buttons={[
                {color: "775EBF", link: "https://discord.com/api/oauth2/authorize?client_id=805392054678192169&permissions=2416307200&scope=bot%20applications.commands", text: "Invite"}
              ]}
              url="https://discord.com/api/oauth2/authorize?client_id=805392054678192169&permissions=2416307200&scope=bot%20applications.commands"
            /></CardRow>
          </Panel>
        </AutoLayout>
      </>
    )
  }
}
