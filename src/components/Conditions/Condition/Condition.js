import React from 'react'
import './Condition.css'

const Condition = ({num, title, text}) => {
	return (
		<div className='conditions__item'>
			<div className='conditions__num'>{num}</div>
			<h4 className='conditions__item-title title'>
				{title}
			</h4>
			<p className='conditions__item-text'>
				{text}
			</p>
		</div>
	)
}

export default Condition
