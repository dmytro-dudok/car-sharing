import React from 'react'
import { useSelector } from 'react-redux'
import Menu from '../Menu/Menu'
import './Modal.css'

const Modal = () => {
	const isModalOpen = useSelector((state) => state.isModalOpen)
	console.log(isModalOpen)
	return (
		<div className={`${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}`}>
			<Menu />
		</div>
	)
}

export default Modal
