import Axios from 'axios';

const Complete = async (req, res) => {
    let code = await Axios.post('http://localhost:3000/api/rsmv/validate', {code:req.body.code});
    if (code.status != 200) {
        return res.send(404);
    }
    if (code.data.user  != req.body.uid) return res.send(401)
    if (code.data.guild != req.body.gid) return res.send(401)
    if (code.data.role  != req.body.rid) return res.send(401)

    let secret = "slwu0rZV5W6WdmGtgI16du8Ar2tQGMr3Q9dE6u3poKiVODNV9SweaA3buawgkTmTuITXDWOUpBcTFA0qWrUvoshi1JB180WOFwA7"
    let resp = await Axios.get(
        `http://192.168.102.5:10000/role/gid/${req.body.gid}/rid/${req.body.rid}/user/${req.body.uid}/secret/${secret}/code/${req.body.code}`
    )
    return res.send(resp.status);
}

export default Complete;