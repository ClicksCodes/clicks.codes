import kv from 'keyv';

const kvdb = new kv('mongodb://rsm:LJMy*orVFAATQ5PaX7EKXq74&HCDFaLE@192.168.1.30:27017/rsm')

export default async function(req, res) {

    const v = await kvdb.get(req.body.code);
    if(!v) {
        return res.status(404).end();
    } else {
        let gid = v.substr(0,18);
        let uid = v.substr(18,18);
        let rid = v.substring(36);
        return res.send({ user: uid, guild:gid, role:rid });
    }

}
