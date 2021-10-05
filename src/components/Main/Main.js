import React from 'react'
import Benefits from '../Benefits/Benefits'
import Conditions from '../Conditions/Conditions'
import Questions from '../Questions/Questions'
import Reviews from '../Reviews/Reviews'
import Top from '../Top/Top'

import './Main.css'

const Main = () => {
	return (
		<main>
			<Top />
			<Conditions />
			<Benefits />
			<Reviews />
			<Questions />
		</main>
	)
}

export default Main
