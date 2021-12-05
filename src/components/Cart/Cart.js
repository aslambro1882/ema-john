import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        product.quantity = !product.quantity ? 1 : product.quantity;
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity
    }
    const shipping = total * .06;
    const tbt = shipping + total;
    const eTax = tbt * .1;
    const fTotal = eTax + tbt;
    return (
        <div className="cart">
            <h3>Order Summary</h3>
            <p>Items ordered: {totalQuantity}</p>
            <table>
                <tbody>
                    <tr>
                        <td>Items:</td>
                        <td>${total.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Shipping & Handling: </td>
                        <td>${shipping.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Total before tax:</td>
                        <td>${tbt.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Estimated Tax:</td>
                        <td>${eTax.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Order Total:</td>
                        <td>${fTotal.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Cart;