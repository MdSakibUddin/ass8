import React from 'react';
import { faLocationArrow, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css';

const Product = (props) => {
    // console.log(props.product);

    //destruturing
    const { id, name, weight, price, img, age } = props.product;
    //font awesome icon
    const cartLocationIcon = <FontAwesomeIcon icon={faLocationArrow} />
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <img className="imgStyle" src={img} alt="" />
            <h3 className="cow-name"> {name}</h3>
            <p> ID: {id}</p>
            <p> Age: {age}</p>
            <p>Weight: {weight}</p>
            <p> price: {price} BDT</p>
            <button onClick={() => props.handleAddToCart(props.product)} className="btn-regular">{cartIcon} Add to cart</button><br />
            <small className="text-style">Location</small>
            <div className="iconStyle">
                {cartLocationIcon}
            </div>
        </div>


    );
};

export default Product;