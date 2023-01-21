import './App.css';
import styled from 'styled-components';
import DonorProfile from './components/donor/DonorProfile';

function App() {
	return (
		<div className="App">
			{/* <DonorLandingPage /> */}
			<HelloWorld>
				<DonorProfile />
			</HelloWorld>
		</div>
	);
}

const HelloWorld = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100vh;
	gap: 10px;
`;

export default App;
