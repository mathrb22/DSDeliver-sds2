import './navbar.css';
import { ReactComponent as Logo } from './logo-deliver.svg';

function Navbar() {
	return (
		<nav className='main-navbar'>
			<a href='home'>
				<Logo />
			</a>
			<a href='home' className='logo-text'>
				DSDeliver
			</a>
		</nav>
	);
}

export default Navbar;
