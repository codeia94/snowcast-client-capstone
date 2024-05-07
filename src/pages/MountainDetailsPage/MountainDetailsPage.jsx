import { useParams } from 'react-router-dom';
import './MountainDetailsPage.scss';
import MountainDetailsNav from '../../components/MountainDetailsNav/MontainDetailsNav';
import MountainDetails from '../../components/MountainDetails/MountainDetails';

function MountainDetailsPage () {
	const { id, province } = useParams();

	return (
		<div>
			<div className='mountainBanner'>
				<img 
					src='https://images.unsplash.com/photo-1571770991109-c9422d54690e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='mountain banner' 
					className='mountainBanner-image'
				/>					
			</div>
			<div className='mountainBanner-title'>
			</div>
			<MountainDetailsNav />
			<MountainDetails id={id} province={province}/>
		</div>
	)
}


export default MountainDetailsPage;