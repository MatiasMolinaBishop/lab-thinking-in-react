import { Divider, Input } from 'antd';

function CheckBox(props) {

    const searchChangeHandler = (event) => {
        console.log(event.target.value)
        props.onChange(event.target.value)
    }
  

    return(
        <div>
            <Divider>Search For Your Favorite Products</Divider>
            <label>Only Search Products In Sock</label>
            <Input type="checkBOX" onChange={searchChangeHandler} />
        </div>
    )
}
export default CheckBox