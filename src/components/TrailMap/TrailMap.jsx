import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './TrailMap.scss';


function TrailMap () {

	const { province } = useParams();
	const [ trailMaps, setTrailMaps ] = useState([]);
	const [ selectedMapImage, setSelectedMapImage ] = useState('');

	useEffect(() => {
		const fetchTrailMaps = async () => {
			const response = await axios.get(`https://snowcast-server-df25b44e24b0.herokuapp.com/api/trailmap/province/${province}`);
			setTrailMaps(response.data);
		};
		fetchTrailMaps();
	},[province]);

	const downloadImage = async (url) => {
		const response = await fetch(url);
		const blob = await response.blob();
		const urlBlob = window.URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = urlBlob;
		link.download = url.split('/').pop();
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
};


	return (
		<div className='trailMap'>
			<div className='trailMap-container'>
				{trailMaps.map((trailMap) => {
					const trailMapImageUrl = `https://snowcast-server-df25b44e24b0.herokuapp.com/trailmaps/${trailMap.trailmap}`;
					return(
						<div className='trailMap-card' key={trailMap.id}>
							<img 
								src={trailMapImageUrl} 
								alt='trail map'
								className='trailMap-card__image' 
								onClick={() => setSelectedMapImage(trailMapImageUrl)}
							/>
							<a href="#" 
								onClick={(e) => { e.preventDefault(); 
									downloadImage(trailMapImageUrl); }} 
									className='trailMap-download'>
										Click to download
							</a>						
						</div>
					);
				})}
				{selectedMapImage && (
          <div className="modal" onClick={() => setSelectedMapImage(null)}>
            <img src={selectedMapImage} alt='download-img' className="modal-image" />
          </div>
        )}
			</div>
		</div>
	)
}


export default TrailMap;