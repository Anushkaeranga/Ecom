import React from 'react';
import data from '../data';
import {Link} from 'react-router-dom';
import '../App.css';

function ProductScreen(props) {
    console.log(props.match.params.id);  /*can use the console to check the id passed  */
    const product = data.products.find(x=>x._id.toString() === props.match.params.id.toString());
    return<div>
    <div className="back-to-result">
        <Link to ='/'>back to results</Link>
    </div>
    <div className ="details">
        <div className="details-image">
            <img src={product.image} />
        </div>
        <div className="details-info">
           <ul>
               <li><h4>{product.name}</h4></li>
               <li>{product.rating} Stars ({product.rumReviews} Reviews)</li>
               <li>Pirce: <b>${product.price}</b></li>
               <li>
                   Description:{product.description}                   
               </li>
               <li>
                   Qty:
               </li>
           </ul>
        </div>
        <div className="details-action">
            <ul>
                <li>price:${product.price}</li>
                <li>status:{product.status}</li>
                <li>Qty:<select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    </select>
                </li>
                <li>
                    <button className="button">Add to Cart</button>
                </li>
            </ul>
        </div>
    </div>
</div>
}
export default ProductScreen;