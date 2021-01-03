import { Component } from 'react';
import Styles from '../styles/components/input.module.scss';

class Input extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <>

                <form className={Styles.form}>
                    <label className={Styles.labelName}>
                        <span className={Styles.contentName}>{this.props.children}</span>
                    </label>
                    <input type="text" name={this.props.children} autoComplete="off" />
                </form>

            </>
            )

    }
}

export default Input;