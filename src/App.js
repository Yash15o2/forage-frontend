import './App.css';
import { routes, titles } from './routes';
import { useLocation, useRoutes } from 'react-router';
import { useEffect } from 'react';

function useTitle() {
	let location = useLocation();
	useEffect(() => {
		const title = titles[location.pathname.toLowerCase()];
		document.title = title ? title : 'Page 404';
		window.scrollTo(0, 0);
	}, [location]);
}

function App() {
	useTitle();
	const element = useRoutes(routes);
	return <div className="App">{element}</div>;
}

export default App;
