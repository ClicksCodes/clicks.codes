import Axios from 'axios';

const Validate = async (req, res) => {
        const out = await Axios.get(`http://192.168.102.7:10000/verify/${req.body.code}`)
        let props = {
            user: out.user,
            role: out.role,
            role_name: out.role_name,
            guild: out.guild,
            guild_name: out.guild_name,
            guild_icon_url: out.guild_icon_url,
            guild_size: out.guild_size
        }
        return res.status(200).send(props)
}

export default Validate;