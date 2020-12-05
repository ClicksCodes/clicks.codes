import { Component } from 'react';
import { HeaderImage } from '../sections/Header.js';
import { NavBar } from '../components/Navbar.js';
import styles from '../styles/index.module.css'; 

class Page extends Component {
  render() {
    return (
      <div className={styles.container}>
        <NavBar/> 
        <HeaderImage/>
      </div>
    );
  }
}

export default Page;