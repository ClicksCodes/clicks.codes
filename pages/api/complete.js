import Axios from 'axios';
import MongoClient from 'mongodb';

const url = 'mongodb://rsm:LJMy*orVFAATQ5PaX7EKXq74&HCDFaLE@192.168.101.2:27017/rsm';
const db = 'rsm';
const collection = 'rsmv-tokens'

export default async (req, res) => {
    MongoClient.connect(url, async function(err, client) {
        console.log(req.body.code)
        let db_response = await client.db(db).collection(collection).findOne({code: req.body.code});

        if (db_response.role != req.body.rid || db_response.guild != req.body.gid || db_response.user != req.body.uid) {
            return 401
        }
    })

    let secret = "slwu0rZV5W6WdmGtgI16du8Ar2tQGMr3Q9dE6u3poKiVODNV9SweaA3buawgkTmTuITXDWOUpBcTFA0qWrUvoshi1JB180WOFwA7"
    let resp = await Axios.get(
        `https://192.168.102.5:10000/role/gid/${req.body.gid}/rid/${req.body.rid}/user/${req.body.uid}/secret/${secret}`
    )
    return resp.status;
}