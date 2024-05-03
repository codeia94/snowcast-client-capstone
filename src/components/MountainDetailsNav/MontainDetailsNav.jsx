import { NavLink } from 'react-router-dom';
import './MountainDetailsNav.scss';


function MountainDetailsNav () {
	return (
		<div className='componentNav'>
			<div className='componentNav-list'>
				<NavLink className='componentNav-label'>Forecast</NavLink>
				<NavLink className='componentNav-label'>Trail Map</NavLink>
				<NavLink className='componentNav-label'>Cams</NavLink>
			</div>
		</div>
	)
}

export default MountainDetailsNav;