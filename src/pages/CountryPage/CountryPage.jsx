import { Link } from 'react-router-dom';
import './CountryPage.scss';
import USA from '../../Assets/Images/usa-mountains.webp';
import CA from '../../Assets/Images/ca-mountains.jpeg';

function CountryPage() {


	return (
		<div className='country'>
			<div className='country-container'>
				<Link to={`/province`} className='country-card ca-card'>
					<div className='country-card__title'>
						<h1 className='country-card__title-name'>Canada</h1>
					</div>
				</Link>
				<Link className='country-card usa-card'>
					<div className='country-card__title'>
						<h1 className='country-card__title-name'>USA</h1>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default CountryPage;