import Axios from 'axios';
import Router from 'next/router';
import React from 'react';
import Header from '../../Components/Header'
import { useReward } from 'react-rewards';

import { AutoLayout, Panel, Title, Text, Divider } from '../../Components/Panels';
import { useColorMode } from 'theme-ui';
import Styles from '../../../styles/nucleus/rolemenu.module.css';

function RoleMenu(props) {
    const [clicked, setClicked] = React.useState(false);
    const [formState, setFormState] = React.useState({});
    const [theme, setTheme] = useColorMode()

    const { reward: reward, isAnimating: isAnimating } = useReward('confetti', 'confetti', {
        elementSize: 10,
        elementCount: 150,
        startVelocity: 35,
        lifetime: 300,
        decay: 0.94,
        spread: 170,
        position: "absolute",
        colors: ["#68D49E"]
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
    }

    async function submitForm() {
        if (!isAnimating) reward();
        return
        let code = await Axios.post('/api/nucleus/rolemenu/complete', {
            code: props.code
        });
        setTimeout(() => {
            if (code.data.success === true ) return Router.push('/nucleus/rolemenu/success','/nucleus/rolemenu')
            else return Router.push('/nucleus/rolemenu/failure','/nucleus/rolemenu')
        }, 2500);
    }

    return <>
        <Header
            name={props.guildName}
            customImage={props.guildIcon}
            roundImage={true}
            subtext={`Welcome, ${props.username}`}
            gradient={["F27878", "D96B6B"]}
            wave="web/waves/header/nucleus"
            buttons={[]}
        />
        <form onSubmit={submitForm}>
            <AutoLayout>
                {props.data.map((item, index) => {
                    return <Panel key={index} halfSize={true}>
                        <Title>{item.name}</Title>
                        <Divider/>
                        <Text>{item.description}</Text>
                        <div className={Styles.options}>
                            {
                                item.options.map((props, optionIndex) => {return <div className={Styles.optionBox}>
                                    <input
                                        type={item.max === 1 ? "radio" : "checkbox"}
                                        style={{borderRadius: item.max === 1 ? "50%" : "5px"}}
                                        className={Styles.option}
                                        key={item.name + optionIndex}
                                        id={item.name + optionIndex.toString()}
                                        name={item.name}
                                        value={props.name}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor={item.name + optionIndex.toString()}>{props.name}</label>
                                </div>})
                            }
                        </div>
                    </Panel>
                })}
                <Panel halfSize={false}>
                    <Title>Save</Title>
                    <Divider/>
                    <Text>
                        After selecting all your roles, click the button below to save your choices.
                    </Text>
                    <div id="confetti" />
                    <div className={Styles.submit}>
                        <button type="submit" disabled={isAnimating}>
                            {isAnimating ? "Saving..." : "Save"}
                        </button>
                    </div>
                </Panel>
            </AutoLayout>
        </form>
    </>
}

export default RoleMenu;
export async function getServerSideProps(ctx) {
    if(!ctx.query.code) {
        return {
            redirect: {
                destination: '/nucleus',
                permanent: true
            }
        }
    }
    let code;
    try {
        code = (await Axios.get(`http://localhost:10000/rolemenu/${ctx.query.code}`)).data;
    } catch (e) {
        return {
            redirect: {
                destination: '/nucleus/rolemenu/failure',
                permanent: true
            }
        }
    }
    let headers = ctx.req.headers;
    return {
        props: {
            guild: code.guild,
            guildName: code.guildName,
            guildIcon: code.guildIcon,
            user: code.user,
            username: code.username,
            data: code.data,
            headers: headers
        }
    }
}