import JWT from 'jsonwebtoken';
import fs from 'fs';

export default async (req, res) => {
    let publicKey = fs.readFileSync('./keys/rsm.pub');
    var decoded = JWT.verify(req.body.data.jwt, publicKey);
    console.log(decoded)
    res.send(decoded)
}
