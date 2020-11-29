import { Component } from 'react';
import { HeaderImage } from '../components/Header.js';
import { NavBar } from '../components/Navbar.js';
import { WhatsNew } from '../components/New.js';
import styles from '../styles/index.module.css'; 

class Page extends Component {
  render() {
    return (
      <div className={styles.container}>
        <NavBar/> 
        <HeaderImage/>
        <WhatsNew/>
      </div>
    );
  }
}

export default Page;