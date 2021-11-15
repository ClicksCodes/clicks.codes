import Header from '../../Components/Header'
import { Component } from 'react'
import Styles from '../../styles/clicksforms/form.module.css';
import Paragraph from '../../Components/Paragraph';
import Question from '../../Components/ClicksForms/Question';

export default class Form extends Component {
	constructor(props) {
		super(props);
        this.form = {
            'id': '1629451712.871201',
            'active': true, 'anonymous': false, 'guild': 684492926528651336, 'created_by': 438733159748599813,
            'name': 'Example form', 'description': 'The default form',
            'required_roles': [], 'disallowed_roles': [], 'given_roles': [], 'removed_roles': [],
            'auto_accept': false,
            'questions': [
                {
                    'type': 'text', 'title': 'Text answer', 'description': 'some description',
                    'colour': 'red', 'options': {'min': 1, 'max': 2000}, 'required': true, 'question': true, 'id': '1630426754.449609'
                }, {
                    'type': 'number', 'title': 'Number', 'description': 'Type something over 2 to trigger response validation',
                    'colour': 'orange', 'options': {'min': 0, 'max': 2}, 'required': true, 'question': true, 'id': '1630426754.449615'
                }, {
                    'type': 'multichoice', 'title': 'Multiple choice!', 'description': '', 'colour': 'yellow', 'options': {
                        'min': 1, 'max': 2, 'options': {'0': ['circl', false], '1': ['skware', false], '3': ['no', false]}
                    },
                    'required': false, 'question': true, 'id': '1630426754.449619'
                }, {
                    'type': 'fileupload', 'title': 'Files', 'description': '',
                    'colour': 'green', 'options': {}, 'required': false, 'question': true, 'id': '1630426754.449629'
                }, {
                    'type': 'time', 'title': 'Enter a time', 'description': '',
                    'colour': 'blue', 'options': {}, 'required': true, 'question': true, 'id': '1630426754.449632'
                }, {
                    'type': 'date', 'title': 'when', 'description': '',
                    'colour': 'purple', 'options': {}, 'required': true, 'question': true, 'id': '1630426754.449635'
                }
            ]
        }
    }

	render() {
		return (
			<>
                <Header
                    name={this.form.name}
                    subtext={this.form.description + (this.form.active ? '' : <><br />This form is not accepting responses. Please check back later</>)}
                    gradient={["71AFE5", "6576CC"]}
                    wave="web/waves/header/clicksforms"
                    buttons={[]}
                />
                <div id="start" />
                <div className={Styles.form}>
                    <div className={Styles.header}>
                        Once completing this form, your response will be recorded
                        {this.form.anonymous ? " and your name will not be shown" : " and your username will be visible"}
                    </div>
                    <div className={Styles.body}>
                        {
                            this.form.questions.map((question, index) => {
                                return (
                                    <>
                                        <Question
                                            key={index}
                                            title={question.title}
                                            description={question.description}
                                            colour={question.colour}
                                            type={question.type}
                                            options={question.options}
                                            required={question.required}
                                        />
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
			</>
		)
	}
}
