import './App.css';
import styled from 'styled-components';
import DonorLandingPage from './components/donor/DonorLandingPage';

function App() {
	return (
		<div className="App">
			<HelloWorld>
				<DonorLandingPage />
			</HelloWorld>
		</div>
	);
}

const HelloWorld = styled.div`
	width: 100%;
	height: 100vh;
`;

export default App;
