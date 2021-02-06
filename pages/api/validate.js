import MongoClient from 'mongodb';


const url = 'mongodb://rsm:LJMy*orVFAATQ5PaX7EKXq74&HCDFaLE@192.168.101.2:27017/rsm';
const db = 'rsm';
const collection = 'rsmv-tokens'

export default (req, res) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function(err, client) {
            let db_response = client.db(db).collection(collection).findOne({code: req.body.code, timestamp: {$gte: new Date().getTime() - (30 * 60 * 1000)}});
            // https://stackoverflow.com/questions/18233945/query-to-get-last-x-minutes-data-with-mongodb  ^

            if (!db_response) return resolve(res.status(404).end());
            let props = {
                user: db_response.user,
                role: db_response.role,
                role_name: db_response.role_name,
                guild: db_response.guild,
                guild_name: db_response.guild_name,
                guild_icon_url: db_response.guild_icon_url,
                guild_size: db_response.guild_size
            }

            return resolve(res.status(200).send(props));
        })
    })
}

/*
    let code = await Axios.post('http://localhost:3000/api/validate', {code:ctx.query.code});
    let headers = ctx.req.headers;
    return {
        props: {
            "user" : NumberLong("438733159748599813"),
            "role" : NumberLong("760901551496626187"),
            "role_name" : "Member",
            "guild" : NumberLong("684492926528651336"),
            "guild_name" : "Clicks Minute Per Hub",
            "guild_icon_url" : "https://cdn.discordapp.com/icons/684492926528651336/30729f5bc70d57f735403c7e3364b900.webp?size=1024",
            "guild_size" : 228
        }
    }
}

*/