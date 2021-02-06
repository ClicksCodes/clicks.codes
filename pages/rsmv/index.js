import { Component } from 'react';
import Styles from '../../styles/pages/rsmv.module.scss'
import HCaptcha from '@hcaptcha/react-hcaptcha';
import Axios from 'axios';
import Router from 'next/router';
import React from 'react';


class RSMV extends Component {

    constructor(props) {
        super(props);
        this.v = false;
        this.state = {

        }
    }

    async handleVerificationSuccess(cls, token) {
        const chk = await Axios.put('http://localhost:3000/api/verifyTkn', { tkn: token.toString() })
        console.log(chk)
        if(chk.data.success == true) {
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
        // let data = cls.state;
        // data["ip"] = cls.props.headers['x-forwarded-for'];
        // let rq = await Axios.post('http://localhost:3000/api/verify',data)
        // if(rq.status === 200) {
        //     return Router.push('/rsmv/success','/rsmv')
        // } else if(rq.status === 403) {
        //     return Router.push('/rsmv/failure','/rsmv')
        // } else {
        //     return Router.push('/rsmv/failure','/rsmv')
        // }
        let secret = "slwu0rZV5W6WdmGtgI16du8Ar2tQGMr3Q9dE6u3poKiVODNV9SweaA3buawgkTmTuITXDWOUpBcTFA0qWrUvoshi1JB180WOFwA7"
        let resp = await Axios.post(
            `https://192.168.102.5:10000/role/gid/${cls.props.gID}/rid/${cls.props.rID}/user/${cls.props.uID}/secret/${secret}}`
        )
        console.log(resp)
        return Router.push('/rsmv/success','/rsmv')
    }

    render() {
        return <>
            <div className={Styles.container}>
                <div className={Styles.ServerHeader}>
                    <div className={Styles.ServerHeaderCenter}>
                        <img src={this.props.guild_icon_url} className={Styles.ServerHeaderImage}/>
                    </div>
                </div>
                <div className={Styles.ServerHeader}>
                    <div className={Styles.ServerHeaderCenter}>
                        <h1>{this.props.guild_name}</h1>
                        <h3>{this.props.memberCount} members</h3>
                    </div>
                </div>
                <div className={Styles.ServerHeader}>
                    <h4>
                        Complete the check below to join {this.props.guild_name}.
                    </h4>
                </div>
                <div className={Styles.form}>
                    <HCaptcha
                        id="Captchas mitigate problems"
                        sitekey="85074411-fa13-4d9b-b901-53095c6d1fc6"
                        onVerify={token => this.handleVerificationSuccess(this, token)}
                    />
                    <div className={Styles.buttonContainer}>
                        <button type="button" className={Styles.button} onClick={(success) => this.submitForm(this)}>Proceed</button>
                    </div>
                </div>
                <div className={Styles.BottomText}>
                    <p>This is an automatic check performed by RSM.<br/>
                        <br/>
                        By clicking Proceed, you will be given the <highlight>{this.props.role_name}</highlight> role in <highlight>{this.props.guild_name}</highlight>.<br/>
                        {/* <br/>
                        By Proceeding, you consent to our use of cookies described in our <highlight>policy</highlight>. */}
                    </p>
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
                destination: '/rsmv/faliure',
                permanent: true
            }
        }
    }
    let code = await Axios.post('http://localhost:3000/api/validate', {code:ctx.query.code});
    let headers = ctx.req.headers;
    if (code.status != 200 ) {
        return {
            redirect: {
                destination: '/rsmv/faliure',
                permanent: true
            }
        }
    }
    console.log(code)
    return {
        props: {
            uID:code.data.user,
            rID:code.data.role,
            role_name:code.data.role_name,
            gID:code.data.guild,
            guild_name:code.data.guild_name,
            guild_icon_url:code.data.guild_icon_url,
            memberCount:code.data.guild_size,
            headers: headers
        }
    }
}
