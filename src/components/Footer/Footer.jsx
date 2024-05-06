import { useState } from 'react';
import Swal from 'sweetalert2';
import './Footer.scss';


function Footer () {

	const [ email, setEmail ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(`Email for newsletter: ${email}`);
		setEmail('');

		Swal.fire({
			title: 'Sweet!',
			text: 'Thank you for subscribing to our newsletter!',
			imageUrl: 'https://i.kym-cdn.com/entries/icons/facebook/000/023/077/Leo_Toasting_meme_banner.jpg',
			imageWidth: 400,
			imageHeight: 200,
			imageAlt: 'Custom image'
		});
	}

	return (
		<footer>
			<div className='footer-content'>
				<div className='footer-content__form'>
					<form 
						className='footer-content__form'
						onSubmit={handleSubmit}
						>
					
						<label 
							htmlFor='email' 
							className='footer-content__form-label'>
								Get the freshest snow reports!
						</label>	
						<div className='footer-content__form-container'>
							<input 
								className='footer-content__form-container__input' 
								type='email' 
								id='email' 
								name='email' 
								value={email}
								onChange={e => setEmail(e.target.value)}
								placeholder='Enter your email' 
							/>
							<button 
								type='submit' 
								className='footer-content__form-container__button'
								>
									Subscribe
							</button>
						</div>
					</form>
				</div>
		
				<p className='footer-content__footer'>© 2024 SnowCast. All Rights Reserved.</p>
			</div>
		</footer>
	)
}

export default Footer;