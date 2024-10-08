import Flag from 'react-world-flags';
import { Link } from 'react-router-dom';
import './Header.scss';
import React from 'react';
import { ReactComponent as Logo } from '../../Assets/Icons/snowflake-svgrepo-com.svg';


function Header () {
	return (
		<header>
			<div className='header-content'>
				<Link to={`/`} className='header-content__title-link'>
					<h1 className='header-content__title'>SN<Logo className='header-icon'/>WCAST
					</h1>
				</Link>
				<div className='header-content__container'>
					<div className='header-content__prov'>
						<Link to={`/province/AB`} className='header-content__prov-item'>AB</Link>
						<hr></hr>
						<Link to={`/province/BC`} className='header-content__prov-item'>BC</Link>
					</div>
					<div className='header-content__country'>
						<Flag code="CA" height="16" /></div>
				</div>
			</div>
		</header>
	)
}

export default Header;