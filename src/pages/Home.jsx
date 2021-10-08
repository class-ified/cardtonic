/* eslint-disable jsx-a11y/anchor-is-valid */
import image from "../assets/images/section-sell-image.png";
import instantPaymentIcon from "../assets/images/instant-payment-icon.svg";
import crossPlatformIcon from "../assets/images/cross-platform-icon.svg";
import trustedIcon from "../assets/images/trusted-icon.svg";
import downladSectionImage from '../assets/images/download-section-image.png'
import googlePlay from '../assets/images/googleplay.svg'
import appStore from '../assets/images/appstore.svg'
import naij from "../assets/images/naij-logo.png"
import naija from '../assets/images/naija-logo.png'
import pulse from '../assets/images/pulse-logo.png'
import punch from '../assets/images/punch-logo.png'
import today from '../assets/images/today-logo.png'
import vanguard from '../assets/images/vanguard-logo.png'

import Card from "../components/SellSectionCard";
import { RegisterButton } from "../components/Button";
import HeroText from "../components/SectionHeroText";
import SwiperComponent from "../components/HomeSwiper";



const Home = () => {
    const logos = [naij, naija, pulse, punch, today, vanguard]

	return (
		<main className="container-home">
			<div className="section section__sell">
				<div className="section__sell-content section-content">
					<div className="hero-box">
						<div className="header">
							<h1 className="text-vbold text-blue-dark text-xl">
								{" "}
								<span className="sell-word">Sell</span>{" "}
								<span className="giftcard-underline">
									Gift Cards{" "}
								</span>{" "}
								for Naira
							</h1>
						</div>

						<span className="tall-line line"></span>

						<div className="details">
							<h3 className="text-regular text-small text-blue">
								Exchange your gift cards at amazing rates in
								split seconds.
							</h3>
						</div>
					</div>

					<div className="img-box">
						<img src={image} alt="hero" />
					</div>

					<div className="cards-box">
						<div className="card-1-box">
							<Card
								class="card-1"
								iconSrc={instantPaymentIcon}
								heading="Instant Payment"
								text="Using state-of-the-art payment procedures, you are guaranteed to get your payment sent to your account within minutes."
							/>
							<RegisterButton
								buttonColor="button-grey"
								text="Register Now"
							/>
						</div>
						<Card
							class="card-2"
							iconSrc={crossPlatformIcon}
							heading="Cross-Platform Availability"
							text="Sell any gift card, anywhere, anytime, using our modern gift card trading application available on Android, iOS and web browser."
						/>
						<Card
							class="card-3"
							iconSrc={trustedIcon}
							heading="Trusted And Secure"
							text="Trade with high confidence, as we assure you the highest level of encryption and professionally audited exchange system."
						/>
					</div>
				</div>
			</div>


			<div className="section section__exchange">
				<div className="section__exchange-content section-content">
					<div className="hero-box">
						<div className="header">
							<HeroText
								textColorClass="text-white"
								spanColorClass="text-blue"
								spanText="Exchange"
								text="Gift Cards for Naira"
							/>
						</div>
						<span className="tall-line line"></span>
						<div className="details">
							<h3 className="text-regular text-blue text-small">
								Gift card exchange in Nigeria has taken a new
								look and we are having a good run at that. Using
								customer-inclined conversion, we strive to
								provide the best possible gift card rates in
								Nigeria.
							</h3>
							<h3 className="text-regular text-blue text-small">
								We accept iTunes, Amazon, Steam Wallet, Google
								Play, Apple Store, eBay, Walmart, Sephora,
								OneVanilla, Nordstrom, Target, JCPenney, Best
								Buy, Nike, Hotels.com, Macy's, Gamestop, Xbox,
								Vanilla, G2A, American Express (AMEX),
								OffGamers, Foot Locker, Visa, Play Station and
								others.
							</h3>
						</div>
					</div>

					<div className="swiper-box">
                        <SwiperComponent />
                    </div>
				</div>
			</div>

			<div className="section section__download">
				<div className="section__download-content section-content">
                    <div className="text-box">
                        <HeroText
                            textColorClass="text-blue"
                            spanColorClass="text-blue"
                            spanText="Download"
                            text="Cardtonic App"
                        />

                        <h3 className="text-blue text-small text-regular">
                            Experience the best of Cardtonic as you download our mobile application to your phone or tablet. Available for iOS and Android operating systems.
                        </h3>

                        <RegisterButton
                            buttonColor="button-yellow"
                            text="Register"
                        />
                    </div>

                    <span className="tall-line line"></span>

                    <div className="image-and-links">
                        <div className="download-links">
                            <a href="#">
                                <img style={{filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'}} src={googlePlay} alt="google play" />
                            </a>
                            <a href="#">
                                <img src={appStore} alt="google play" />
                            </a>
                        </div>
                        <div className="image-box">
                            <img src={downladSectionImage} alt="phones" />
                        </div>
                    </div>
                </div>
			</div>

			<div className="section section__news">
				<div className="section__news-content section-content">
                    <div className="hero-box">
                        <div className="header">
                            <HeroText
                                textColorClass="text-blue"
                                spanColorClass="text-blue"
                                spanText="Cardtonic"
                                text="in the news"
                            />
                        </div> 

                        <span className="tall-line line"></span>

                        <div className="details">
                            <h3 className="text-blue text-regular text-small">
                                As a demonstration of our quality service and awesome impression, we have been published by some platforms across Nigeria and beyond.
                            </h3>
                        </div>
                    </div>

                    <div className="logos-box">
                        {logos.map((logo) => (
                            <img src={logo} className='logo' alt="logo" />
                        ))}
                    </div>    

                    <span className="wide-line"></span>      

                    <div className="impressions">
                        <a className='impressions-link' href="#"><h3 className="text-small text-green text-regular">Click here to view our impressions.</h3></a>          
                    </div>
                </div>
			</div>
		</main>
	);
};

export default Home;
