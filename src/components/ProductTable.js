 import ProductsPage from "./ProductsPage"
// import jasonData from '../data.json';
// import {useState} from 'react';
import ProductRow from "./ProductRow"

function ProductTable(props){

    // const [currentProducts, setProducts] = useState(jasonData);
    let productData = props.productData
    
    return(
        <div className="App">
        <h1>PRODUCTS LIST</h1>
        <ProductRow productData = {productData}/>
        </div>
    )
}

export default ProductTable