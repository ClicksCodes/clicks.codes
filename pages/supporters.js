import Header from '../Components/Header'

export default function Home() {
    return (
        <>
            <Header
                name="Supporters"
                subtext="The people who help Clicks function"
                gradient={["71AFE5", "6576CC"]}
                wave="web/waves/header/clicksforms"
                buttons={[]}
            />
            {/* <AutoSpacing>
                <br />
                <Scroller text={[
                    "PineappleFan",
                    "TheCodedProf",
                    "Minion3665"
                ]} />
            </AutoSpacing>*/}
        </>
    )
}
