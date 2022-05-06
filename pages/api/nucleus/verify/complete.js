import Axios from 'axios';
import qs from 'querystring';

const Complete = async (req, res) => {
    const chk = await Axios.post('http://localhost:3000/api/nucleus/verify/verifyToken', qs.stringify({
        tkn: req.body.tkn
    }))
    if ( !chk.data.success ) {
        return res.status(200).send({success: false})
    }
    let secret = "slwu0rZV5W6WdmGtgI16du8Ar2tQGMr3Q9dE6u3poKiVODNV9SweaA3buawgkTmTuITXDWOUpBcTFA0qWrUvoshi1JB180WOFwA7"
    try {
        await Axios.post(`http://192.168.0.18:10000/verify/${req.body.code}`, {
            secret: secret
        });
    } catch (e) {
        return res.status(200).send({success: false})
    }
    return res.status(200).send({success: true});
}

export default Complete;