import styles from "../styles/components/Toggle.module.scss";
import { Component } from "react"

class Toggle extends Component {
    vars_light = {
        "--background-color": "white",
        "--bars": "white",
        "--text-color": "black",
        "--blurple-text-color": "black",
        "--header-image-background": "0",
        "--header-image-text-seperator-border": "1px solid rgba(0,0,0,.5);",
        "--invert-filter": "invert(0)",
        "--navbar-menu-background": "hsla(0, 0%, 0%, .5)",
        "--theme-icon": "url(/Day.svg)"
    }
    vars_dark = {
        "--background-color": "#232323",
        "--bars": "#232323",
        "--text-color": "white",
        "--blurple-text-color": "#775ebf",
        "--header-image-background": "linear-gradient(0deg, rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)), url(/background.svg);",
        "--header-image-text-seperator-border": "1px solid rgba(255, 255, 255, .5);",
        "--invert-filter": "invert(1)",
        "--navbar-menu-background": "hsla(0,0%,100%,0.5)",
        "--theme-icon": "url(/Night.svg)"
    }
    constructor(props) {
        super(props);
        this.state = {mode: props.mode}
        this.toggleMode = this.toggleMode.bind(this);
    }
    setVars(mode) {
        const root = document.documentElement
        mode = mode || this.state.mode
        if (mode === true) {
            for (const key of Object.keys(this.vars_dark)) {
                root.style.setProperty(key, this.vars_dark[key])
            }
        } else {
            for (const key of Object.keys(this.vars_light)) {
                root.style.setProperty(key, this.vars_light[key])
            }
        }
    }
    hasBrowserDarkMode() {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    componentDidMount() {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            this.setVars(e.matches)
        });
        window.addEventListener('load', () => {
            const savedTheme = window.sessionStorage.getItem("theme")
            if (savedTheme !== undefined) {
                switch (savedTheme) {
                    case "dark": {
                        this.setVars(true)
                        this.state.mode = true
                        break
                    }
                    case "light": {
                        this.setVars(false)
                        this.state.mode = false
                        break
                    }
                    default: {
                        // Saved theme was invalid value, use browser default
                        const browserTheme = this.hasBrowserDarkMode()
                        this.setVars(browserTheme)
                        this.state.mode = browserTheme
                    }
                }
            } else {
                // No saved theme, browser default
                const browserTheme = this.hasBrowserDarkMode()
                this.setVars(browserTheme)
                this.state.mode = browserTheme
            }
        });
    }
    toggleMode() {
        // True: dark mode
        // False: light mode
        this.state.mode = (typeof this.state.mode === 'undefined') ? true : this.state.mode;
        this.state.mode = !this.state.mode
        this.setVars()
        window.sessionStorage.setItem("theme", this.state.mode ? "dark" : "light")
    }
    render() {
        return (
            <>
                <div role="theme-toggle" aria-label="theme toggle" className={styles.Container}>
                    <img onClick={this.toggleMode}
                         id="toggle-theme-btn"
                         className={styles.toggle}
                         alt="Theme switcher"
                    />
                </div>
            </>
        );
    }
}

export default Toggle