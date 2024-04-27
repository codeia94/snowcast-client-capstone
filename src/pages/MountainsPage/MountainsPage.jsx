import axios from 'axios';
import React from 'react';
// import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MountainList from '../../components/MountainList/MountainList';

import './MountainsPage.scss';


function MountainsPage() {
	const { province } = useParams();

	return (
		<div className='mountain'>
			<div className='mountain-container'>
				<h2 className='mountain-container__title'>Ski Mountains</h2>
				<MountainList province={province}/>
				
			</div>
		</div>
	);
}

export default MountainsPage;