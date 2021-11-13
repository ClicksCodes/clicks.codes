import '../styles/globals.css';
import NavBar from '../Components/NavBar';
import { ThemeProvider } from 'theme-ui';
import { Helmet } from 'react-helmet';

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
        hint: '#f1f1f1',

        modes: {
            dark: {
                text: '#ffffff',
                background: '#252525',
                primary: '#6576CC',
                cardText: '#424242',
                cardBackground: 'rgba(0, 0, 0, 0.65)',
                cardBorder: '#424242',
                cardFilter: 'brightness(0.7)',
                cardOverlay: '#42424280',
                hint: '#101010',
            }
        }
    },
};


function App({ Component, pageProps }) {
  return <>
    <Helmet>
      <html lang="en" />
    </Helmet>
    <head>
      <meta charSet="utf-8" />
    </head>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <NavBar />
    </ThemeProvider>
  </>
}

export default App
