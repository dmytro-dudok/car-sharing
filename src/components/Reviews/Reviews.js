import React from 'react'
import Review from './Review/Review'
import './Reviews.css'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
// import 'swiper/css'
// import 'swiper/css/pagination'
import 'swiper/swiper.min.css'

// modules styles
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay } from 'swiper'

// install Swiper modules
SwiperCore.use([Pagination, Autoplay])

const reviews = [
	{
		id: 1,
		title: 'Михаил, 28 лет',
		text: 'Очень рад, что Вы есть! Пока еще бэху купить не могу, но покататься взять - это отличная возможность! Такое ощущение, что у меня личный огромный автопарк элитных тачек)))',
	},
	{
		id: 2,
		title: 'Инна, 35 лет',
		text: 'Очень радует Ваш сервис. Встречаю ВИП клиентов всегда только на Ваших машинах. Удобно, что расчет по минутам, это экономит бюджет компании.',
	},
	{
		id: 3,
		title: 'Игорь, 25 лет',
		text: `Ребята, Вы ТОПЧИК! Брал машину на свидание, покатал девушку, она в восторге, я доволен, все счастливы)`,
	},
	{
		id: 4,
		title: 'Марина, 30 лет',
		text: `Люблю Ваш сервис. Не люблю такси. В приложении быстро нахожу машину поблизости. Всегда чистая, свежая, приятно садиться в нее. До работы или на шопинг еду с комфортом.`,
	},
	{
		id: 5,
		title: 'Игорь, 25 лет',
		text: `Ребята, Вы ТОПЧИК! Брал машину на свидание, покатал девушку, она в восторге, я доволен, все счастливы)`,
	},
	{
		id: 6,
		title: 'Марина, 30 лет',
		text: `Люблю Ваш сервис. Не люблю такси. В приложении быстро нахожу машину поблизости. Всегда чистая, свежая, приятно садиться в нее. До работы или на шопинг еду с комфортом.`,
	},
	{
		id: 7,
		title: 'Инна, 35 лет',
		text: 'Очень радует Ваш сервис. Встречаю ВИП клиентов всегда только на Ваших машинах. Удобно, что расчет по минутам, это экономит бюджет компании.',
	},
	{
		id: 8,
		title: 'Игорь, 25 лет',
		text: `Ребята, Вы ТОПЧИК! Брал машину на свидание, покатал девушку, она в восторге, я доволен, все счастливы)`,
	},
	{
		id: 9,
		title: 'Марина, 30 лет',
		text: `Люблю Ваш сервис. Не люблю такси. В приложении быстро нахожу машину поблизости. Всегда чистая, свежая, приятно садиться в нее. До работы или на шопинг еду с комфортом.`,
	},
	{
		id: 10,
		title: 'Инна, 35 лет',
		text: 'Очень радует Ваш сервис. Встречаю ВИП клиентов всегда только на Ваших машинах. Удобно, что расчет по минутам, это экономит бюджет компании.',
	},
]

const Reviews = () => {
	return (
		<section className='reviews'>
			<div className='container'>
				<div className='reviews__inner'>
					<h2 className='reviews__title title'>Отзывы</h2>
					<div className='reviews__slider'>
						<Swiper
							slidesPerView={4}
							spaceBetween={30}
							pagination={{
								clickable: true,
							}}
							autoplay={{
								delay: 3000,
							}}
							loop={true}
							centeredSlides={true}
							keyboardControl={true}
							grabCursor={true}
							breakpoints={{
								320: {
									slidesPerView: 1,
									spaceBetween: 0,
								},
								480: {
									slidesPerView: 2,
									spaceBetween: 10,
								},
								640: {
									slidesPerView: 2,
									spaceBetween: 20,
								},
								768: {
									slidesPerView: 3,
									spaceBetween: 20,
								},
								1124: {
									slidesPerView: 4,
									spaceBetween: 20,
								},
								1200: {
									slidesPerView: 4,
									spaceBetween: 30,
									centeredSlides: false,
								},
							}}
							className='mySwiper'
						>
							{reviews.map((item) => {
								return (
									<SwiperSlide>
										<Review key={item.id} {...item} />
									</SwiperSlide>
								)
							})}
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Reviews
