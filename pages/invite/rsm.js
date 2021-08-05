import { Component } from 'react'
import Router from 'next/router';

class Redirect extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <>
            {            
                Router.push('https://discord.com/api/oauth2/authorize?client_id=715989276382462053&permissions=121295465718&scope=bot%20applications.commands','/invite/rsm')
            }
        </>
        )
    }

}

export default Redirect;
