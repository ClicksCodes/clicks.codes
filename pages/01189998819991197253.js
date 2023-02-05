import Header from '../Components/Header'

export default function Error(props) {
    return (
        <>
            <Header
                name="0118 999 881 999 119 7253"
                subtext={<>
                    Dear Sir/Madam,<br />
                    Fire! Fire! Help me!<br />
                    123 Cavendon Road.<br />
                    Looking forward to hearing from you,<br />
                    All the best, Maurice Moss
                </>}
                embedDescription="This is the internet"
                gradient={["F27878", "D96B6B"]}
                wave="web/waves/header/rsm"
                buttons={[{color: "F27878", buttonText: "ffffff", text: "No that's too formal", onClick: (() => {
                    const quotes = [
                        "I said, do you think you'd die if you drank wee?",
                        "Anyway, enough about our balls!",
                        "DON'T GOOGLE THE QUESTION MOSS",
                        "Hello, IT, have you tried turning it off and on again?",
                        "I'VE GOT A RUDDY GUN",
                        "I came here to drink milk and kick ass, and I've just finished my milk",
                        "I'll just put this over here... with the rest of the fire"
                    ]
                    props.showMessage(quotes[Math.floor(Math.random() * quotes.length)])
                })}]}
                fullscreen={true}
                season={props.season}
            />
        </>
    )
}
