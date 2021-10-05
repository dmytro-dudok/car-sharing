import React, { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'
import topCar from '../../images/top-bg.png'
import benefitsCar from '../../images/benefits-car.png'
import topDot from '../../images/top-dot.svg'
import arrowLeft from '../../images/arrow-left.svg'
import arrowRight from '../../images/arrow-right.svg'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './Slider2.css'

const cars = [
	{
		id: 1,
		car: topCar,
		text: ['4 грн/мин', '5 мест', '50 тыс. км пробег'],
	},
	{
		id: 2,
		car: benefitsCar,
		text: ['4 грн/мин', '5 мест', '50 тыс. км пробег'],
	},
	{
		id: 3,
		car: topCar,
		text: ['4 грн/мин', '5 мест', '50 тыс. км пробег'],
	},
	{
		id: 4,
		car: benefitsCar,
		text: ['4 грн/мин', '5 мест', '50 тыс. км пробег'],
	},
	{
		id: 5,
		car: topCar,
		text: ['4 грн/мин', '5 мест', '50 тыс. км пробег'],
	},
	{
		id: 6,
		car: benefitsCar,
		text: ['4 грн/мин', '5 мест', '50 тыс. км пробег'],
	},
]

const Slider2 = ({ className }) => {
	return (
		<div  className='slider' >
		<Carousel
			autoFocus={true}
			autoPlay={true}
			showThumbs={false}
			showArrows={false}
			showStatus={false}
			infiniteLoop={true}
		>
			{cars.map(({ id, car, text }) => {
				const [text1, text2, text3] = text

				return (
					<article className={`slide`} key={id}>
						<img src={car} alt='' className='top__inner-img' />
						<p className='top__subtext subtext'>
							<span>{text1}</span>
							<span>{text2}</span>
							<span>{text3}</span>
						</p>
						<div className='dot-container'>
							<div className={`dot`}></div>
						</div>
					</article>
				)
			})}
		</Carousel>
		</div>
	)
}

export default Slider2
