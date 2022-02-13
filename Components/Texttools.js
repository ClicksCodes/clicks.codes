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
		}, 1000)
	}

	render() {
		if ( this.props.clickable === false) {
			return <pre
				className={Styles.code}
				style={{color: `#${this.props.colour}`, boxShadow: `0px -3px 10px 2px #424242`}}
			>{this.props.children}</pre>
		} else {
			return <Popover
				isOpen={this.state.isPopoverOpen}
				positions={['top', 'bottom', 'left', 'right']} // preferred positions by priority
				content={<Code colour={this.props.colour} clickable={false}>Copied!</Code>}
			>
				<pre
					className={Styles.code}
					style={{color: `#${this.props.colour}`}}
					onClick={() => this.clicked()}
				>{this.props.children}</pre>
			</Popover>
		}
	}
}

export { List, ListItem, Code };