import React from 'react';

const Cart = (props) => {
	// const total = props.cart.reduce((total, prd) => total + prd.price, 0);

	let total = 0;

	for (let i = 0; i < props.cart.length; i++) {
		let pro = props.cart[i];
		total += pro.price;
	}

	return (
		<div>
			<h3>This is Cart </h3>
			<p>Order summary : {props.cart.length} </p>
			<p>Total Price : {total}</p>
		</div>
	);
};

export default Cart;
