import React from 'react'
import './Top.css'
import car1 from '../../images/top-bg.png'
import carIcon from '../../images/car-icon.svg'
import cardIcon from '../../images/card-icon.svg'
import mapIcon from '../../images/map-icon.svg'
import topDot from '../../images/top-dot.svg'
import Slider from '../Slider2/Slider2'
import DownloadBtn from '../DownloadBtn/DownloadBtn'

const cards = [
	{
		id: 1,
		image: carIcon,
		text: 'Более 300 автомобилей в вашем распоряжении',
		alt: 'car',
	},
	{
		id: 2,
		image: cardIcon,
		text: 'Дешевле такси и собственного автомобиля',
		alt: 'card',
	},
	{
		id: 3,
		image: mapIcon,
		text: 'Лучшие автомобили в любой точке города',
		alt: 'map',
	},
]

const Top = () => {
	return (
		<section className='top'>
			<div className='container'>
				<div className='top__inner'>
					<div className='top__box-top'>
						<div className='top__inner-left inner-block'>
							<h1 className='title top__title'>
								Каршеринг в Киеве LUX автомобили
							</h1>
							<h4 className='top__subtitle subtitle'>
								Закажи эксклюзивный автомобиль через мобильное
								приложение в любой точке города
							</h4>
							<DownloadBtn className='top__download-btn'>
								Скачать приложение
							</DownloadBtn>
						</div>
						<div className='top__inner-right inner-block'>
							<Slider className='top__slider' />
						</div>
					</div>

					<div className='top__box-bottom'>
						<div className='top__items-container inner-block'>
							{cards.map(({ id, image, text, alt }) => {
								return (
									<div className='top__item' key={id}>
										<img
											src={image}
											alt={alt}
											className='top__item-img'
										/>
										<h6 className='top__item-title'>
											{text}
										</h6>
									</div>
								)
							})}
						</div>
						<p className='top__text inner-block'>
							<span>
								<a href='#'>Условия аренды автомобиля</a>
							</span>
							<span>
								<a href='#'>Публичный договор</a>
							</span>
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Top
