import { useParams } from 'react-router-dom';
import { useState } from 'react';
import './MountainDetails.scss';
import DayForecast from '../DayForecast/DayForecast';
import DailyForecast from '../DailyForecast/DailyForecast';
import MountainListLabel from '../MountainListLabel/MountainListLabel';
import MountainDescription from '../MountainDescription/MountainDescription';
// This shows the nav bar and details of shown mountain
function MountainDetails() {
	const { id, province } = useParams();
	const [ showDaily, setShowDaily ] = useState(false);

	return (
		<div className="mountainDetails">
			<div className='mountainDetails-container'>
				<div className='forecastNav'>
					<MountainListLabel province={province}/>
					<MountainDescription id={id} />
					<div className='forecastNav-container'>
						<button className='forecastNav-container__item currentDay'  onClick={() => setShowDaily(false)} >
							<h4 className='forecastNav-container__item-title'>TODAY</h4>
						</button>
						<button className='forecastNav-container__item daily' onClick={() => setShowDaily(true)}>
							<h4 className='forecastNav-container__item-title'>5 DAY FORECAST</h4>
						</button>
					</div>
				</div>
				{showDaily ? 
					(<DailyForecast id={id} className='toggle-dailyForecast'/>) :
					(<DayForecast id={id} className='toggle-dayForecast' />)
				}
			</div>
			
		</div>
	);
}


export default MountainDetails;