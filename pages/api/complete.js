import Axios from 'axios';

export default async (req, res) => {
    console.log("requesting to /validate")
    let code = await Axios.post('http://localhost:3000/api/validate', {code:req.body.code});
    console.log("completed /validate")
    if (code.status != 200) {
        console.log("invalid code")
        return
    }

    let secret = "slwu0rZV5W6WdmGtgI16du8Ar2tQGMr3Q9dE6u3poKiVODNV9SweaA3buawgkTmTuITXDWOUpBcTFA0qWrUvoshi1JB180WOFwA7"
    console.log("reauesting to rsm")
    let resp = await Axios.get(
        `http://192.168.102.5:10000/role/gid/${req.body.gid}/rid/${req.body.rid}/user/${req.body.uid}/secret/${secret}`
    )
    console.log("completed rsm request")
    return resp.status;
}