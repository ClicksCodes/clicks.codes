import { Component } from 'react';
import Link from 'next/link';
import Styles from '../styles/components/P.module.scss';
//import Modal from 'react-modal';

class Box extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className={Styles.container}>
                <p>
                    {(() => { 
                    let desc = this.props.text.split("`")
                    return (
                        <>
                            <a className={Styles.description} href={this.props.href}>{
                                desc.map((item, index) => { 
                                    if (index % 2 == 0) {
                                        return item;
                                    } else {
                                        return <code>{item}</code>;
                                    }
                                })
                            }</a>
                        </>
                    )
                })()}
                </p>
            </div>
        );
    }
};

export default Box;