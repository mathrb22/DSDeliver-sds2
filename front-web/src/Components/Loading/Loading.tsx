import { PulseLoader } from 'react-spinners';
import './loading.css';

type Props = {
	message: string;
};

function Loading({ message }: Props) {
	return (
		<>
			<div className='loading-container'>
				<div className='loading-content'>
					<PulseLoader size={14} color='#DA5C5C' />
					<span className='loading-message'>{message}</span>
				</div>
			</div>
		</>
	);
}

export default Loading;
