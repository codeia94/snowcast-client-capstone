import './ForecastNav.scss';


//this shows the navigation for the forecast
function ForecastNav() {
	return (
		<div className='forecastNav'>
			<div className='forecastNav-container'>
				<div className='forecastNav-container__item currentDay'>
					<h4 className='forecastNav-container__item-title'>TODAY</h4>
				</div>
				<div className='forecastNav-container__item daily'>
					<h4 className='forecastNav-container__item-title'>3 DAY FORECAST</h4>
				</div>
			</div>
		</div>
	);
}


export default ForecastNav;