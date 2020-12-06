import { Component } from 'react';
import { HeaderImage } from '../sections/Header.js';
import { NavBar } from '../components/Navbar.js';
import styles from '../styles/index.module.scss'; 

class Page extends Component {
  render() {
    return (
      <div className={styles.container}>
        <HeaderImage/>
      </div>
    );
  }
}

export default Page;