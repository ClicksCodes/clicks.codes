import Header from '../Components/Header'
import { AutoLayout, Panel, Title, Subtitle, Text, Divider } from '../Components/Panels';
import { List, ListItem, Code } from '../Components/Texttools';
import Link from 'next/link';


export default function Home() {
    return (
        <>
            <Header
                name="Privacy"
                subtext="Privacy is a right - Here's how we handle it"
                gradient={["71AFE5", "6576CC"]}
                wave="web/waves/header/clicksforms"
                buttons={[]}
            />
            <AutoLayout>
                <Panel halfSize={true}>
                    <Title>Transparency</Title>
                    <Text>Everything we store about you and your Discord servers will be listed.</Text>
                    <List colour={"6576CC"}>
                        <ListItem><Link href="https://clicksminuteper.github.io/policies/rsm">RSM</Link></ListItem>
                        <ListItem><Link href="https://clicksminuteper.github.io/policies/clicksforms">ClicksForms</Link></ListItem>
                        <ListItem>GPS does not store any information</ListItem>
                    </List>
                    <Text>Have any questions or concerns? <Link href="/support">Let us know</Link> and we can investigate if you believe there are any mistakes</Text>
                </Panel>
                <Panel halfSize={true}>
                    <Title>Security</Title>
                    <Text>We will do everything we can to protect user data, including high security. You can <Link href="/support">message us</Link> if you would like to learn more about how we do this</Text>
                </Panel>
            </AutoLayout>
        </>
    )
}
