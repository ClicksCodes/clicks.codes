import { Component } from 'react';

const speeds = {
    type: 70,
    untype: 50,
}


class Typed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "_",
        }
        this.task = null;
    }
    type() {
        this.task = setInterval(() => {
            this.setState((state, props) => {
                if ((props.children + "_") === state.text) {
                    clearInterval(this.task);
                    this.task = null;
                    return {};
                }
                return { text: props.children.slice(0, state.text.length) + "_" };
            });
        }, speeds.type);
    }
    componentDidMount() {
        this.type();
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps === this.props || prevProps.children == this.props.children) {
            return;
        }
        if (this.task) {
            clearInterval(this.task);
        }
        this.task = setInterval(() => {
            this.setState((state, props) => {
                if (state.text === "_") {
                    clearInterval(this.task);
                    this.type();
                    return {};
                } else {
                    return { text: state.text.slice(0, -2) + "_" };
                }
            });
        }, speeds.untype);
    }
    render() {
        return <span>{this.state.text}</span>
    }
    componentWillUnmount() {
        if (this.task) {
            clearInterval(this.task);
            this.task = null;
        }
    }
}

export default Typed;