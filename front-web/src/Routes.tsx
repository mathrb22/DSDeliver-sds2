import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Orders from './Components/Orders/Orders';

function Routes() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route path='/' exact>
					<Home />
				</Route>
				<Route path='/orders'>
					<Orders />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
