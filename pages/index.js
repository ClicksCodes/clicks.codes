import { Component } from 'react';
import HeaderImage from '../sections/Header.js';
import Socials from '../sections/Socials.js';
import Box from '../components/Box.js';
import Styles from '../styles/index.module.scss'; 
import Head from 'next/head';


class Page extends Component {
  render() {
    return (
      <>
        <HeaderImage />
        <div className={Styles.content}>
          <div className={Styles.WhatsNew}>
            <span className={Styles.purpleText}>WHAT'S NEW</span>
            <div className={Styles.WNFlex}>
              <div className={Styles.new + " " + Styles.red}>
                <h2>RSM</h2>
                <hr className={Styles.RedHR} />
                <h3 className={Styles.NewH4}>1.2 Released</h3>
                <p className={Styles.NewP}>
                  RSM 1.2 Has been released, with many more features than before.<br />
                  With new commands like <code>m!report</code>, moderating your server is easier than before.<br />
                </p>
                <a className={Styles.readmore}> Read More &gt;</a>
              </div>
              <Box title="Test Title">Test Test<br/>TestTest <code>Test</code></Box>
              <div className={Styles.new + " " + Styles.blue}>
                <h2>GPS</h2>
                <hr className={Styles.BlueHR} />
                <h3 className={Styles.NewH4}>Rewire</h3>
                <p className={Styles.NewP}>
                  The GPS Rewire is in progress, adding options to your games like shuffling, hand sizes, and much more.
                </p>
                <a className={Styles.readmore}> Read More &gt;</a>
              </div>
              <div className={Styles.new + " " + Styles.red}>
                <h2>This section</h2>
                <hr className={Styles.RedHR} />
                <h3 className={Styles.NewH4}>Is not</h3>
                <p className={Styles.NewP}>
                  C o m p l e t e d
                </p>
                <a className={Styles.readmore}> Read More &gt;</a>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className={Styles.content}>
          <span className={Styles.purpleText}>Find out yourself</span>
        </div>
        <div className={Styles.block+" "+Styles.soc}>
          <Socials/>
        </div>
      </>
    );
  }
}

export default Page;