import MountainDetailsNav from '../../components/MountainDetailsNav/MontainDetailsNav';
import MountainsForecast from '../../components/MountainsForecast/MountainsForecast';
import './ForecastPage.scss';

function ForecastPage() {
	return (
		<div>
			<div className='mountainBanner'>
				<img 
					src='https://images.unsplash.com/photo-1571770991109-c9422d54690e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='mountain banner' 
					className='mountainBanner-image'
				/>					
			</div>
			<MountainDetailsNav />
			<MountainsForecast />
		</div>
	);
}

export default ForecastPage;


//http://localhost:8080/api/mountain/province/BC