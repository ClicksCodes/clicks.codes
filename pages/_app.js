import Footer from '../sections/Footer'
import Navbar from '../components/Navbar'
import Head from 'next/head';
require('../styles/globals.scss');

function App({ Component, pageProps }) {  
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="keywords" content="clicks, minute, per, clicksminuteper, software, development, software development, discord, bot, chatbot, custom" />
                <meta name="author" content="Clicks Minute Per" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Clicks Minute Per</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default App;