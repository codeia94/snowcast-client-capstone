import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import './LiveCam.scss';


function LiveCam() {

	const [ liveCam, setLiveCam ] = useState([]);
	const { province } = useParams();

	useEffect(() => {
		const fetchLiveCam = async () => {
			try {
				const response = await axios.get(`http://localhost:8080/api/livecam/province/${province}`);
				setLiveCam(response.data);
				console.log(response.data); 
				console.log(liveCam);
			} catch (error) {
				console.error('Error fetching live cam:', error);
			}
		};
		fetchLiveCam();
	}, [province]);

		

	return (
		<div className='liveCam'>
			<div className='liveCam-container'>
				{liveCam.map((cam) => (
					cam.cam_url && (
						<div className='liveCam-videoWrapper' key={cam.id} >	
							<h4 className='liveCam-videoWrapper__title'>{cam.title}</h4>
							<iframe className='liveCam-videoWrapper__video'
								// width="560" 
								// height="315"
								src={cam.cam_url}
								title={cam.title}
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								referrerPolicy="strict-origin-when-cross-origin" 
								allowFullScreen>
							</iframe>
						</div>
					)
				))}
					
			</div>
		</div>
	);
}


export default LiveCam;