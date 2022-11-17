import { Divider, Input } from 'antd';

function SearchBar(props) {

    // const [name, setName] = useState("")

    const searchChangeHandler = (event) => {
        console.log(event.target.value)
        props.onSearch(event.target.value)
    }
  
    return (
    <div>
      <Divider>Search For Your Favorite Products</Divider>
      <label>Search</label>
      <Input type="text" onChange={searchChangeHandler} />
    </div>
  );
}

export default SearchBar;