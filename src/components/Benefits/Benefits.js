import React from 'react'
import './Benefits.css'
import benefitsCar from '../../images/benefits-car.png'
import DownloadBtn from '../DownloadBtn/DownloadBtn'

const Benefits = () => {
	return (
		<section className='benefits'>
			<div className='container'>
				<div className='benefits__inner'>
					<div className='benefits__list-box'>
						<h2 className='benefits__title title'>Преимущества</h2>
						<ul className='benefits__list'>
							<li className='benefits__list-item'>
								мойка авто каждую неделю
							</li>
							<li className='benefits__list-item'>
								премиум автомобили
							</li>
							<li className='benefits__list-item'>
								мощный двигатель
							</li>
							<li className='benefits__list-item'>
								поддержка 24/7
							</li>
							<li className='benefits__list-item'>
								бензин за наш счет
							</li>
							<li className='benefits__list-item'>
								парковка по всему городу
							</li>
							<li className='benefits__list-item'>
								каждый месяц ТО автомобиля
							</li>
						</ul>
					</div>
					<div className='benefits__image'>
						<img src={benefitsCar} alt='' />
					</div>
					<div className='benefits__content'>
						<div className='benefits__text'>
							Вы можете выбрать один из 300 наших автомобилей,
							насладиться сервисом, повысить уровень жизни, не
							покупая дорогой автомобиль, успевать везде и каждый
							день ездить на новом премиум автомобиле.
						</div>
						<div className='benefits__text'>
							Посмотрите видео презентацию нашего сервиса и
							выберите автомобиль уже сейчас!
						</div>

						<DownloadBtn className='benefits__btn'>
							ПOСМОТРЕТЬ ПРЕЗЕНТАЦИЮ
						</DownloadBtn>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Benefits
