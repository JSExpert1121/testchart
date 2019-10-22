import React from 'react';
import logo from './logo.svg';
import CustomChart from './CustomChart';
import './App.css';


function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
			</header>
			<main>
				<CustomChart />
			</main>
		</div>
	);
}

export default App;
