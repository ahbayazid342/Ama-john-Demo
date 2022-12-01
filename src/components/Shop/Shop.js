import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './shop.css';

const Shop = () => {
	const [product, setProduct] = useState([]);

	const [cart, setCart] = useState([]);

	useEffect(() => {
		fetch('products.JSON')
			.then((res) => res.json())
			.then((data) => setProduct(data));
	}, []);

	const handleAddCart = (product) => {
		console.log(product);
		setCart([...cart, product]);
	};

	return (
		<div className="shop-container">
			<div className="product-container">
				{product.map((product) => (
					<Product product={product} handleAddCart={handleAddCart}></Product>
				))}
			</div>
			<div className="cart-container">
				<Cart cart={cart}></Cart>
			</div>
		</div>
	);
};

export default Shop;
