/** @jsxImportSource theme-ui */
import { useColorMode } from 'theme-ui';
import Styles from '../styles/Components/navbar.module.css';
import { useState, useEffect } from 'react';


const ThemeChangeButton = () => {
    const [colorMode, setColorMode] = useColorMode()
    const [render, setRender] = useState(false);

    useEffect(() => {
        setRender(true);
    });

    return (
        <header>
            <a className={Styles.icon + " " + Styles.ThemeChangeButton} onClick={(e) => {
                e.preventDefault();
                setColorMode(colorMode === 'light' ? 'dark' : 'light');
            }}>
            {
                !render ? null : (colorMode == 'light' ? <img alt="Light" src="https://assets.clicksminuteper.net/web/icons/light.svg" /> : <img alt="Dark" src="https://assets.clicksminuteper.net/web/icons/dark.svg" />)
            }
            </a>
        </header>
    )
}

export default ThemeChangeButton;