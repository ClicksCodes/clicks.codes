import react, { Component } from "react";
import Styles from '../styles/Components/texttools.module.css';
import { Popover } from 'react-tiny-popover';


class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={Styles.list}>
                {
                    react.Children.toArray(this.props.children).map((item, index) => {
                        return <div key={index} className={Styles.listItem}>
                            <div className={Styles.square} style={{borderColor: `#${this.props.colour}`}} />
                            <div>{item}</div>
                        </div>
                    })
                }
            </div>
        )
    }
}

class ListItem extends Component {
    render() {
        return this.props.children
    }
}

class Code extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPopoverOpen: false,
        };
    }

    clicked() {
        let content = this.props.children
        navigator.clipboard.writeText(content)
        this.setState({isPopoverOpen: true})
        setTimeout(() => {
            this.setState({isPopoverOpen: false})
        }, 2000)
    }

    render() {
        return <span
            className={Styles.code}
            style={{color: `#${this.props.colour}`}}
            onClick={this.props.clickable ? () => this.clicked() : () => this.clicked()}
        >{this.state.isPopoverOpen ? "Copied!" : this.props.children}</span>
    }
}

export { List, ListItem, Code };