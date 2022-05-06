import { Component } from 'react';
import Styles from '../../styles/rsmv/rsmv.module.css'
import HCaptcha from 'react-hcaptcha';
import Axios from 'axios';
import Router from 'next/router';
import React from 'react';
import Header from '../../Components/Header'
import Link from 'next/link'

import { AutoLayout, Panel, Title, Subtitle, Text, Divider } from '../../Components/Panels';
import { List, ListItem, Code } from '../../Components/Texttools';
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
        if (code.status === 200 ) return Router.push('/rsmv/success','/rsmv')
        else return Router.push('/rsmv/failure','/rsmv')
    }

    render() {
        return <>
            <Header
                name="Verify"
                customImage={this.props.guild_icon_url}
                subtext={`${this.props.memberCount} members`}
                gradient={["F27878", "D96B6B"]}
                wave="web/waves/header/rsm"
                buttons={[]}
            />
            <AutoLayout>
                <Panel>
                    <Text>Complete the check below to join {this.props.guild_name}</Text>
                    <div style={{height: "125px"}}>
                        <HCaptcha
                            id="Captchas mitigate problems"
                            sitekey="85074411-fa13-4d9b-b901-53095c6d1fc6"
                            onVerify={token => this.handleVerificationSuccess(this, token)}
                            theme={this.theme ? "light" : "dark"}
                        />
                    </div>
                    <button type="button" className={Styles.button + " " + (this.state.captchaComplete ? Styles.buttonComplete : null)} onClick={(success) => this.submitForm(this)}>Proceed</button>
                    <List colour="F27878">
                        <ListItem>This is an automatic check performed by RSM.</ListItem>
                        <ListItem>By clicking Proceed, you will be given the <code>{this.props.role_name}</code> role in <code>{this.props.guild_name}</code>.</ListItem>
                        <ListItem>For the full list of data stored by RSM, please check <Link href="https://clicksminuteper.github.io/policies/rsm#verification">Here</Link></ListItem>
                    </List>
                    <Text>You can add RSM to your server by inviting it <Link href="https://discord.com/api/oauth2/authorize?client_id=715989276382462053&permissions=121295465718&scope=bot%20applications.commands">here</Link>.</Text>
                </Panel>
            </AutoLayout>
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