import '../styles/globals.css';
import NavBar from '../Components/NavBar';
// import { wrapper } from "../redux/store";

// function App({ Component, pageProps }) {
//   return (
//     <>
//       <Component {...pageProps} />
//       <NavBar />
//     </>
//   );
// }

// export default wrapper.withRedux(App);

function App({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    <NavBar />
  </>
}

export default App
