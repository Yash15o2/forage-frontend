import './App.css';
import styled from 'styled-components';
import Rate from './components/common/Rate';

function App() {
	return (
		<div className="App">
			<HelloWorld>
				<Rate />
			</HelloWorld>
		</div>
	);
}

const HelloWorld = styled.div`
	display: flex;
	gap: 10px;
`;

export default App;
