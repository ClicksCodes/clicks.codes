import { Component } from 'react';
import Styles from '../../../styles/nucleus/nucleus.module.css'
import HCaptcha from 'react-hcaptcha';
import Axios from 'axios';
import Router from 'next/router';
import React from 'react';
import Header from '../../../Components/Header';

import { AutoLayout, Panel, Title, Subtitle, Text, Divider } from '../../../Components/Panels';
import { List, ListItem, Code } from '../../../Components/Texttools';

class Verify extends Component {
    constructor(props) {
        super(props);
        this.v = false;
        this.state = {
            captchaComplete: false,
            clicked: false
        }
    }

    async handleVerificationSuccess(cls, token) {
        const chk = await Axios.put('/api/nucleus/verifyTkn', { tkn: token.toString() })
        if(chk.data.success == true) {
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
            return Router.push('/nucleus/verify/failure','/nucleus/verify/failure')
        }
        let code = await Axios.post('/api/nucleus/complete', {
            uid:cls.props.uID,
            rid:cls.props.rID,
            gid:cls.props.gID,
            code:cls.props.code
        });
        if (code.status === 200 ) return Router.push('/nucleus/verify/success','/nucleus/verify/success')
        else return Router.push('/nucleus/verify/failure','/nucleus/verify/failure')
    }

    render() {
        return <>
            <Header
                name={this.props.guild_name}
                customImage={this.props.guild_icon_url}
                roundImage={true}
                subtext={`${this.props.memberCount} members`}
                gradient={["F27878", "D96B6B"]}
                wave="web/waves/header/nucleus"
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
                        <ListItem>This is an automatic check performed by Nucleus.</ListItem>
                        <ListItem>By clicking Proceed, you will be given the <code>{this.props.role_name}</code> role in <code>{this.props.guild_name}</code>.</ListItem>
                        <ListItem>For the full list of data stored by Nucleus, please check <a href="https://clicksminuteper.github.io/policies/nucleus#verification">here</a></ListItem>
                    </List>
                    <Text>You can add Nucleus to your server by inviting it <a href="https://discord.com/api/oauth2/authorize?client_id=715989276382462053&permissions=121295465718&scope=bot%20applications.commands">here</a>.</Text>
                    <div id="confetti" />
                </Panel>
            </AutoLayout>
        </>
    }
}

export default Verify;
export async function getServerSideProps(ctx) {
}