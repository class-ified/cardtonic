/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import PageHeader from "../components/PageHeader"
import IconCard from "../components/CareersIconCard"
import { JoinUsButton } from "../components/Button"

import competitiveIcon from "../assets/images/competitive-icon.svg"
import hmoIcon from "../assets/images/hmo-icon.svg"
import generousIcon from "../assets/images/generous-icon.svg"
import learningIxon from "../assets/images/learning-icon.svg"
import healthyIcon from "../assets/images/healthy-icon.svg"
import friendlyIcon from "../assets/images/friendly-icon.svg"

import { useEffect } from "react"

const Career = () => {
    useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, []);


    return (
        <main className="container-career">
            <div className="content">
                <div className="together-section">
                    <PageHeader text="Together at Cardtonic" />

                    <div className="together-section-text">
                        <h3 className="text-small text-blue text-regular">
                            No massive movement can be carried out by an individual, but with a team, the possibilities are limitless.
                        </h3>

                        <h3 className="text-small text-blue text-regular">
                            Our team is dedicated to achieving an audacious and incredibly rewarding mission, and we cannot do it alone.
                        </h3>

                        <h3 className="text-small text-blue text-regular">
                            Exciting challenges lie ahead — new regions, technologies, and businesses. Guided by our core values, we’ll meet these challenges creatively and with the support of our global community. 
                        </h3>
                    </div>

                    <JoinUsButton buttonColor="button-grey" text="Join Us" />
                </div>

                <div className="benefits-section">
                    <PageHeader text="Amazing Benefits" />

                    <div className="benefits-section-text">
                        <h3 className="text-small text-blue text-regular">
                            There’s life at work and life outside of work. We want everyone to be healthy, happy, learn, get time to give back, and have the financial resources and support they need. Here are some of what we offer at Cardtonic: 
                        </h3>
                    </div>
                    
                    <div className="benefits-section-grid">
                        <div className="row row-1">
                            <IconCard src={competitiveIcon} textOne="Competitive" textTwo="Salary Structure" />
                            <IconCard src={hmoIcon} textOne="HMO"/>
                        </div>

                        <div className="row row-2">
                            <IconCard src={generousIcon} textOne="Generous Bonus" textTwo="System" />
                            <IconCard src={learningIxon} textOne="Learning And" textTwo="Development" />
                        </div>

                        <div className="row row-3">
                            <IconCard src={healthyIcon} textOne="Healthy Food" textTwo="And Snacks" />
                            <IconCard src={friendlyIcon} textOne="Friendly Work" textTwo="Environment" />
                        </div>
                    </div>
                </div>
                
                <div className="havefun-section">
                    <div className="heading">
                        <h1 className="text-kindabig text-vbold text-blue">Let’s Have Fun Together.</h1>
                    </div>

                    <div className="text">
                        <div className="details">
                            <h3 className="text-blue text-regular text-small">A world where anyone can belong anywhere starts with a workplace where you feel welcomed and can contribute your best work. Cardtonic welcomes candidates and offers opportunities to create a community everyone loves to see.</h3>
                        </div>

                        <JoinUsButton buttonColor="button-yellow" text="Apply Now" />
                    </div>
    
                </div>
            </div>
        </main>
    )
}

export default Career