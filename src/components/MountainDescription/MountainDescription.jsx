import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './MountainDescription.scss';

function MountainDescription() {

	const [ mountainDescription, setMountainDescription ] = useState('');
	const [ liveCam, setLiveCam ] = useState('');
	const { id } = useParams();

	useEffect(() => {
		const fetchMountainDescription = async () => {
			try {
				const response = await axios.get(`http://localhost:8080/api/mountain/mountain/${id}`);
				setMountainDescription(response.data);
				console.log(response.data);
			} catch (error) {
				console.error('Error fetching mountain description:', error);
			}
		};
		fetchMountainDescription();
	}, [id])

	useEffect(() => {
		const fetchLiveCam = async () => {
			try {
				const response = await axios.get(`http://localhost:8080/api/livecam/${id}`);
				setLiveCam(response.data[0]);
				console.log(response.data[0]);
			} catch (error) {
				console.error('Error fetching live cam:', error);
			}
		}
		fetchLiveCam();
	}, [id])

	const {name, description, img} = mountainDescription;
	const {cam_url, title} = liveCam;

	return (
		<div className='mountainDescription'>
			<div className='mountainDescription-image'>
				<img 
					src={`http://localhost:8080/images/${img}`} 
					className='mountainDescription-image__img' 
					alt={name}
				/>
				<div className='mountainDescription-image__overlay'>
					<h2 className='mountainDescription-image__overlay-name'>{name}</h2>
					<p className='mountainDescription-image__overlay-description'>{description}</p>
				</div>
			</div>
			{cam_url ? (
				<div className='mountainDescription-cam'>
					<iframe 
						className='mountainDescription-cam__iframe'
						title={title} 
						src={cam_url}
						frameBorder='0' 
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' 
						allowFullScreen
					></iframe>
				</div>
			): null}
		</div>
	);

}

export default MountainDescription;