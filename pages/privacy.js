import Header from '../Components/Header'
import { AutoLayout, Panel, Title, Subtitle, Text, Divider } from '../Components/Panels';
import { List, ListItem, Code } from '../Components/Texttools';


export default function Home(props) {
    return (
        <>
            <Header
                name="Privacy"
                subtext="Privacy is a right - Here's how we handle it"
                gradient={["71AFE5", "6576CC"]}
                wave="web/waves/header/clicksforms"
                buttons={[]}
                season={props.season}
            />
            <AutoLayout>
                <Panel halfSize={true}>
                    <Title>Transparency</Title>
                    <Text>Everything we store about you and your Discord  will be listed.</Text>
                    <List colour={"6576CC"}>
                        <ListItem><a href="https://clickscodes.github.io/policies/rsm">RSM</a></ListItem>
                        <ListItem><a href="https://clickscodes.github.io/policies/clicksforms">ClicksForms</a></ListItem>
                        <ListItem>GPS does not store any information</ListItem>
                    </List>
                    <Text>Have any questions or concerns? <a href="/support">Let us know</a> and we can investigate if you believe there are any mistakes</Text>
                </Panel>
                <Panel halfSize={true}>
                    <Title>Security</Title>
                    <Text>We will do everything we can to protect user data, including high security. You can <a href="/support">message us</a> if you would like to learn more about how we do this</Text>
                </Panel>
            </AutoLayout>
        </>
    )
}
