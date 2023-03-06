import Axios from 'axios';
import qs from 'querystring';

const Complete = async (req, res) => {
    const chk = await Axios.post('https://hcaptcha.com/siteverify', qs.stringify({
        response: req.body.tkn,
        secret: '0x19C699BFfce07b2a026121DE6702706BB2d51D6c',
        sitekey: '85074411-fa13-4d9b-b901-53095c6d1fc6'
    }))
    if ( !chk.data.success ) {
        return res.status(200).send({success: false})
    }
    try {
        await Axios.post(`${process.env.NUCLEUS_CALLBACK}verify/${req.body.code}`, {
            secret: process.env.VERIFY_SECRET
        });
    } catch (e) {
        return res.status(200).send({success: false})
    }
    return res.status(200).send({success: true});
}

export default Complete;
