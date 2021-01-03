import { Component } from 'react';
import Link from 'next/link';
import Styles from '../styles/components/Box.module.scss';

class Section extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        
        let color;
        switch (this.props.color) {
            case "red":
                color = Styles.tred;
                break;
            case "green":
                color = Styles.tgreen;
                break;
            case "blue":
                    color = Styles.tblue;
                    break;
            case "lblue":
                color = Styles.tlblue
                break
            case "orange":
                color = Styles.torange
                break
            default:
                color = Styles.tblue;
        }

        return (
            <div id={this.props.title}>
                <h1 className={Styles.sectionHeader + " " + color} id={this.props.title}>{this.props.title}</h1>
            </div>
        );
    }
};

export default Section;