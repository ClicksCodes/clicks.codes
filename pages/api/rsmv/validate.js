// import { MongoClient } from 'mongodb';


// const url = 'mongodb://rsm:LJMy*orVFAATQ5PaX7EKXq74&HCDFaLE@192.168.101.2:27017/rsm';
// const db = 'rsm';
// const collection = 'rsmv-tokens'
import Axios from 'axios';

const Validate = (req, res) => {
    return new Promise((resolve, reject) => {
        // MongoClient.connect(url, async function(err, client) {
        //     let db_response = await client.db(db).collection(collection).findOne({code: req.body.code});

        //     if (!db_response) return resolve(res.status(404).end());
        //     if (db_response.timestamp + (1800) >= Date.now()) return resolve(res.status(410));

        //     let props = {
        //         user: db_response.user,
        //         role: db_response.role,
        //         role_name: db_response.role_name,
        //         guild: db_response.guild,
        //         guild_name: db_response.guild_name,
        //         guild_icon_url: db_response.guild_icon_url,
        //         guild_size: db_response.guild_size
        //     }
        //     return resolve(res.status(200).send(props));
        // })
        const out = async () => {
            await Axios.get(`http://192.168.102.7:10000/verify/${req.body.code}`)
        }
        let props = {
            user: out.user,
            role: out.role,
            role_name: out.role_name,
            guild: out.guild,
            guild_name: out.guild_name,
            guild_icon_url: out.guild_icon_url,
            guild_size: out.guild_size
        }
        return resolve(res.status(200).send(props))
    })
}

export default Validate;