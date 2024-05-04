import './Header.scss';


function Header () {
	return (
		<header>
			<div className='header-content'>
				<h1 className='header-content__title'>SNOWCAST</h1>
				<div className='header-content__container'>
					<div className='header-content__prov'>
						<h2>AB</h2>
						<hr></hr>
						<h2>BC</h2>
					</div>
					<div className='header-content__country'>
						<h2>CA</h2>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header;