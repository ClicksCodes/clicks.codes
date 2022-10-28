import Axios from 'axios';

const Complete = async (req, res) => {
    let code = await Axios.post('http://127.0.0.1:3000/api/rsmv/validate', {code:req.body.code});
    if (code.status !== 200) {
        return res.send(404);
    }
    if (code.data.user  !== req.body.uid) return res.send(401)
    if (code.data.guild !== req.body.gid) return res.send(401)
    if (code.data.role  !== req.body.rid) return res.send(401)

    let secret = process.env.VERIFY_SECRET;
    let resp = await Axios.get(
        `http://localhost:10000/verify/${req.body.gid}/${req.body.rid}/${req.body.uid}/${secret}/${req.body.code}`
    )
    return res.send(resp.status);
}

export default Complete;