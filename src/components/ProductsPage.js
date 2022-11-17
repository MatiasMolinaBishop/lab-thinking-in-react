import {useState} from 'react';
import jasonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import CheckBox from './CheckBox';
import { Divider, Input } from 'antd';

function ProductsPage () {

    const [currentProducts, setProducts] = useState(jasonData);

    
  const filterHandler = (searchString) =>{
    //console.log(searchString)

    let newArr = jasonData.filter(filteredProduct =>{
      return filteredProduct.name.includes(searchString)
    })
    setProducts(newArr)
  }

  const inStockHandler = (click) =>{

    const newArr = currentProducts.filter(product=>{
      return product.inStock === true

    })

    setProducts(newArr)


    
  }

    return(
        <div>
            <h1>IronStore</h1>
            <SearchBar onSearch={filterHandler}></SearchBar>
            <CheckBox onChange={inStockHandler}/>
            <ProductTable productData = {currentProducts}></ProductTable>

        </div>
        
    )
}

export default ProductsPage