import './App.css';
import styled from 'styled-components';
import LoginForm from './components/common/login/LoginForm';
import BackgroundTemplate from './components/common/BackgroundTemplate';
import SideNavigation from './components/common/SideNavigation';

function App() {
	return (
		<div className="App">
			<SideNavigation />
		</div>
	);
}

const HelloWorld = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 100vh;
	gap: 10px;
`;

export default App;
