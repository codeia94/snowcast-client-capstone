import './ForecastNav.scss';


//this shows the navigation for the forecast
function ForecastNav() {
	return (
		<div className='forecastNav'>
			<div className='forecastNav-container'>
				<h3 className='forecastNav-container__item currentDay'>TODAY</h3>
				<h3 className='forecastNav-container__item daily'>3 DAY FORECAST</h3>
			</div>
		</div>
	);
}


export default ForecastNav;