import { Component } from 'react';
import Styles from '../../styles/rsmv/rsmv.module.css'
import HCaptcha from 'react-hcaptcha';
import Axios from 'axios';
import Router from 'next/router';
import React from 'react';
import Header from '../../Components/Header'

class RSMV extends Component {

    constructor(props) {
        super(props);
        this.v = false;
        this.state = {
            captchaComplete: false,
            clicked: false
        }
    }

    async handleVerificationSuccess(cls, token) {
        const chk = await Axios.put('/api/rsmv/verifyTkn', { tkn: token.toString() })
        if(chk.data.success == true) {
            this.setState({
                captchaComplete: true
            })
            return cls.v = true;
        } else {
            return;
        }
    }

    async componentDidMount() {
        this.setState({
            cores: window.navigator.hardwareConcurrency,
            userAgent: window.navigator.userAgent,
            platform: window.navigator.platform,
            language: window.navigator.language,
            memory: window.navigator.deviceMemory,
        })
    }

    async submitForm(cls) {
        if ( cls.state.clicked ) {
            return
        }
        cls.setState({
            clicked: true
        })
        if (!cls.v) {
            return Router.push('/rsmv/failure','/rsmv')
        }
        let code = await Axios.post('/api/rsmv/complete', {
            uid:cls.props.uID,
            rid:cls.props.rID,
            gid:cls.props.gID,
            code:cls.props.code
        });
        console.log(code.status)
        if (code.status === 200 ) return Router.push('/rsmv/success','/rsmv')
        else return Router.push('/rsmv/failure','/rsmv')
    }

    render() {
        return <>
            <Header
                name={<><img alt="Server icon" style={{borderRadius: "50%", height: "128px", width: "auto"}} src={this.props.guild_icon_url} /><br />{this.props.guild_name}</>}
                nameOverwrite="Verify"
                subtext={` ${this.props.memberCount} members`}
                gradient={["F27878", "D96B6B"]}
                wave="web/waves/header/rsm"
                buttons={[]}
            />
            <div id="start">
                <div className={Styles.center}>
                    <p className={Styles.text}>Complete the check below to join {this.props.guild_name}</p>
                    <HCaptcha
                        id="Captchas mitigate problems"
                        sitekey="85074411-fa13-4d9b-b901-53095c6d1fc6"
                        onVerify={token => this.handleVerificationSuccess(this, token)}
                    />
                    <button type="button" className={Styles.button + " " + (this.state.captchaComplete ? Styles.buttonComplete : null)} onClick={(success) => this.submitForm(this)}>Proceed</button>
                    <p className={Styles.text}>
                        This is an automatic check performed by RSM.
                        By clicking Proceed, you will be given the <code>{this.props.role_name}</code> role in <code>{this.props.guild_name}</code>.
                    </p>
                    <br />
                    <p>You can add RSM to your server by inviting it <a href="https://discord.com/api/oauth2/authorize?client_id=715989276382462053&permissions=121295465718&scope=bot%20applications.commands">here</a>.</p>
                </div>
            </div>
        </>
    }
}

export default RSMV;
export async function getServerSideProps(ctx) {
    if(!ctx.query.code) {
        return {
            redirect: {
                destination: '/rsmv/failure',
                permanent: true
            }
        }
    }
    let code = await Axios.post('http://localhost:3000/api/rsmv/validate', {code:ctx.query.code});
    let headers = ctx.req.headers;
    if (code.status != 200 ) {
        return {
            redirect: {
                destination: '/rsmv/failure',
                permanent: true
            }
        }
    }
    return {
        props: {
            uID: code.data.user,
            rID: code.data.role,
            role_name: code.data.role_name,
            gID: code.data.guild,
            guild_name: code.data.guild_name,
            guild_icon_url: code.data.guild_icon_url,
            memberCount: code.data.guild_size,
            headers: headers,
            code: ctx.query.code
        }
    }
}