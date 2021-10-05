import React, { useState, useEffect } from 'react'
import './Burger.css'
import { useDispatch, useSelector } from 'react-redux'

function Burger() {
	const dispatch = useDispatch()
	const isModalOpen = useSelector(state => state.isModalOpen)
	
	// const [isMenuBtnActive, setIsMenuBtnActive] = useState(false)
	// const handleClick = () => {
	// 	setIsMenuBtnActive(prevState => !prevState )
	// }

		// useEffect(() => {
	// 	dispatch({ type: `${isMenuBtnActive ? 'OPEN_MODAL' : 'CLOSE_MODAL'}`})
	// }, [isMenuBtnActive]);	
	return (
		<button
			className={`menu__btn ${
				isModalOpen ? 'menu__btn--active' : ''
			}`}
			onClick={() => dispatch({ type: 'TOGGLE_MODAL', payload: !isModalOpen})}
		>
			<span className='menu__btn-line'></span>
		</button>
	)
}

export default Burger

