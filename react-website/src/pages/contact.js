import React from 'react';
import Navbar from "../components/Navigation/Navbar";
import me from '../images/me.jpg'
import './contact.css'

const Contact = () => {
return (
	<div>
	<Navbar />
	<h1>Hi!</h1> 
	
	<div class="flex-container">
		<div class="flex-child">
			<h2>I'm Rebecca Moroz, a Software Engineering major at Drexel University and the developer of this site!</h2>
		</div>
	
		<div class="flex-child">
			<img src={me} class='center' alt=''></img>
		</div>
	</div>
	</div>
);
};

export default Contact;
