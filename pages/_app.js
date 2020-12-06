import Cookies from 'cookies'
import cookieCutter from 'cookie-cutter';
import Footer from '../sections/Footer'
import Navbar from '../components/Navbar'
require('../styles/globals.scss');  


function App({ Component, pageProps }) {  
  return (<>
  <Navbar />
  <Component {...pageProps} />
  <Footer/>
  </>)
}

export default App;
