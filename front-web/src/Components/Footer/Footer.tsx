import './footer.css';
import { red } from '@material-ui/core/colors';
import { YouTube, LinkedIn, Instagram, GitHub } from '@material-ui/icons';

function Footer() {
	return (
		<>
			<footer className='main-footer'>
				<div className='footer-content'>
					<p>
						App desenvolvido durante a 2ª edição do evento <b>Semana DevSuperior</b>
					</p>
					<div className='footer-icons'>
						<a
							href='https://www.youtube.com/c/DevSuperior'
							target='_blank'
							rel='noreferrer'>
							<YouTube style={{ color: red[400], fontSize: 35 }} />
						</a>
						<a
							href='https://www.linkedin.com/school/devsuperior/'
							target='_blank'
							rel='noreferrer'>
							<LinkedIn style={{ color: red[400], fontSize: 35 }} />
						</a>
						<a
							href='https://www.instagram.com/devsuperior.ig/'
							target='_blank'
							rel='noreferrer'>
							<Instagram style={{ color: red[400], fontSize: 35 }} />
						</a>
					</div>
				</div>
				<div className='footer-bottom'>
					<p>&#169; 2021 - Matheus Ribeiro</p>
					<div className='footer-icons'>
						<a
							href='https://github.com/mathrb22/DSDeliver-sds2'
							target='_blank'
							rel='noreferrer'>
							<GitHub style={{ color: red[400], fontSize: 30 }} />
						</a>
						<a
							href='https://www.linkedin.com/in/matheus-ribeiro-dev/'
							target='_blank'
							rel='noreferrer'>
							<LinkedIn style={{ color: red[400], fontSize: 35 }} />
						</a>
					</div>
				</div>
			</footer>
		</>
	);
}
export default Footer;
