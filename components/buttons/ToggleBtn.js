import { Component } from 'react'

class ToggleBtn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: "light"
        }
    }

    flip() {
        var newMode;
        this.state === 'light' ? newMode = 'dark' : newMode = 'light';
        this.setState('mode',newMode);
        return ; //cookie info go here
    }

    render() {
        <button onClick={this.flip()}></button>
    }

}

export default ToggleBtn