import './ProvincePage.scss';


function ProvincePage() {
	return (
		<div className='province'>
			<h2 className='province-title'>Provinces</h2>
			<div className='province-container'>
				<div className='province-card'>
					<h3 className='province-card__name'>British Columbia</h3>
					<p className='province-card__details'>British Columbia is home to some of the best skiing in the world.</p>
				</div>
				{/* <div className='province-card'>
					<h3 className='province-card__name'>Alberta</h3>
					<p className='province-card__details'>Alberta is home to the Canadian Rockies and some of the best skiing in Canada.</p>
				</div>
				<div className='province-card'>
					<h3 className='province-card__name'>Ontario</h3>
					<p className='province-card__details'>Ontario is home to a number of ski resorts, including Blue Mountain and Horseshoe Valley.</p>
				</div>
				<div className='province-card'>
					<h3 className='province-card__name'>Quebec</h3>
					<p className='province-card__details'>Quebec is home to a number of ski resorts, including Mont Tremblant and Mont Sainte Anne.</p>
				</div>
				<div className='province-card'>
					<h3 className='province-card__name'>Nova Scotia</h3>
					<p className='province-card__details'>Nova Scotia is home to Ski Wentworth, one of the best ski resorts in the Maritimes.</p>
				</div> */}
			</div>
		</div>
	);
}


export default ProvincePage;