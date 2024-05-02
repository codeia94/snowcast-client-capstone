import { useParams } from 'react-router-dom';
import './MountainDetails.scss';
import ForecastNav from '../ForecastNav/ForecastNav';
// import DayForecast from '../DayForecast/DayForecast';
import DailyForecast from '../DailyForecast/DailyForecast';

// This shows the nav bar and details of shown mountain
function MountainDetails() {
	const { id, province } = useParams();

	return (
		<div className="mountainDetails">
			<div className='mountainDetails-container'>
				<ForecastNav />
				<DailyForecast id={id}/>
				{/* <h4 className='mountainDetails-title'>MountainDetails</h4> */}
				{/* <DayForecast id={id} province={province}/> */}
			</div>
			
		</div>
	);
}


export default MountainDetails;