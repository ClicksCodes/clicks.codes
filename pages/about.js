import { Component } from 'react';
import Box from '../components/Box.js';
import Styles from '../styles/pages/index.module.scss'

class About extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (<>
        <div className={Styles.WNFlex}>
                <Box title="DEVELOPERS" color="red">We’re a group of (mostly) teenaged developers around the world</Box>
                <Box title="ENTHUSIASTS">We love what we do: we wouldn’t be doing it otherwise</Box>
                <Box title="FRIENDS" color="green">A group of people who usually get along working with each other with some mild banter in between</Box>
        </div>
        </>)
    }

}

export default About