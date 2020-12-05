import { Component } from 'react';
import Link from 'next/link';
import Styles from '../styles/Box.module.css';


const Box = (props) => {
    let color;
    switch (props.color) {
        case "red":
        case "important":
            color = Styles.red;
            break;
        case "green":
        case "new":
            color = Styles.green;
            break;
        default:
            color = Styles.blue;
    }
    return (
        <div className={Styles.BoxContainer + " " + color}>
            <div className={Styles.title}>
                {props.title}
            </div>
            <hr className={Styles.hr + " " + color} />
            <div className={Styles.description}>
                {(() => {
                    let desc = props.children;
                    if (desc.length < 3) return null;
                    if (desc[1].type !== "br") return null;
                    return (
                        <>
                            <span className={Styles.strapline}>{desc[0]}</span><br/>
                            {desc.slice(2)}
                        </>
                    )
                })()}<br/>
                <Link href={props.more ?? ""}>More &gt;</Link>
            </div>
        </div>
    );
};

export default Box;