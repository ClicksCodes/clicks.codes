import Axios from 'axios';

export default async (req, res) => {
    let code = await Axios.post('http://localhost:3000/api/validate', {code:req.body.code});

    let secret = "slwu0rZV5W6WdmGtgI16du8Ar2tQGMr3Q9dE6u3poKiVODNV9SweaA3buawgkTmTuITXDWOUpBcTFA0qWrUvoshi1JB180WOFwA7"
    let resp = await Axios.get(
        `https://192.168.102.5:10000/role/gid/${req.body.gid}/rid/${req.body.rid}/user/${req.body.uid}/secret/${secret}`
    )
    return resp.status;
}