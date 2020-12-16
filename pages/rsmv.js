import { Component } from 'react';
import Styles from '../styles/rsmv.module.scss'
import HCaptcha from '@hcaptcha/react-hcaptcha';
import Axios from 'axios';

class Page extends Component {

    constructor(props) {
        super(props)
        this.state = {
            v: false
        }
    }

    async handleVerificationSuccess(token) {
        const chk = await Axios.put('https://192.168.1.22:3000/api/verifyTkn', { tkn: token.toString() })

        if(chk.data.success == true) {
            return this.setState({v: true})
        } else {
            return;
        }

    }

    async submitForm() {
        if(!this.state.v) return;
        return await Axios.post('https://192.168.1.22:3001/verify', {
            gid: this.props.serverInfo.id,
            uid: this.props.userid
        }).catch(function(error) {
            if (!error.status) {
                console.log(error)
            }
        });
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
                        onVerify={token => this.handleVerificationSuccess(token)}
                    />
                    <div className={Styles.buttonContainer}>
                        <button className={Styles.button} onClick={this.submitForm()}>Proceed</button>
                    </div>
                </div>
                <div className={Styles.BottomText}>
                    <p>This is an automatic check performed by RSM.<br/>
                        <br/>
                        By clicking Proceed, you will be given the <highlight>Member</highlight> role in <highlight>{this.props.serverInfo.name}</highlight>.<br/>
                        <br/>
                        By Proceeding, you consent to our use of cookies described in our <highlight>policy</highlight>.
                    </p>
                </div>
            </div>
        </>
    }
}

export default Page;
export async function getServerSideProps(ctx) {
    const req = ctx.query
    const ids = await Axios.put('https://beta.clicksminuteper.net/api/validate', {code: req.code})
    const guild = await Axios(`http://localhost:3001/guilds/${ids.data["guild"]}`)
    return {
        props: { serverInfo: guild.data,
                 userid: ids.data["user"]
        }
    }
}