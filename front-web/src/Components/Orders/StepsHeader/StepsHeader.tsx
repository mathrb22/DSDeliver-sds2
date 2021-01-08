import './stepsheader.css';

function StepsHeader() {
	return (
		<header className='orders-steps-container'>
			<div className='orders-steps-content'>
				<h1 className='steps-title'>Siga as etapas</h1>
				<ul className='steps-items'>
					<li>
						<span className='steps-number'>1</span>
						Selecione os produtos e seu endereço de entrega.
					</li>
					<li>
						<span className='steps-number'>2</span>
						Clique em <b>"FINALIZAR PEDIDO"</b>
					</li>
				</ul>
			</div>
		</header>
	);
}

export default StepsHeader;
