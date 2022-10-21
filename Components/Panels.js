import react, { Component } from "react";
import Styles from '../styles/Components/panels.module.css';
import handleViewport from 'react-in-viewport';


class PanelClass extends Component {
    constructor(props) {
        super(props);
    }

    getStyle() {
        const { inViewport, enterCount } = this.props;
        if (inViewport && enterCount === 1) { return { WebkitTransition: 'all 0.75s ease-in-out', opacity: '1', transform: "translateY(0px)" };
        } else if (!inViewport && enterCount < 1) { return { WebkitTransition: 'none', opacity: '0', transform: "translateY(20px)" };
        } else { return {}; }
    }

    render() {
        return <div className={Styles.panel} style={this.getStyle()} id={this.props.id} tabIndex={0}>
                {
                    react.Children.toArray(this.props.children).map((child, index) => {
                        return child;
                    })
                }
        </div>
    }
}


class AutoLayout extends Component {
    constructor(props) {
        super(props);
        this.children = react.Children.toArray(this.props.children)
        this.validity = []
        this.calculateValidity()
    }

    calculateValidity() {
        this.children.map((item, index) => {
            if ( index > 0 && item.props.halfSize && this.validity[index - 1] === 'half1' ) {
                this.validity[index] = 'half2';
            } else if ( index > 0 && !item.props.halfSize && this.validity[index - 1] === 'half1' ) {
                this.validity[index] = 'full';
                this.validity[index - 1] = 'full';
            } else if ( item.props.halfSize && !(index === this.props.children.length - 1) ) {
                this.validity[index] = 'half1';
            } else if ( index === this.props.children.length - 1 && this.validity[index - 1] === 'half1' ) {
                this.validity[index] = 'full';
                this.validity[index - 1] = 'full';
            } else if ( index === this.props.children.length - 1 && this.validity[index - 1] === 'half2' ) {
                this.validity[index] = 'full';
            } else {
                this.validity[index] = 'full';
            }
        })
    }

    render() {
        return (
            <div className={Styles.container}>
                {
                    this.children.map((item, index) => {
                        if ( this.validity[index] === 'full' ) {
                            return this.children[index]
                        } else if ( this.validity[index] === 'half1' ) {
                            return <div key={index} className={Styles.doublePanel}>
                                {this.children[index]}
                                {this.children[index + 1]}
                            </div>
                        }
                    })
                }
            </div>
        )
    }
}


class Title extends Component {
    render() {
        return <h1 className={Styles.title}>{this.props.children}</h1>
    }
}

class Subtitle extends Component {
    render() {
        return <h2 className={Styles.subtitle}>{this.props.children}</h2>
    }
}

class Text extends Component {
    render() {
        return <p className={Styles.text}>{this.props.children}</p>
    }
}

class Divider extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let highlighted = this.props.toHighlight === this.props.name;
        return <div className={Styles.divider} style={{
                backgroundColor: (highlighted && this.props.highlightColour) ? ("#" + this.props.highlightColour) : "var(--theme-ui-colors-hint)"
            }}>{this.props.forceHighlight}</div>
    }
}

const Panel = handleViewport(PanelClass, { rootMargin: '-1.0px' });

export { AutoLayout, Panel, Title, Subtitle, Text, Divider };