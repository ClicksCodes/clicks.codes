import Header from '../../Components/Header'
import { Component } from 'react'
import Styles from '../../styles/clicksforms/form.module.css';
import Question from '../../Components/ClicksForms/Question';

export default class Form extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Header
                    name={this.props.name}
                    subtext={this.props.description + (this.props.active ? '' : <><br />this.props is not accepting responses. Please check back later</>)}
                    gradient={["71AFE5", "6576CC"]}
                    wave="web/waves/header/clicksforms"
                    buttons={[]}
                    season={this.props.season}
                />
                <div className={Styles.form}>
                    <div className={Styles.header}>
                        Once completing this.props, your response will be recorded
                        {this.props.anonymous ? " and your name will not be shown" : " and your username will be visible"}
                    </div>
                    <div className={Styles.body}>
                        {
                            this.props.questions.map((question, index) => {
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

export async function getServerSideProps(ctx) {
    if(!ctx.query.code) {
        return {
            redirect: {
                destination: '/clicksforms/error/nocode',
                permanent: true
            }
        }
    }
    const code = fetch(`https://cf.bots.clicks.codes/code/${ctx.query.code}/token/BkjTUmNPk8S1aPVIYBt8rAUGQF692C8BEscJS9jGDwEtDJcy78uCVsHgRI1dspseGFoatakhWPHTAmYH42zhPpOjoaN1N9eLU7hB`, {
        method: "GET",
        mode: "cors"
    })
    if ( (await code).status ===  404 ) {
        return {
            redirect: {
                destination: '/clicksforms/error/deleted',
                permanent: true
            }
        }
    } else if ( code.status !== 200 ) {
        return {
            redirect: {
                destination: '/clicksforms/error/unknown',
                permanent: true
            }
        }
    }

    return {
        props: {
            data: code.data
        }
    }
}