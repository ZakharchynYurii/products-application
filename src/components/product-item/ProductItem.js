import React from 'react';
import {Link} from 'react-router-dom';
import './ProductItem.scss'

const ProductItem = (props) => {
    const {product, onDeleteProduct} = props;
    const {id, imageUrl, name, weight, count} = product;

   return(
       <div>
           <h1>Name product: {name}</h1>
           <img src={imageUrl}/>
           <div>
               <p>Weight product: {weight}</p>
               <p>Count product: {count}</p>
           </div>
           <Link to={`/detail-product/${id}`}>
               <button>more details</button>
           </Link>
           <button onClick={onDeleteProduct}>delete product</button>
       </div>
   )
}

export default ProductItem;