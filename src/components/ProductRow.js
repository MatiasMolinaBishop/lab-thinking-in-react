import './ProductRow.css'

function ProductRow (props) {

    let productRow = props.productData

    

    return(


        <div className="App">
        

        {productRow.map((products)=>{
             return (
  
          <div class='productFlex row-style'>
            <p className ={!products.inStock ?  'style' : '' }>{products.name}</p>
            <p>{products.category}</p>
            <p>{products.price}</p>
          </div>
            )
        })}

        </div>
    )
}

export default ProductRow