import React from 'react';
import { useParams } from 'react-router-dom';
import MountainList from '../../components/MountainList/MountainList';

import './MountainsPage.scss';

function MountainsPage() {
	const { province } = useParams();

	return (
		<div className='mountain'>
			<div className='mountain-container'>
				<MountainList province={province}/>
			</div>
		</div>
	);
}

export default MountainsPage;