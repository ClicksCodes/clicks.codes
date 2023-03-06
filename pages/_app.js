import '../styles/globals.css';
import NavBar from '../Components/NavBar';
import { ThemeProvider } from 'theme-ui';
import React, {useEffect} from 'react';
import { useRouter } from 'next/router';
import Styles from '../styles/globals.module.css';
import Christmas from '../Components/overlays/christmas';

const theme = {
    config: {
        useColorSchemeMediaQuery: true,
        initialColorModeName: 'light',
    },
    colors: {
        text: '#424242',
        background: '#ffffff',
        primary: '#6576CC',
        highlight: '#78ECF2',
        cardText: '#ffffff',
        cardBackground: 'rgba(255, 255, 255, 0.65)',
        cardBorder: '#C4C4C4',
        cardFilter: 'rgba(0, 0, 0, 0)',
        cardOverlay: '#00000080',
        hint: '#E4E4E4',
        panelColor: "#F0F0F0",
        fadeGradient: "rgba(240, 240, 240, 1)",
        offset: "2.5px",

        borders: "#FFFFFF",
        borderHint: "#E4E4E4",

        modes: {
            dark: {
                text: '#ffffff',
                background: '#000000',
                primary: '#6576CC',
                highlight: '#78ECF2',
                cardText: '#424242',
                cardBackground: 'rgba(0, 0, 0, 0.65)',
                cardBorder: '#424242',
                cardFilter: 'brightness(0.5)',
                cardOverlay: '#42424280',
                hint: '#242424',
                panelColor: "rgba(255, 255, 255, 0.05)",
                fadeGradient: "rgba(48, 48, 48, 1)",
                offset: "-20px",

                borders: "#000000",
                borderHint: "#424242",
            }
        }
    },
};


function App({ Component, pageProps }) {
    const [subBar, setSubBar] = React.useState(false);
    const [currentElement, setElement] = React.useState(<></>);

    const router = useRouter();
    const [season, setSeason] = React.useState({ season: "normal", filePath: "normal" });

    useEffect(() => async () => {
        const params = router.query["theme"];
        if (params) {
        setSeason({season: params, filePath: "seasonal/" + params});
            return;
        }
        let newSeason = await (await fetch("/api/season")).json();
        // newSeason = {season: "trans", filePath: "seasonal/trans"}
        setSeason({...newSeason });
        // const params = "aprilFools"
        // setSeason({season: params, filePath: "seasonal/" + params});
    }, [season.season, router])

    const showSubBar = (element, timeout, positioning="left") => {
        setSubBar(true);
        if (positioning === "center") {
            element = <div className={Styles.centeredSubBar}>{element}</div>
        }
        setElement(element);
        if (timeout) {
            setTimeout(() => {
            setSubBar(false);
                setTimeout(() => {
                    setElement(<></>);
                }, 0.31 * 1000)
            }, timeout * 1000)
        }
    }

    const hideSubBar = () => {
        setSubBar(false);
    }

    const showMessage = (text, positioning="left") => {
        showSubBar(<p className={Styles.message}>{text}</p>, 5, positioning);
    }

    let Overlay = <></>;
    switch (season.season) {
        case "christmas": {
            Overlay = <Christmas />;
            break;
        }
    }

    return <>
        <ThemeProvider theme={theme}>
        <NavBar
            subBar={subBar}
            setSubBar={setSubBar}
            element={currentElement}
            setElement={setElement}
            showMessage={showMessage}
            showSubBar={showSubBar}
            season={season}
        />
        <Component
            {...pageProps}
            showSubBar={showSubBar}
            hideSubBar={hideSubBar}
            showMessage={showMessage}
            season={season}
        />
        <div className={Styles.container} style={{
            pointerEvents: "none",
            height: "1000vh"
        }}>{Overlay}</div>
        <div className={Styles.container} />
        </ThemeProvider>
    </>
}

export default App;
