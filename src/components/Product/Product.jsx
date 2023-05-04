import React from 'react';
import './Product.css'
const Product = (props) => {
    // console.log(props.product)
    const { name, img, price, seller, ratings
    } = props.product;

    const handleaddtoCart = props.handleAddtoCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4 className='product-name'>Name:{name}</h4>
                <p>Price:${price}</p>
                <p>Seller:{seller}</p>
                <p>Ratings:{ratings} stars</p>
            </div>
            <button onClick={() => handleaddtoCart(props.product)} className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;