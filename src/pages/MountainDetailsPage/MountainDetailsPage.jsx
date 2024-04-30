import { useParams } from 'react-router-dom';

import './MountainDetailsPage.scss';
import MountainDetails from '../../components/MountainDetails/MountainDetails';


//This page shows the banner, navigation and details of chosen mountain
function MountainDetailsPage () {
	const { id } = useParams();

	return (
		<div>
			<div className='mountainBanner'>
				<img src='https://images.unsplash.com/photo-1571770991109-c9422d54690e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='mountain banner' className='mountainBanner-image'/>
			</div>
			<div className='mountainBanner-title'>

			</div>
			<MountainDetails id={id}/>
		</div>
	)
}


export default MountainDetailsPage;