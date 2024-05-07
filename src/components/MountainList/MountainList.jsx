import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './MountainList.scss';


function MountainList() {

	const [ mountains, setMountains ] = useState([]);
	const { province } = useParams();

	useEffect(() => {
		const fetchMountains = async () => {
			const response = await axios.get(`http://localhost:8080/api/province/${province}`);
			setMountains(response.data);
		};
		fetchMountains();
	},[province]);

	return (
		<div className='mountains'>
			<div className='mountains-container'>
				{mountains.map((mountain) => {
					const mountainsImageUrl = `http://localhost:8080/images/${mountain.img}`;
					return(
						<Link
							to={`/province/${province}/${mountain.id}`}
							className='mountains-card__link' 
							key={mountain.id}
							style={{ backgroundImage: `url(${mountainsImageUrl})`}}>
							<div className='mountains-card'>
							<h3 className='mountains-card__name'>{mountain.name}</h3>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
}


export default MountainList;