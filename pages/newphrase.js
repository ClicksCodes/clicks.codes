import { Component } from 'react';

class Page extends Component {
  render() {
    return <>
        <form style={{justifyContent: 'center',width: '100%',height: '1080px'}}>
            <label>
                <input type="text" name="CMPinput" placeholder="Create More Phrases..." />
            </label>
            <br />
            <input type="submit" value="Submit" />
        </form>
    </>
  }
}
export default Page;