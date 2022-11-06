import React, { useEffect, useState } from "react";
import Styles from '../styles/Components/header.module.css';
import NavStyles from '../styles/Components/navbar.module.css';
import Head from 'next/head';
import { useReward } from "react-rewards";
import ScrollContainer from 'react-indiana-drag-scroll'

const positive = [
    "https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f389.svg",
    "https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f388.svg",
    "https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f973.svg",
];

const negative = [
    "https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f614.svg",
    "https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f61e.svg",
    "https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f613.svg",
    "https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f625.svg",
    "https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f623.svg",
];

function preloadImage (src) {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = function() {
            resolve(img)
        }
        img.onerror = img.onabort = function() {
            reject(src)
        }
        img.src = src
    })
}


function Header(props) {
    const [ clickTotal, setClickTotal ] = React.useState(0);

    const { reward: reward, isAnimating: isAnimating } = useReward('headerConfetti', 'confetti', {
        elementSize: 10,
        elementCount: 150,
        startVelocity: 35,
        lifetime: 300,
        decay: 0.95,
        spread: 170,
        position: "absolute",
        colors: ["#F27878", "#E5AB71", "#E5DC71", "#A1CC65", "#68D49E", "#71AFE5", "#6576CC", "#8D58B2", "#BF5E9F"]
    });
    const { reward: disappointment, isAnimating: isDisappointmentAnimating } = useReward('disappointmentConfetti', 'confetti', {
        elementSize: 25,
        elementCount: 1,
        startVelocity: 25,
        lifetime: 350,
        decay: 0.95,
        spread: 0,
        position: "absolute",
        colors: ["#E5AB71"]
    });

    const all = positive.concat(negative)
    const [imagesPreloaded, setImagesPreloaded] = useState(false)
    useEffect(() => {
        let isCancelled = false
        async function effect() {
            if (isCancelled) { return }
            const imagesPromiseList = []
            for (const i of all) { imagesPromiseList.push(preloadImage(i)) }
            await Promise.all(imagesPromiseList)
            if (isCancelled) { return }
            setImagesPreloaded(true)
        };
        effect()
        return () => { isCancelled = true }
    }, [all])

    function showSubBarWithUrl(url) {
        const screenWidth = window.innerWidth;
        let amount = screenWidth - 50;
        amount = Math.floor(amount / 42) - 1;
        props.showSubBar(
            <div className={NavStyles.container}>
                {
                    Array.from(Array(amount)).map((i, index) => {
                        return (
                            <a className={NavStyles.icon} key={index}><img alt="" className={NavStyles.icon} src={
                                url[Math.floor(Math.random() * url.length)]
                            } /></a>
                        )
                    })
                }
            </div>,
            5, "center"
        );
    }

    function confetti() {
        if (!isAnimating && !isDisappointmentAnimating && props.index) {
            setClickTotal(clickTotal + 1);
            if (clickTotal > 0 && Math.floor(Math.random() * 3) === 0) {
                showSubBarWithUrl(negative);
                disappointment();
            } else {
                showSubBarWithUrl(positive);
                reward();
            }
        }
    }

    return (
        <div className={Styles.header} style={{
            margin: "0",
            minHeight: props.fullscreen ? "calc(100vh - 42px)" : "calc(100vh - (4 * max(2em, 4vw)) - 1em)",
        }} id={props.id ? props.id : null}>
            {imagesPreloaded}
            <div className={Styles.backgroundGradient} style={{
                backgroundImage: `linear-gradient(69.44deg, #${props.gradient[0]} 0%, #${props.gradient[1]} 100%)`,
            }} />
            <Head>
                <title>{props.name}</title>

                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="viewport" content="width=device-width, minimal-ui" />

                <meta name="title" content={props.name} />
                <meta name="og:title" content={props.name} />
                <meta name="description" content={props.embedDescription ? props.embedDescription : props.subtext} />
                <meta name="og:description" content={props.embedDescription ? props.embedDescription : props.subtext} />
                <meta name="author" content="Clicks" />
                <meta name="og:author" content="Clicks" />
                <meta name="image" content={props.embedImage} />
                <meta name="og:image" content={props.embedImage} />

                <meta name="theme-color" content={"#000000"} />
                <meta name="og-color" content={"#" + props.gradient[1]} />
                <meta name="msapplication-TileColor" content={"#000000"} />
            </Head>
            <img draggable={false} alt="" className={Styles.backgroundImage} src={`https://assets.clicks.codes/${props.wave}.svg`} />
            <div id="headerConfetti" />
            <div id="disappointmentConfetti" />
            <div className={Styles.panel}>
                <div className={Styles.titleContainer}>
                    <div onClick={confetti}>
                        {
                            props.customImage ?
                            <img height="64px" width="64px" alt={props.name} className={Styles.headerImage} style={{borderRadius: props.roundImage ? "100vw" : "0"}} src={props.customImage} />
                            : <></>
                        }
                    </div>
                    <h1 className={Styles.title}>{props.name}</h1>
                </div>
                <p className={Styles.subtext + " " + (props.buttons.length ? Styles.subtextExtra : null)}>{props.subtext}</p>
                <a href="#skipNav" id="skipNav" style={{display: "none"}} />
                { props.buttons.length ?
                    <div className={Styles.buttonOverflow}>
                        <img className={Styles.indicator + " " + Styles.leftArrow} draggable={false} alt="" src={`https://assets.clicks.codes/web/icons/arrow.svg`}/>
                        <ScrollContainer
                            vertical={false}
                            horizontal={true}
                            hideScrollbars={true}
                            nativeMobileScroll={true}
                            style={{borderRadius: "10px", height: "fit-content"}}
                        >
                            <div className={Styles.buttonLayout}>
                                {
                                    props.buttons ? props.buttons.map((button, index) => {
                                        return <a
                                            key={index}
                                            className={Styles.button}
                                            style={{ backgroundColor: `#${button.color}`, color: `#${button.buttonText}` }}
                                            href={button.link}
                                            onClick={
                                                button.onClick ? button.onClick : () => { if (button.id) { props.callback(button.id) } }}
                                            target={button.target ? "_blank" : null}
                                            draggable={false}
                                            rel="noreferrer">
                                            {button.text}
                                        </a>
                                    }) : null
                                }
                            </div>
                        </ScrollContainer>
                        <img className={Styles.indicator + " " + Styles.rightArrow} draggable={false} alt="" src={`https://assets.clicks.codes/web/icons/arrow.svg`}/>
                    </div> : <></>
                }
            </div>
        </div>
    )
}

export default Header;