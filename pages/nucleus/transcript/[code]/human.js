import Axios from 'axios';

const t = () => { return <></>}
export default t
export async function getServerSideProps(ctx) {
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
        code = (await Axios.get(`http://localhost:10000/transcript/${ctx.params.code}`))
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
            destination: `http://api.coded.codes/nucleus/transcript/${ctx.params.code}/human`,
            permanent: true
        }
    }
}