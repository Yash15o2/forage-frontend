import './App.css';
import styled from 'styled-components';

function App() {
	return (
		<div className="App">
			<HelloWorld>Hello World</HelloWorld>
		</div>
	);
}

const HelloWorld = styled.p`
	font-family: ${(props) => props.theme.fonts.green};
	color: ${(props) => props.theme.colors.green};
`;
export default App;
