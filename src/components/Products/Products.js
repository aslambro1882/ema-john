import React from 'react';
import './Products.css'

const Products = (props) => {
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product-grid">
            <div>

            </div>
            <div className="product">
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h4>{name}</h4>
                    <small>by: {seller}</small>
                    <div className="lower-info">
                        <div>
                            <p>${price}</p>
                            <small>only {stock} left in stock - order soon</small>
                        </div>
                        <div>

                            <h4>Features</h4>
                        </div>
                    </div>
                    <div className="button-regular">
                        <button onClick={() => props.handlePurchase(props.product)}>add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;