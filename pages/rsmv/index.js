import { Component } from 'react';
import Styles from '../../styles/pages/rsmv.module.scss'
import HCaptcha from '@hcaptcha/react-hcaptcha';
import Axios from 'axios';
import Router from 'next/router'

class RSMV extends Component {    

    constructor(props) {
        super(props);
        this.v = false;
    }

    async handleVerificationSuccess(cls, token) {
        const chk = await Axios.put('https://clicksminuteper.net/api/verifyTkn', { tkn: token.toString() })
        console.log(chk)
        if(chk.data.success == true) {
            return cls.v = true;
        } else {
            return;
        }

    }

    async submitForm(cls) {
        if(!cls.v) return;

        const vfy = await Axios.post('https://api.clicksminuteper.net/verify', {
            gid: cls.props.serverInfo.id,
            uid: cls.props.userid,
            rid: cls.props.role.id
        }).catch(function(error) {
            if (!error.status) {
                console.log(error)
            }
        });
        if(vfy.status === 200) {
            return Router.push('/rsmv/success','/rsmv')
        } else if(vfy.status === 500) {
            return Router.push('/rsmv/failure','/rsmv')
        }
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
                        By clicking Proceed, you will be given the <highlight>{this.props.role.name}</highlight> role in <highlight>{this.props.serverInfo.name}</highlight>.<br/>
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
    const req = ctx.query
    const ids = await Axios.put('http://localhost:3000/api/validate', {code: req.code})
    const guild = await Axios(`http://localhost:3001/guilds/${ids.data["guild"]}`)
    const role = await Axios(`http://localhost:3001/roles/${ids.data["guild"]}/${ids.data["role"]}`)
    return {
        props: { serverInfo: guild.data,
                 userid: ids.data["user"],
                 role: role.data
        }
    }
}
