import { Component } from 'react';
import Link from 'next/link';
import Styles from '../styles/components/Gh.module.scss';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        let color;
        switch (this.props.color) {
            case "red":
                color = Styles.red;
                break;
            case "green":
                color = Styles.green;
                break;
            case "blue":
                    color = Styles.blue;
                    break;
            case "lblue":
                color = Styles.lblue
                break
            case "orange":
                color = Styles.orange
                break
            
            case "castaway":
                color = Styles.castaway
                break

            default:
                color = Styles.blue;
        }

        return (
            <div role="main" aria-label={this.props.title} className={Styles.main + " " + color + " " + (this.props.addToDiscord && "invite")}>
                <h1 className={Styles.title}>{this.props.title}</h1>
                <h2 className={Styles.title}>{this.props.sub}</h2>
                <div className={Styles.buttons}>
                    {(!this.props.addToDiscord) && <a className={Styles.button} href="#features">Features</a>}
                    {(!this.props.addToDiscord) && <a className={Styles.button} href="#commands">Commands</a>}
                    {(!this.props.addToDiscord) && <a className={Styles.button} href={this.props.inviteURL}>Invite</a>}
                    {(this.props.sourceURL && !this.props.addToDiscord) && <a className={Styles.button} href={this.props.sourceURL}>Source</a>}
                    {(this.props.addToDiscord) && <a className={Styles.button} href={this.props.addToDiscord}>Add to Discord</a>}
                </div>
            </div>
        );
    }
};


export default Header;