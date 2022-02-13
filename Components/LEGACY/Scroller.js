import { Component } from "react";
import Styles from '../styles/scroller.module.css';

class Scroller extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        this.props.text = this.props.text.concat(this.props.text);
        return (
            <div className={Styles.container}>
                {
                    this.props.text.map((item, index) => {
                        console.log([this.props.text, this.props.text])
                        return <div className={Styles.item} key={index}>{item}</div>;
                    })
                }
            </div>
        )
    }
}
export default Scroller;
