import './App.css';
import Background from './components/background/Background';
import Facts from './components/facts/Facts';
import Header from './components/header/Header';
import Links from './components/links/Links';
import Things from './components/things/Things.jsx';

function App() {
	return (
		<div className="App">

			<Header />

			<Background />

			<Links />

			<Facts/>

			<Things/>

		</div>
	);
}

export default App;
