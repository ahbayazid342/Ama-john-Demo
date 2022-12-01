import React from 'react';
import './product.css';

const Product = (props) => {
	const { img, name, seller, price, stock } = props.product;

	return (
		<div className="product">
			<div className="img">
				<img src={img} alt="" />
			</div>
			<div className="info">
				<h3 className="pro-name">{name}</h3>
				<p>
					<small>by : {seller}</small>
				</p>
				<p>$ {price}</p>
				<p>
					<small>Only {stock} left in stock - order soon</small>
				</p>
				<button
					className="mainbtn"
					onClick={() => props.handleAddCart(props.product)}
				>
					Add to cart
				</button>
			</div>
		</div>
	);
};

export default Product;
