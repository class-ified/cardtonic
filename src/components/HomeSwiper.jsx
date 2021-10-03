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

// install Swiper modules
SwiperCore.use([Keyboard, Pagination, Navigation]);

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
					<div className="swiper-slide-content slide-1-content">
						1
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="swiper-slide-content slide-2-content">
						2
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="swiper-slide-content slide-3-content">
						3
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="swiper-slide-content slide-4-content"></div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="swiper-slide-content slide-5-content"></div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="swiper-slide-content slide-6-content"></div>
				</SwiperSlide>
			</Swiper>

			<div className="swiper-custom-navigation swiper-custom-navigation-next">
				<img src={nextButtonSvg} alt="next" />
			</div>
		</>
	);
};

export default SwiperComponent;
