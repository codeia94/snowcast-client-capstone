import MountainDetailsNav from '../../components/MountainDetailsNav/MontainDetailsNav';
import LiveCam from '../../components/LiveCam/LiveCam';
import './LiveCamPage.scss';


function LiveCamPage({ province }) {
	return (
		<div className='page-flex'>
			<div className='liveCamPage'>
				<img 
					src='https://images.unsplash.com/photo-1571770991109-c9422d54690e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='mountain banner' 
					className='liveCamPage-image'
				/>
			</div>
			<MountainDetailsNav />
			<div className='liveCamPage-container'>
				{/* <h1>Live Cam Page</h1> */}
			</div>
			<LiveCam province={province}/>
		</div>
	);
}

export default LiveCamPage;