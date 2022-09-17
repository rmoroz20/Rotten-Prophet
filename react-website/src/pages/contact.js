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
			<div class="intro-div">
				<h2>I'm Rebecca Moroz, a Software Engineering major at Drexel University and the developer of this site!</h2>
				<div class="arrow">
					<h2>This is me enjoying some mango water ice! -----{">"}</h2>
					<h3>(which I love almost as much as bad movies)</h3>
				</div>

				<div class="contact-info">
					<h2>Feel free to contact me at rebeccamoroz02@gmail.com with any questions or issues.</h2>
					<h3>Suggestions are always welcome!</h3>
				</div>
			
			</div>

			<div class="img-div">
				<img src={me} alt=''></img>
			</div>

		
			
		</div>

	</div>
);
};

export default Contact;
