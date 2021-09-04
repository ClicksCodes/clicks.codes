import { Component } from 'react';

class Paragraph extends Component {
    render () {
        return (
            <p style={{width: "100%", textAlign: "left", paddingLeft: "15%", paddingRight: "15%", fontSize: "120%", color: "var(--card-text-color)"}}>
                {this.props.children}
            </p>
        );
    }
}

export default Paragraph;