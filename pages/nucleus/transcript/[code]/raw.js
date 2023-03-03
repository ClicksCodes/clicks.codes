import Axios from 'axios';

const t = () => { return <></>}
export default t
export async function getServerSideProps(ctx) {
    console.log(ctx.req.url)
    if(!ctx.params.code) {
        return {
            redirect: {
                destination: '/nucleus/transcript/about',
                permanent: true
            }
        }
    }
    let code;
    try {
        code = (await Axios.get(`http://${process.env.NUCLEUS_CALLBACK}/transcript/${ctx.params.code}`))
    } catch (e) {
        return {
            redirect: {
                destination: '/nucleus/transcript/invalid',
                permanent: true
            }
        }
    }
    return {
        redirect: {
            destination: `http://${process.env.NUCLEUS_CALLBACK}/transcript/${ctx.params.code}`,
            permanent: true
        }
    }
}