import Axios from 'axios';
import qs from 'querystring';

export default async (req, res) => {
    const chk = await Axios.post('https://hcaptcha.com/siteverify', qs.stringify({
            response: req.body.tkn,
            secret: '0x19C699BFfce07b2a026121DE6702706BB2d51D6c',
            sitekey: '85074411-fa13-4d9b-b901-53095c6d1fc6'
        }))

    return res.send({ success: chk.data.success });
}
