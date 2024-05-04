import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './MountainDetailsNav.scss';


function MountainDetailsNav () {

	const { province } = useParams();

	return (
		<div className='componentNav'>
			<div className='componentNav-list'>
				<NavLink to={`/province/${province}/forecast`} className='componentNav-label'>Forecast</NavLink>
				<NavLink to={`/province/${province}/trailmap`} className='componentNav-label'>Trail Map</NavLink>
				<NavLink to={`/province/${province}/cams`} className='componentNav-label'>Cams</NavLink>
			</div>
		</div>
	)
}

export default MountainDetailsNav;