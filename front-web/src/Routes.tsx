import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Orders from './Components/Orders/Orders';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';

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
				<Route component={NotFound} />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default Routes;
