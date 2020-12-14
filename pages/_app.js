import Footer from '../sections/Footer'
import Navbar from '../components/Navbar'
import Head from 'next/head';
require('../styles/globals.scss');  


function App({ Component, pageProps }) {  
  return (<>\
  <div style={{"height":"25px"}}/>
  <Head>
    <title>ClicksMinutePer</title>
    <link rel="icon" href="/mouse.svg" />
  </Head>
  <Navbar />
  <Component {...pageProps} />
  <Footer />
  </>)
}

export default App;