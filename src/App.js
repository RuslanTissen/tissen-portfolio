import './App.css';
import Background from './components/background/Background';
import Facts from './components/facts/Facts';
import Header from './components/header/Header';
import Links from './components/links/Links';

function App() {
	return (
		<div className="App">

			<Header />

			<Background />

			<Links />

			<Facts/>

		</div>
	);
}

export default App;
