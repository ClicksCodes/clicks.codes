import Axios from 'axios';

const Validate = async (req, res) => {
    try {
        var out = await Axios.get(`http://192.168.102.7:10000/verify/${req.body.code}`)
        console.log(out)
        out = out.data
        let props = {
            user: out.user,
            role: out.role,
            role_name: out.role_name,
            guild: out.guild,
            guild_name: out.guild_name,
            guild_icon_url: out.guild_icon_url,
            guild_size: out.guild_size
        }
        console.log(200)
        return res.status(200).send(props)
    } catch (err) {
        console.log(4001)
        return res.sendstatus(400)
    } finally {
        console.log(4002)
        return res.sendstatus(400)
    }
}

export default Validate;