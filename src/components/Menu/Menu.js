import React from 'react'
import './Menu.css'

const menu = [
	{ title: 'О НАС', link: '#about' },
	{ title: 'АВТОПАРК', link: '#fleet' },
	{ title: 'ОТЗЫВЫ', link: '#reviews' },
	{ title: 'УСЛОВИЯ', link: '#conditions' },
	{ title: 'КОНТАКТЫ', link: '#contacts' },
]

function Menu({ className }) {
	return (
		<nav className={`menu ${className}`}>
			<ul className='menu__list'>
				{menu.map((item, index) => {
					const { title, link } = item
					return (
						<li key={index} className='menu__list-item'>
							<a href={link} className='menu__list-link'>
								{title}
							</a>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}

export default Menu
