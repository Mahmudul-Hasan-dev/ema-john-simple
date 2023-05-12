import React from 'react';
import './Cart.css'
const Cart = (props) => {
    // console.log(props)
    const { cart, name } = props
    // console.log(props)
    let total = 0;
    let totalShiping = 0;
    let quantity = 0;
    for (const product of cart) {
        // console.log(product)
        //set product quantity to 1 to multiply with price
        product.quantity = product.quantity || 1;

        total = total + product.price * product.quantity;
        totalShiping = totalShiping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = total * 7 / 100
    const gtotal = total + totalShiping + tax
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <h4>cart display here:{quantity}</h4>
            <p>Total Price:{total}$</p>
            <p>Total Shipping:{totalShiping}$</p>
            <p>Tax:{tax.toFixed(2)}$</p>
            <h6>Grand Total:{gtotal.toFixed(2)}$</h6>
            <div className='cart-display'>
                <h4>Product Name:{name}</h4>
            </div>
        </div>

    );
};

export default Cart;