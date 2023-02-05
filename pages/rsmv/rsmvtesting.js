import { Component } from 'react';
import Styles from '../../styles/rsmv/rsmv.module.css'
import HCaptcha from 'react-hcaptcha';
import Axios from 'axios';
import Router from 'next/router';
import React from 'react';
import Header from '../../Components/Header'

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
        if(chk.data.success === true) {
            this.setState({
                captchaComplete: true
            })
            return cls.v = true;
        } else {
            return;
        }
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
                name={
                    <>
                        <img alt="Server icon" style={{borderRadius: "50%", height: "64px", width: "auto"}} src={"https://i1.sndcdn.com/artworks-000045941811-q634od-t500x500.jpg"} />
                        <br />
                        {"ERROR"}
                    </>
                }
                nameOverwrite="Verify"
                subtext={`-5 members`}
                gradient={["F27878", "D96B6B"]}
                wave="web/waves/header/rsm"
                buttons={[]}
                season={this.props.season}
            />
            <AutoLayout>
                <Panel>
                    <Text>Complete the check below to join ERROR</Text>
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
                        <ListItem>By clicking Proceed, you will be given the <code>MISSING</code> role in <code>ERROR</code>.</ListItem>
                        <ListItem>For the full list of data stored by RSM, please check <a href="https://clicksminuteper.github.io/policies/rsm#verification">Here</a></ListItem>
                    </List>
                    <Text>You can add RSM to your server by inviting it <a href="https://discord.com/api/oauth2/authorize?client_id=715989276382462053&permissions=121295465718&scope=bot%20applications.commands">here</a>.</Text>
                </Panel>
            </AutoLayout>
        </>
    }
}

export default RSMV;
