import styles from "../styles/components/Toggle.module.scss";
import { Component } from "react"

class Toggle extends Component {
    constructor(props) {
        console.log(props)
        super(props);
        this.state = {mode: props.mode}
    }
    toggleMode() {
        // const root = document.documentElement
        // root.
    }
    render() {
        return (
            <>
                <div role="theme-toggle" aria-label="theme toggle" className={styles.Container}>
                    <button onClick={this.toggleMode} id="toggle-theme-btn">test</button>
                </div>
            </>
        );
    }
}

export default Toggle