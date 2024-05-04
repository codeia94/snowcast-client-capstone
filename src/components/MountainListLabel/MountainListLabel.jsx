import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './MountainListLabel.scss';

function MountainListLabel() {

	const { province } = useParams();
	const [ showMountainList, setShowMountainList ] = useState('');
	const [ isLoading, setIsLoading ] = useState(true);

	useEffect(() => {
		const fetchMountainLabel = async () => {
			try {
				const response = await axios.get(`http://localhost:8080/api/province/${province}`);
				setShowMountainList(response.data);
				setIsLoading(false);
				console.log(response.data);
			} catch (error) {
				console.error('Error fetching mountain data:', error);
			}
		}
		fetchMountainLabel();
	}, [province]);

	if (isLoading) {
		return <div>Loading...</div>
	}

	return (
		<div className='mountainListLabel'>
			{showMountainList.map((mountain) => (
				<div key={mountain.id} className='mountainListLabel-list'>
					<NavLink to={`/province/${province}/${mountain.id}`} className='mountainListLabel-list__item'>{mountain.name}</NavLink>
				</div>
			))}
		</div>
	);
}

export default MountainListLabel;