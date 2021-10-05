import React from 'react'
import './Questions.css'
import questionsBg from '../../images/questions-bg.png'
import DownloadBtn from '../DownloadBtn/DownloadBtn'

const Questions = () => {
	return (
		<section className='questions'>
			<div className='container'>
				<div className='questions__inner'>
					<div className='questions__image'>
						<img src={questionsBg} alt='' />
					</div>
					<div className='questions__form-box'>
						<div className='questions__title title'>
							Остались вопросы?
						</div>
						<div className='questions__subtext'>
							Мы перезвоним Вам и проконсультируем по любому
							вопросу
						</div>
						<form className='questions__form'>
							<input
								type='text'
								placeholder='Имя'
								className='questions__input-name'
							/>
							<input
								type='text'
								placeholder='Телефон'
								className='questions__input-phone'
							/>
							<DownloadBtn className='questions__btn'>
								ОСТАВИТЬ ЗАЯВКУ
							</DownloadBtn>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Questions
