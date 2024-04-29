import './DayForecast.scss';


//this shows the day forecast
function DayForecast() {
	return (
		<div className='dayForecast'>
			<div className='dayForecast-container'>
				<h3 className='dayForecast-container__item day'>TODAY</h3>
				<div className='dayForecast-container__item weather'>
					<h4 className='weather__title'>Weather</h4>
					<p className='weather__description'>Sunny</p>
				</div>
				<div className='dayForecast-container__item temperature'>
					<h4 className='temperature__title'>Temperature</h4>
					<p className='temperature__description'>-1°C</p>
				</div>
				<div className='dayForecast-container__item wind'>
					<h4 className='wind__title'>Wind</h4>
					<p className='wind__description'>10 km/h</p>
				</div>
				<div className='dayForecast-container__item snow'>
					<h4 className='snow__title'>Snow</h4>
					<p className='snow__description'>0 cm</p>
				</div>
			</div>
		</div>
	);
}


export default DayForecast;