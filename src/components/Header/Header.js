import React, { useState } from 'react'
import logo from '../../images/logo.svg'
import Menu from '../Menu/Menu'
import Burger from '../Burger/Burger'
import './Header.css'

const Header = () => {
   
	return (
		<header className='header'>
			<div className='container'>
				<div className='header__inner'>
					<a className='header__logo logo' href='#'>
						<img className='logo__image' src={logo} alt='logo' />
					</a>
					<Menu />
                    <a className="header__phone" href="tel:+380999999090" >+38 (099) 999 90 90</a>
                    <Burger />
				</div>
			</div>
		</header>
	)
}

export default Header
