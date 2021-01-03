import kv from 'keyv';

const kvdb = new kv('mongodb://rsm:LJMy*orVFAATQ5PaX7EKXq74&HCDFaLE@192.168.1.30:27017/rsm')

export default async function(req, res) {

    const v = await kvdb.get(req.body.code);
    if(!v) {
        return res.status(404).end();
    } else {
        var spl = v.split(".")
        return res.send({ user: spl[1], guild:spl[0], role:spl[2] });
    }

}
