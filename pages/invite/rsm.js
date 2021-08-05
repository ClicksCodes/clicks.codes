import { Component } from 'react'

class RSM extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <>
          {window.location.replace('https://discord.com/api/oauth2/authorize?client_id=715989276382462053&permissions=121295465718&scope=bot%20applications.commands');}
        </>
        )
    }

}

export default RSM;
