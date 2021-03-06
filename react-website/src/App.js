import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Movies from './pages/movies';
import Contact from './pages/contact';

function App() {
return (
	<Router>
	<Routes>
		<Route exact path='/' element={<Home />} />
		<Route path='/about' element={<About/>} />
		<Route path='/contact' element={<Contact/>} />
		<Route path='/movies' element={<Movies/>} />
	</Routes>
	</Router>
);
}

export default App;
