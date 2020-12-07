import { Component } from 'react';
import HeaderImage from '../sections/Header.js';
import Socials from '../sections/Socials.js';
import Box from '../components/Box.js';
import Styles from '../styles/index.module.scss'; 



class Page extends Component {
  render() {
    return (
      <>
        <HeaderImage />
        <div className={Styles.content}>
          <span className={Styles.purpleText}>WHAT'S NEW</span>
        </div>
        <br />
        <div className={Styles.block}>
          <div className={Styles.column}><Box title="RSM Updates">Version 1.1/7 In Progress<br/>Changes:<br/>- Added logs for voice channels: join, leave, move, deafen, undeafen, server deafen, server undeafen<br/>- Ban logs now work<br/>- Banning, unbanning, softbanning reason now work<br/>- Banning a user no longer gives both a banned event and a leave event<br/>- changed the length of error codes<br/>- added errors if your guild has no file<br/>- log channels can no longer be in another server</Box></div>
    <div className={Styles.column}><Box title="RSM Updates">Version 1.1/4 Released<br/>
Changes:<br/>
 - You can now kick, ban, and warn with reasons with more than 1 word<br/>
 - The bot now responds if it doesn't have permission<br/>
 - Fixed grammar<br/>
 - Added a check when writing jsons, reducing errors<br/>
 - Fixed colours<br/>
 - Should run more efficiently<br/>
 - Removed some dependencies (cmutils, d.ext menus) for custom methods<br/>
 - Fixed text on graphs<br/>
 - Fixed ticks on graphs<br/>
 - Removed deleted messages from purge logs (they often messed up)<br/>
 - Increased speed of punish<br/>
 - Removed bug where attachments remained after closing m!guild(edited)
</Box></div>
          <div className={Styles.column}><Box title="RSM Updates">Version 1.1/1 Released<br/>
          Changes:<br/>
           - Added intents so member events work<br/>
           - Added error codes and error responses to failed commands<br/>
           - Added <code>m!raidrestore</code> <i>Kudos to Zanderp</i><br/>
           - Added a response to <code>m!setup</code> and gives a warning about missing permissions
           </Box></div>
          <div className={Styles.column}><Box title="RSM Release" color="green">Version 1 Released<br/>RSM has finally been released!<br/>
          New features: <br/>
- Tags (<code>m!tag</code>) | <code>m!tag create</code> / <code>delete</code><br/>
- Stats (<code>m!stats</code>)<br/>
<br/>
Bug fixes:<br/>
+ Member joins and leaves not logged <br/>
+ Fixed <code>m!settings</code><br/>
+ Fixed the clicks developer badge on profiles<br/>
+ Time is no longer 5 hours in the future<br/>
<br/>
Tweaks:<br/>
- Added a status<br/>
- Other small changes<br/>
</Box></div>
        </div>
        <div id="projects"/>
        <br/>
        <div className={Styles.content}>
          <span className={Styles.purpleText}>PROJECTS</span>
        </div>
        <br/>
        <div className={Styles.block}>
          <div className={Styles.column}>
            <Box title="RSM">Moderate your guilds<br/>RSM provides the sleekest UI menu’s you’ll see on a moderation bot and still has  all the features you’ll find elsewhere including raid protection.</Box>
          </div>
          <div className={Styles.column}>
            <Box title="GPS">Let's play a card game<br/>Enjoy card matching, similar to Apples to Apples or Cards against Humanity - on Discord.</Box>
          </div>
          <div className={Styles.column}>
            <Box title="Cync">Linking Discord to CMP<br/>This allows us to easily build web applications for <b>you</b> like our in progress web dashboard for RSM or custom decks for GPS <i>(we've called it Connect My Pairs)</i>.</Box>
          </div>
        </div>


        <div className={Styles.content}>
          <span className={Styles.purpleText}>Find out yourself</span>
        </div>
        <div className={Styles.block}>
          <Socials/>
        </div>
      </>
    );
  }
}

export default Page;