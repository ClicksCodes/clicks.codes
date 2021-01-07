import { Component } from 'react';
import HeaderImage from '../sections/Header.js';
import Socials from '../sections/Socials.js';
import Box from '../components/Box.js';
import Styles from '../styles/pages/index.module.scss'; 
import Updates from '../public/Updates.json';

class Page extends Component {
  render() {
    return (
      <>
        <HeaderImage />
        <div className={Styles.content}>
            <span className={Styles.purpleText}>WHAT'S NEW</span>
        </div>
            <div className={Styles.WNFlex}>
              {
                Updates.reverse().map((u) => <Box title={u.title} color={u.color} more={u.more} strapline={u.strapline}>{u.description}</Box>)
              }
            </div>
        <br />
        <div id="projects" className={Styles.content}>
          <span className={Styles.purpleText}>Projects</span>
        </div>
        <div className={Styles.WNFlex}>
          <a href="https://discord.com/oauth2/authorize?client_id=715989276382462053&scope=bot&permissions=2147483647&redirect_uri=https%3A%2F%2Fclicksminuteper.net" target="_blank"><Box title="RSM" color="red" strapline="Moderation Redefined">Our custom made moderation bot with many features including raid protection, user verification, and much more.</Box></a>
          <a href="https://discord.com/api/oauth2/authorize?client_id=679361555732627476&permissions=322624&scope=bot&redirect_uri=https%3A%2F%2Fclicksminuteper.net" target="_blank"><Box title="Gone Pair Shaped" strapline="Connecting pairs">Card matching on Discord - Play a game similar to Cards Against Humanity or Apples to Apples with all your friends, completely free of charge.</Box></a>
          <a href="https://discord.com/api/oauth2/authorize?client_id=757225562816118895&permissions=322624&scope=bot&redirect_uri=https%3A%2F%2Fclicksminuteper.net" target="_blank"><Box title="Castaway" color="lblue" strapline="Island Life">Castaway is a idle game bot that takes you and your entire server onto a remote island full of resources. Your goal? Get off the island by building a boat</Box></a>
          <a href="https://discord.com/oauth2/authorize?client_id=752188923505279037&scope=bot&permissions=536882176&redirect_uri=https%3A%2F%2Fclicksminuteper.net" target="_blank"><Box title="Hooks Gone Hooky" color="orange" strapline="Webhook Moderation">Protect yourself from webhook raids with Hooks Gone Hooky. As soon as we detect a webhook pinging people we'll delete it, stopping most webhook raiders in their tracks</Box></a>
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
