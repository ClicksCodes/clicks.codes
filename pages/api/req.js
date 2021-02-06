import Axios from 'axios';

export default async (req, res) => {
    let resp = await Axios.post(
        `https://192.168.102.5:10000/role/gid/${cls.props.gID}/rid/${cls.props.rID}/user/${cls.props.uID}/secret/${secret}}`
    )
    return resolve(resp.status(200));
}
