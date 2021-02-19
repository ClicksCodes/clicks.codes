import Axios from 'axios';

export default async (req, res) => {
    let resp = await Axios.post(
        `https://rsm.bots.clicksminuteper.net/role/gid/${cls.props.gID}/rid/${cls.props.rID}/user/${cls.props.uID}/secret/${secret}}`
    )
    return resolve(resp.status);
}