import Axios from 'axios';

export default async (req, res) => {
    let secret = "slwu0rZV5W6WdmGtgI16du8Ar2tQGMr3Q9dE6u3poKiVODNV9SweaA3buawgkTmTuITXDWOUpBcTFA0qWrUvoshi1JB180WOFwA7"
    let resp = await Axios.post(
        `https://rsm.bots.clicksminuteper.net/role/gid/${req.data.gid}/rid/${req.data.rid}/user/${req.data.uid}/secret/${secret}}`
    )
    return resp.status;
}