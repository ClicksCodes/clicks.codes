import '../styles/globals.css'
import NavBar from '../Components/NavBar'

function App({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    <NavBar />
  </>
}

export default App
