import Home from "./home/screens/home";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch({ type: 'GET_THEME' });
	}, []);
	return (
		<Home />
	);
}

export default App;
