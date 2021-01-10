import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Routes from './Routes';

function App() {
	return (
		<>
			<Routes />
			<ToastContainer position='bottom-right' />
		</>
	);
}

export default App;
