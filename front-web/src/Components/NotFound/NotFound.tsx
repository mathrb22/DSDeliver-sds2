import './notfound.css';
import { Link } from 'react-router-dom';

function NotFound() {
	return (
		<div className='not-found-container'>
			<div className='not-found-content'>
				<div className='not-found-image'></div>
				<div className='not-found-actions'>
					<h1 className='not-found-code'>404</h1>
					<h2 className='not-found-text'>Oops! Essa página não foi encontrada.</h2>
					<Link to='/' className='home-btn'>
						Voltar para o início
					</Link>
				</div>
			</div>
		</div>
	);
}

export default NotFound;
