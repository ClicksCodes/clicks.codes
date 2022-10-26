import '../styles/globals.css';
import NavBar from '../Components/NavBar';
import { ThemeProvider } from 'theme-ui';
import React from 'react';
import Styles from '../styles/globals.module.css';

const theme = {
    config: {
        useColorSchemeMediaQuery: true,
        initialColorModeName: 'light',
    },
    colors: {
        text: '#424242',
        background: '#ffffff',
        primary: '#6576CC',
        cardText: '#ffffff',
        cardBackground: 'rgba(255, 255, 255, 0.65)',
        cardBorder: '#C4C4C4',
        cardFilter: 'rgba(0, 0, 0, 0)',
        cardOverlay: '#00000080',
        hint: '#E4E4E4',
        panelColor: "#F0F0F0",
        fadeGradient: "rgba(240, 240, 240, 1)",
        offset: "2.5px",

        modes: {
            dark: {
                text: '#ffffff',
                background: '#252525',
                primary: '#6576CC',
                cardText: '#424242',
                cardBackground: 'rgba(0, 0, 0, 0.65)',
                cardBorder: '#424242',
                cardFilter: 'brightness(0.5)',
                cardOverlay: '#42424280',
                hint: '#242424',
                panelColor: "rgba(255, 255, 255, 0.05)",
                fadeGradient: "rgba(48, 48, 48, 1)",
                offset: "-20px"
            }
        }
    },
};


function App({ Component, pageProps }) {
  const ref = React.forwardRef(function Ref(props, ref) {
    return <NavBar {...props} ref={ref} />
  });

  const navbar = React.useRef(ref);

  return <>
    <ThemeProvider theme={theme}>
      {navbar.current.render()}
      <Component
        {...pageProps}
        navbar={navbar}
        navRef={ref}
      />
      <div className={Styles.container} />
    </ThemeProvider>
  </>
}

export default App
