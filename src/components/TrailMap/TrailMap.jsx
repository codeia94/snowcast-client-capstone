import { useEffect, useState } from 'react';
import axios from 'axios';
import './TrailMap.scss';


function TrailMap () {

	const [ trailMaps, setTrailMaps ] = useState([]);
	const [ selectedMapImage, setSelectedMapImage ] = useState('');

	useEffect(() => {
		const fetchTrailMaps = async () => {
			const response = await axios.get('http://localhost:8080/api/trailmap');
			setTrailMaps(response.data);
			console.log(response.data);
		};
		fetchTrailMaps();
	},[]);

	return (
		<div className='trailMap'>
			<div className='trailMap-container'>
				<div className='trailMap-container__name'>
					<h2>Trail Maps</h2>
				</div>
				{trailMaps.map((trailMap) => {
					const trailMapImageUrl = `http://localhost:8080/trailmaps/${trailMap.trailmap}`;
					// console.log(trailMapImageUrl);
					return(
						<div className='trailMap-card' key={trailMap.id}>
							{/* <p className='trailMao-card__mountain'>{trailMap}</p> */}
							<img 
								src={trailMapImageUrl} 
								alt='trail map'
								className='trailMap-card__image' 
								onClick={() => setSelectedMapImage(trailMapImageUrl)}
							/>
						</div>
					);
				})}
				{selectedMapImage && (
          <div className="modal" onClick={() => setSelectedMapImage(null)}>
            <img src={selectedMapImage} className="modal-image" />
          </div>
        )}
			</div>
		</div>
	)
}


export default TrailMap;