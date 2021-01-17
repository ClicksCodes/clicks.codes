import styles from "../styles/components/Toggle.module.scss";
import { Component } from "react"

class Toggle extends Component {
    constructor(props) {
        console.log(props)
        super(props);
        this.state = {mode: props.mode}
        this.toggleMode = this.toggleMode.bind(this);
    }
    toggleMode() {
        this.state.mode = (typeof this.state.mode === 'undefined') ? true : this.state.mode;
        this.state.mode = !this.state.mode
    }
    render() {
        return (
            <>
                <div role="theme-toggle" aria-label="theme toggle" className={styles.Container}>
                    <img onClick={this.toggleMode} id="toggle-theme-btn" className={styles.toggle}/>
                </div>
            </>
        );
    }
}

export default Toggle