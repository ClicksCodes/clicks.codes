import Styles from "../../styles/clicksforms/form.module.css"
import { Component } from "react"

class Question extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: null,
            answer: this.props.type == "multichoice" ? [] : null,
            errorString: null,
        }
    }

    getCol(col) {
        switch ( col ) {
            case 'red':
                return "#F27878";
            case 'orange':
                return "#E5AB71";
            case 'yellow':
                return "#F2D478";
            case 'green':
                return "#65CC76";
            case 'blue':
                return "#71AFE5";
            case 'purple':
                return "#A358B2";
            case 'pink':
                return "#D46899";
            case 'grey':
                return "#777777";
            case 'default':
                return "#D4D4D4";
        }
    }

    onChange(answer) {
        let valid = null;
        let errorString = null;

        switch ( this.props.type ) {
            case 'text':
                if ( !answer.length ) {
                    valid = null
                } else if ( answer.length < this.props.options.min ) {
                    valid = false
                    errorString = `Your answer must be at least ${this.props.options.min} characters long. Your response is ${answer.length}.`
                } else if ( answer.length > this.props.options.max ) {
                    valid = false
                    errorString = `Your answer must be at most ${this.props.options.max} characters long. Your response is ${answer.length}.`
                } else {
                    valid = true
                    errorString = null
                }
                break
            case 'number':
                if ( !answer.length ) {
                    valid = null
                } else if ( isNaN(parseInt(answer)) ) {
                    valid = false
                    errorString = `Your answer must be a number.`
                } else if ( answer < this.props.options.min ) {
                    valid = false
                    errorString = `Your answer must be at least ${this.props.options.min}`
                } else if ( answer > this.props.options.max ) {
                    valid = false
                    errorString = `Your answer must be at most ${this.props.options.max}`
                } else {
                    valid = true
                    errorString = null
                }
                break
            case 'multichoice':
                if ( typeof answer != 'object' ) {
                    valid = null
                } else if ( !answer.length ) {
                    valid = null
                } else if ( answer.length < this.props.options.min ) {
                    valid = false
                    errorString = `You must select at least ${this.props.options.min} options.`
                } else if ( answer.length > this.props.options.max ) {
                    valid = false
                    errorString = `You must select at most ${this.props.options.max} options.`
                } else {
                    valid = true
                    errorString = null
                }
                break
            case 'fileupload', 'date', 'time':
                valid = answer != null ? true : null
                break
        }
        this.setState({
            answer: answer,
            status: valid,
            errorString: errorString,
        })
    }

    render() {
        let borderColor = this.state.status == false ? this.getCol("red") : this.getCol("default");
        return (
            <div className={Styles.questionContainer} style={{
                boxShadow: `0px 0px 10px ${borderColor}`,
            }}>
                <h1 className={Styles.title}><div style={{color: this.getCol(this.props.colour), display: "inline"}}>&gt;</div> {this.props.title}</h1>
                <h2 className={Styles.description}>{this.props.description}</h2>
                <hr className={Styles.hr} style={{borderColor: this.getCol("default")}}/>
                {
                    (() => {
                        switch ( this.props.type ) {
                            case 'text':
                                return (
                                    <textarea className={Styles.input} onChange={(e) => this.onChange(e.target.value)} style={{
                                        borderColor: borderColor,
                                    }}></textarea>
                                )
                            case 'number':
                                return (
                                    <input
                                    className={Styles.input}
                                    type="number"
                                        onChange={(e) => {
                                            this.onChange(e.target.value)
                                        }}
                                        style={{borderColor: borderColor}}
                                    />
                                )
                            case 'multichoice':
                                return "not yet"
                            case 'fileupload':
                                return (
                                    <input className={Styles.input} type="file" onChange={(e) => {
                                        this.onChange(e.target.files[0])
                                    }} style={{
                                        borderColor: borderColor
                                    }} />
                                )
                            case 'date':
                                return (
                                    <input className={Styles.input} type="date" onChange={(e) => {
                                        this.onChange(e.target.value)
                                    }} style={{
                                        borderColor: borderColor
                                    }} />
                                )
                            case 'time':
                                return (
                                    <input className={Styles.input} type="time" onChange={(e) => {
                                        this.onChange(e.target.value)
                                    }} style={{
                                        borderColor: borderColor
                                    }} />
                                )
                        }
                    })()
                }
                <div className={Styles.errorContainer} style={{height: this.state.errorString ? "25px" : "0"}}>{this.state.errorString}</div>
            </div>
        )
    }
}

export default Question;
