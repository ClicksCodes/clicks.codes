import { Component } from 'react';
import Input from '../components/Input'
import Styles from '../styles/pages/newphrase.module.scss'

class Page extends Component {
  render() {
    return <>
        <div className={Styles.block}>
            <Input>Name</Input>
        </div>
    </>
  }
}
export default Page;