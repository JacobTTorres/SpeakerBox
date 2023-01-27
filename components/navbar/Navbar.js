import React from 'react';
import './navbar.css';

export default function Navbar() {
	return (
		<div className="navbarContainer">
			<img
				src="https://img.pagecloud.com/kr7t4gmDzcvkLiXWsgpwjSWjf8M=/272x0/filters:no_upscale()/rays-website-3454/White-Logo-l382f.png"
				alt="Logo"
				className="navLogo"
			/>

			<div className="buttons">
				<button className="navBtn">About</button>
				<button className="navBtn">Services</button>
				<button className="navBtn">Pricing</button>
				<div className="login">
					<button className="loginBtn">Log In</button>
					<button className="callBtn">(713) 510-3478</button>
				</div>
			</div>
		</div>
	);
}
