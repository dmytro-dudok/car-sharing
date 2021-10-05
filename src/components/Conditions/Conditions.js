import React from 'react'
import DownloadBtn from '../DownloadBtn/DownloadBtn'
import Condition from './Condition/Condition'
import './Conditions.css'

const conditions = [
	{
		id: 1,
		num: '01',
		title: 'Опыт вождения от 2х лет',
		text: 'Для того, чтобы арендовать автомобиль, Вам необходимо зарегестрировать свои прав в нашем мобильном приложении',
	},
	{
		id: 2,
		num: '02',
		title: 'Только по Киеву',
		text: 'Наши автомобили работают только в пределах города Киев. За город на наших автомобилях, к сожалению, выезжать нельзя.',
	},
	{
		id: 3,
		num: '03',
		title: 'Мобильный телефон и интернет',
		text: 'Для использования нашего сервиса Вам необходим мобильный телефон и интернет. Бронирование, оплата и вся отчетность происходит онлайн',
	},
]

const Conditions = () => {
	return (
		<section className='conditions'>
			<div className='container'>
				<div className='conditions__inner'>
					<div className='conditions__content'>
						<h2 className='conditions__title title'>
							Условия аренды автомобиля
						</h2>
						<p className='conditions__text'>
							<span>
								Мы ценим каждого клиента и предоставляем
								качественный сервис каршеринга в Киеве.
							</span>
							<span>
								Именно для того, что бы Вам было приятно и
								безопасно пользоваться нашим сервисом на
								постоянной основе, мы выделили несколько условий
								для того, чтобы взять машину в аренду
							</span>
						</p>
						<DownloadBtn>Скачать приложение</DownloadBtn>
					</div>
					<div className='conditions__items'>
						{conditions.map((condition) => {
							return <Condition key={condition.id} {...condition} />
						})}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Conditions
