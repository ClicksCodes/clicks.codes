/** @jsxImportSource theme-ui */
import { useColorMode } from 'theme-ui';
import Styles from '../styles/Components/navbar.module.css';
import { useState, useEffect } from 'react';


const ThemeChangeButton = () => {
    const [colorMode, setColorMode] = useColorMode()
    const [render, setRender] = useState(false);

    useEffect(() => {
        setRender(true);
    }, []);

    return (
        <>
            <a className={Styles.icon + " " + Styles.themeChangeIcon} onClick={(e) => {
                e.preventDefault();
                setColorMode(colorMode === 'light' ? 'dark' : 'light');
            }} href="#">
                <img className={Styles.icon + " " + Styles.themeChangeIcon} alt="Theme" src={"https://assets.clicks.codes/web/icons/light-white.svg"} />
                <img className={Styles.icon + " " + Styles.themeChangeIcon} alt="Theme" src={"https://assets.clicks.codes/web/icons/dark.svg"} />
            </a>
        </>
    )
}

export default ThemeChangeButton;