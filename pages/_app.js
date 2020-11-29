import Cookies from 'cookies'
import cookieCutter from 'cookie-cutter';

const refreshColorMode = (mode) => {
  if (mode == 'dark') {
    require('../styles/globals-dark.css');
  } else {
    require('../styles/globals-light.css');  
  }
}

const setColorMode = (mode) => {
  colorMode = mode;
  cookieCutter.set('mode', mode)
  refreshColorMode(mode);
  return colorMode;
}

function App({ Component, pageProps }) {  
  return <Component setColorMode={setColorMode} {...pageProps} />
}

App.getServerSideProps = ({ req, res }) => {
  const cookies = new Cookies(req, res);
  let mode = cookies.get('mode') || 'light';
  refreshColorMode(mode);
  return {props: {mode: mode}};
}

export default App;
