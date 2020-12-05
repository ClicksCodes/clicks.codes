import { Component } from 'react';
import styles from '../styles/WhatsNew.module.scss';

class WhatsNew extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div className="all">
                    <h1 className={styles.header}>
                        WHAT'S NEW?
                    </h1>
                    <div className={styles.Container}> 
                        evenly spaced
                    </div>
                </div>
            </>
        );
    }
}

export { WhatsNew };