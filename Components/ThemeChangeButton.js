/** @jsxImportSource theme-ui */
import { useColorMode } from 'theme-ui';
import Styles from '../styles/Components/navbar.module.css';
import { useState, useEffect } from 'react';
import Link from 'next/link'


const ThemeChangeButton = () => {
    const [colorMode, setColorMode] = useColorMode()
    const [render, setRender] = useState(false);

    useEffect(() => {
        setRender(true);
    });

    return (
        <>
            <Link className={Styles.icon + " " + Styles.ThemeChangeButton} onClick={(e) => {
                e.preventDefault();
                setColorMode(colorMode === 'light' ? 'dark' : 'light');
            }} href="#">
                <img className={Styles.icon} alt="Theme" src={"https://assets.clicks.codes/web/icons/" + (
                    colorMode == 'light' ? "light-white" : "dark"
                ) + ".svg"} />
            </Link>
        </>
    )
}

export default ThemeChangeButton;