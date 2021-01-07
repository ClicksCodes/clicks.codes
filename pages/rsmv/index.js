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
        const chk = await Axios.put('https://beta.clicksminuteper.net/api/verifyTkn', { tkn: token.toString() })
        console.log(chk)
        if(chk.data.success == true) {
            return cls.v = true;
        } else {
            return;
        }

    }

    async submitForm(cls) {
        Axios.get('http://localhost:3000/api/verify',{uid:cls.props.uID,gid:cls.props.gID,rid:cls.props.rID});
        if(w === 200) {
            return Router.push('/rsmv/success','/rsmv')
        } else {
            return Router.push('/rsmv/failure','/rsmv')
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
        let data = cls.state;
        data["ip"] = cls.props.headers['x-forwarded-for'];
        let rq = await Axios.post('https://beta.clicksminuteper.net/api/verify',data)
    }

    render() {
        return <>
            <div className={Styles.container}>
                <div className={Styles.ServerHeader}>
                    <div className={Styles.ServerHeaderCenter}>
                        <img src={this.props.serverInfo.iconURL} className={Styles.ServerHeaderImage}/>
                    </div>
                </div>
                <div className={Styles.ServerHeader}>
                    <div className={Styles.ServerHeaderCenter}>
                        <h1>{this.props.serverInfo.name}</h1>
                        <h3>{this.props.serverInfo.memberCount} members</h3>
                    </div>
                </div>
                <div className={Styles.ServerHeader}>
                    <h4>
                        Complete the check below to join {this.props.serverInfo.name}.
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
                        By clicking Proceed, you ({this.props.user.name}) will be given the <highlight>{this.props.role.name}</highlight> role in <highlight>{this.props.serverInfo.name}</highlight>.<br/>
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
                destination: '/404',
                permanent: true
            }
        }
    }
    let code = await Axios.post('http://localhost:3000/api/validate', {data:{jwt:ctx.query.code}});
    let headers = ctx.req.headers;
    return {
        props: {
            rID:code.data.roleID,
            gID:code.data.guildID,
            uID:code.data.userID,
            role: {
                name:code.data.roleName
            },
            user: {
                name:code.data.userName
            },
            serverInfo: {
                iconURL: code.data.guildAvatar,
                name:code.data.guildName,
                memberCount:code.data.guildSize
            },
            headers: headers
        }
    }
}
