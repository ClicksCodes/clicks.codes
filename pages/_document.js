import Doc, { Html, Head, Main, NextScript } from 'next/document';
import { ThemeProvider } from 'theme-ui';

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

class Document extends Doc {
    static async getInitialProps(ctx) {
        const initialProps = await Doc.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                    <ThemeProvider theme={theme}>
                        <Main />
                        <NextScript />
                    </ThemeProvider>
                </body>
            </Html>
        )
    }
}

export default Document;