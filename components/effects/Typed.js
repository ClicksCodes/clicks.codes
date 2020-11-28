import { Component } from 'react';
import Expansions from "../../data/expansions.json";

class Typed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "_",
        }
        this.task = null;
        this.untype = false;
    }
    type(state, props) {
        if ((props.children + "_") === state.text) {
            clearInterval(this.task);
            this.task = null;
            return {};
        }
        return { text: props.children.slice(0, state.text.length) + "_" };
    }
    componentDidMount() {
        this.task = setInterval(() => {
            this.setState((state, props) => {
                return this.type(state, props);
            });
        }, 100);
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.task) {
            clearInterval(this.task);
        }
        this.untype = true;
        this.task = setInterval(() => {
            this.setState((state, props) => {
                if (this.untype) {
                    if (state.text.length === 1) { 
                        this.untype = false;
                    } else {
                        return { text: state.text.slice(0, -1) };
                    }
                }
                return this.type(state, props);
            });
        }, 100);
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