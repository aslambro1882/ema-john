import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [displayProducts, setDisplayProducts] = useState([])
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
            });
    }, [])
    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct)
                }

            }
            setCart(storedCart);
        }
    }, [products])
    const handlePurchase = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.key)

    }
    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayProducts(matchedProducts);
        console.log(matchedProducts.length);
    }
    return (
        <div>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="search here"
                    onChange={handleSearch} />
            </div>
            <div className="shop">
                <div className="products">
                    {
                        displayProducts.map(product => <Products
                            handlePurchase={handlePurchase}
                            key={product.key}
                            product={product} />)
                    }

                </div>
                <div>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;