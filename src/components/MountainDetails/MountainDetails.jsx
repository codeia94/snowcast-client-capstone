import './MountainDetails.scss';
import ForecastNav from '../ForecastNav/ForecastNav';
import DayForecast from '../DayForecast/DayForecast';

// This shows the nav bar and details of shown mountain
function MountainDetails() {
	return (
		<div className="mountainDetails">
			<div className='mountainDetails-container'>
				<ForecastNav />
				<h4 className='mountainDetails-title'>MountainDetails</h4>
				<DayForecast />
			</div>
			
		</div>
	);
}


export default MountainDetails;