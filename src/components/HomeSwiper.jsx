/* eslint-disable jsx-a11y/alt-text */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// swiper bundle styles
import "swiper/swiper-bundle.min.css";

// swiper core styles
import "swiper/swiper.min.css";

// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Keyboard, Pagination, Navigation } from "swiper";

import previousButtonSvg from "../assets/images/swiper-prev.svg";
import nextButtonSvg from "../assets/images/swiper-next.svg";
import cardOneBottom from '../assets/images/swiper-card-one-bottom.svg'
import cardTwoBottom from '../assets/images/swiper-card-two-bottom.svg'
import cardThreeBottom from '../assets/images/swiper-card-three-bottom.svg'
import cardFourBottom from '../assets/images/swiper-card-four-bottom.svg'
import cardFiveBottom from '../assets/images/swiper-card-five-bottom.svg'
import cardSixBottom from '../assets/images/swiper-card-six-bottom.svg'

// install Swiper modules
SwiperCore.use([Keyboard, Pagination, Navigation]);

const SwiperContent = ({heading, details, bottomImage}) => {
	return (
		<div className="swiper-slide-content">
			<div className="heading">
				<h1 className="text-blue text-24 text-vbold">{heading}</h1>
			</div>
			<div className="details">
				<h3 className="text-small text-regular text-grey">{details}</h3>
			</div>
			<div className="bottom">
				<img src={bottomImage} />
			</div>
		</div>
	)
}

const SwiperComponent = () => {
	return (
		<>
			<div className="swiper-custom-navigation swiper-custom-navigation-prev">
				<img src={previousButtonSvg} alt="prev" />
			</div>

			<Swiper
				slidesPerView={1}
				keyboard={{
					enabled: true,
				}}
                spaceBetween={3} // remove if box-shadow is to be added
				pagination={{
					clickable: true,
				}}
				grabCursor={{ enabled: true }}
				navigation={{
					prevEl: ".swiper-custom-navigation-prev",
					nextEl: ".swiper-custom-navigation-next",
				}}
				className="swiper"
			>
				<SwiperSlide>
					<SwiperContent heading="Download the App" details="Download our mobile application or register on our website to start trading gift cards easily as bosses do." bottomImage={cardOneBottom} />
				</SwiperSlide>

				<SwiperSlide>
					<SwiperContent heading="Login or Register" details="Log in and get familiar with the three-step gift card trading process that takes only a few minutes to complete." bottomImage={cardTwoBottom} />
				</SwiperSlide>

				<SwiperSlide>
					<SwiperContent heading="Friendly Rates 🤙" details="Worry not about rates, we offer the best payouts for your assets based on the current average market prices." bottomImage={cardThreeBottom} />
				</SwiperSlide>

				<SwiperSlide>
					<SwiperContent heading="Simplified User Interface" details="Our platform is built with your best interest at heart, helping you sell gift cards using the simplest user interface." bottomImage={cardFourBottom} />
				</SwiperSlide>

				<SwiperSlide>
					<SwiperContent heading="Quick Payments" details="Our payment system is amazingly coherent. You get your money almost instantly, no fees attached, no limits." bottomImage={cardFiveBottom} />	
				</SwiperSlide>

				<SwiperSlide>
					<SwiperContent heading="All we do is Reply" details="Have a question? Our FAQ page is a whole knowledge base. Our support team is also available via live chat." bottomImage={cardSixBottom} />
				</SwiperSlide>
			</Swiper>

			<div className="swiper-custom-navigation swiper-custom-navigation-next">
				<img src={nextButtonSvg} alt="next" />
			</div>
		</>
	);
};

export default SwiperComponent;
