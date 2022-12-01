import React from 'react';
import logo from '../../images/logo.png';
import './header.css';

const Header = () => {
	return (
		<div className="header">
			<img src={logo} alt="logo" />
			<nav>
				<a href="/shop"> Shop</a>
				<a href="/review">Review</a>
				<a href="/manage"> Management</a>
			</nav>
		</div>
	);
};

export default Header;
