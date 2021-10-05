import React from 'react'
import './Social.css'
import facebook from '../../images/facebook.svg'
import instagram from '../../images/instagram.svg'
import youtube from '../../images/youtube.svg'

const socials = [
	{
		id: 1,
		logo: facebook,
	},
	{
		id: 2,
		logo: instagram,
	},
	{
		id: 2,
		logo: youtube,
	},
]

const Social = ({ className }) => {
	return (
		<div className={`socials ${className}`}>
			{socials.map(({ id, logo }) => {
				return (
					<img
						key={id}
						src={logo}
						alt='logo'
						className='social-icon'
					/>
				)
			})}
		</div>
	)
}

export default Social
