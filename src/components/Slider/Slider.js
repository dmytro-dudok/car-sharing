import React, { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'
import car1 from '../../images/top-bg.png'
import topDot from '../../images/top-dot.svg'
import arrowLeft from '../../images/arrow-left.svg'
import arrowRight from '../../images/arrow-right.svg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Slider.css'

const cars = [
	{
		id: 1,
		car: car1,
		text: ['4 грн/мин', '5 мест', '50 тыс. км пробег'],
	},
	{
		id: 2,
		car: car1,
		text: ['4 грн/мин', '5 мест', '50 тыс. км пробег'],
	},
	{
		id: 3,
		car: car1,
		text: ['4 грн/мин', '5 мест', '50 тыс. км пробег'],
	},
	{
		id: 4,
		car: car1,
		text: ['4 грн/мин', '5 мест', '50 тыс. км пробег'],
	},
	{
		id: 5,
		car: car1,
		text: ['4 грн/мин', '5 мест', '50 тыс. км пробег'],
	},
	{
		id: 6,
		car: car1,
		text: ['4 грн/мин', '5 мест', '50 тыс. км пробег'],
	},
]

const Slider = ({ className }) => {
	const [items, setItems] = useState(cars)
	const [index, setIndex] = useState(0)

	useEffect(() => {
		const lastIndex = items.length - 1
		if (index < 0) {
			setIndex(lastIndex)
		}
		if (index > lastIndex) {
			setIndex(0)
		}
	}, [index, items])

	// useEffect(() => {
	//     let slider = setInterval(() => {
	//         setIndex((prevIndex) => prevIndex + 1)
	//     }, 5000)

	//     return () => {
	//         clearInterval(slider)
	//     }
	// }, [index])

	return (
		<div className={`slider ${className}`} draggable='false'>
			<Carousel >
				{items.map(({ id, car, text }, itemIndex) => {
					const [text1, text2, text3] = text

					let position = 'nextSlide'

					if (itemIndex === index) {
						position = 'activeSlide'
					}
					if (
						itemIndex === index - 1 ||
						(index === 0 && itemIndex === items.length - 1)
					) {
						position = 'lastSlide'
					}
					return (
						<article className={`slide ${position}`} key={id}>
							<img src={car} alt='' className='top__inner-img' />
							<p className='top__subtext subtext'>
								<span>{text1}</span>
								<span>{text2}</span>
								<span>{text3}</span>
							</p>
							<div className='dot-container'>
								<div className={`dot ${position}`}></div>
							</div>
						</article>
					)
				})}
			</Carousel>
			<button
				className='prev'
				onClick={() => setIndex((prevIndex) => prevIndex - 1)}
			>
				<img src={arrowLeft} alt='' />
			</button>
			<button
				className='next'
				onClick={() => setIndex((prevIndex) => prevIndex + 1)}
			>
				{' '}
				<img src={arrowRight} alt='' />
			</button>
			<div className='dots'>
				{items.map((item, index) => {
					return (
						<div className='dot-container'>
							<div className='dot'></div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Slider
//<div className={`slider ${className}`} draggable="false">
