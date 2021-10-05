import React from 'react'
import DownloadBtn from '../DownloadBtn/DownloadBtn'
import Menu from '../Menu/Menu'
import Social from '../Social/Social'
import './Footer.css'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer__inner'>
					<DownloadBtn>Скачать приложение</DownloadBtn>
					<Menu className='footer__menu' />
					<a href='tel:+380999999090' className='footer__phone'>
						+38 (099) 999 90 90
					</a>
					<Social className='footer__socials' />
				</div>
			</div>
		</footer>
	)
}

export default Footer
