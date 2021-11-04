/** @jsxImportSource theme-ui */
import { useColorMode } from 'theme-ui';
import Styles from '../styles/navbar.module.css'

const ThemeChangeButton = () => {
    const [colorMode, setColorMode] = useColorMode()
    return (
        <header>
            <a onClick={(e) => {
                    e.preventDefault();
                    setColorMode(colorMode === 'light' ? 'dark' : 'light');
                }}>
            <img
                alt="Theme"
                className={Styles.icon}
                src={`/${colorMode}.svg`}
            /></a>
        </header>
    )
}

export default ThemeChangeButton;