import { Component } from 'react';
import Link from 'next/link';
import Styles from '../styles/Box.module.scss';


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
            {(() => {
                let desc = props.children;
                if (desc.length < 3) return null;
                if (desc[1].type !== "br") return null;
                return (
                    <>
                        <div className={Styles.strapline}>{desc[0]}</div>
                        <div className={Styles.description}>{desc.slice(2)}</div>
                    </>
                )
            })()}<br/>
            <Link href={props.more ?? ""}>More &gt;</Link>
        </div>
    );
};

export default Box;