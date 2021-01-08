import './navbar.css';
import { ReactComponent as Logo } from './logo-deliver.svg';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<nav className='main-navbar'>
			<Link to='/'>
				<Logo />
			</Link>
			<Link to='/' className='logo-text'>
				DSDeliver
			</Link>
		</nav>
	);
}

export default Navbar;
