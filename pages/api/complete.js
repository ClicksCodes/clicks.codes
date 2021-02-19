import Axios from 'axios';

export default async (req, res) => {
    let resp = await Axios.post(
        `https://rsm.bots.clicksminuteper.net/role/gid/${req.props.gID}/rid/${req.props.rID}/user/${req.props.uID}/secret/${secret}}`
    )
    return resolve(resp.status);
}