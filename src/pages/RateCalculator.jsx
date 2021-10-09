import PageHeader from "../components/PageHeader"
import { BlackButton } from "../components/Button"

import { Link } from "react-router-dom"
import GiftcardInfoCard from "../components/GiftcardInfoCard"

import { useEffect } from "react"

const RateCalculator = () => {

    useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, []);
    
    return (
        <main className="container-ratecalculator">
            <div className="content">
                <PageHeader text="Gift Card Rate Calculator" />

                <div className="page-details">
                    <h3 className="text-blue text-regular text-small">Enter the required details in each field below to calculate how much naira you will be paid for certain gift cards on Cardtonic.</h3>
                </div>

                <form action="#" className="calculator-form">
                    <label className="amount" htmlFor="amount">
                        <h3 className="amount-text text-xs text-green text-regular">Amount</h3>
                        <input className="amount-input text-vbold text-kindabig form-input" type="number" placeholder="0.00" />
                    </label>

                    <div className="form-select-box">
                        <select className="text-regular text-small form-input form-select" name="category" id="category">
                            <option value="">Select Category</option>
                            <option value="idk">okay</option>
                            <option value="idk">okay</option>
                            <option value="idk">okay</option>
                            <option value="idk">okay</option>
                        </select>

                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.35288 6.95043C2.00437 4.17301 4.17301 2.00437 6.95043 1.35288C8.95626 0.882374 11.0437 0.882375 13.0496 1.35288C15.827 2.00437 17.9956 4.17301 18.6471 6.95044C19.1176 8.95626 19.1176 11.0437 18.6471 13.0496C17.9956 15.827 15.827 17.9956 13.0496 18.6471C11.0437 19.1176 8.95626 19.1176 6.95044 18.6471C4.17301 17.9956 2.00437 15.827 1.35288 13.0496C0.882374 11.0437 0.882374 8.95626 1.35288 6.95043Z" stroke="#FDAD00" stroke-width="1.5"/>
                            <path d="M12.5 9L10 11.5L7.5 9" stroke="#FDAD00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    
                    <div className="form-select-box">
                        <select className="text-regular text-small form-input form-select" name="subcategory" id="subcategory">
                            <option value="">Select Sub-Category</option>
                            <option value="idk">okay</option>
                            <option value="idk">okay</option>
                            <option value="idk">okay</option>
                            <option value="idk">okay</option>
                        </select>

                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.35288 6.95043C2.00437 4.17301 4.17301 2.00437 6.95043 1.35288C8.95626 0.882374 11.0437 0.882375 13.0496 1.35288C15.827 2.00437 17.9956 4.17301 18.6471 6.95044C19.1176 8.95626 19.1176 11.0437 18.6471 13.0496C17.9956 15.827 15.827 17.9956 13.0496 18.6471C11.0437 19.1176 8.95626 19.1176 6.95044 18.6471C4.17301 17.9956 2.00437 15.827 1.35288 13.0496C0.882374 11.0437 0.882374 8.95626 1.35288 6.95043Z" stroke="#FDAD00" stroke-width="1.5"/>
                            <path d="M12.5 9L10 11.5L7.5 9" stroke="#FDAD00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>

                    <div className="submit-result">
                        <BlackButton text="Calculate" />

                        <div className="result-box">
                            <h2 className="text-kindabig text-regular text-blue total-text">Total: <span className="text-green text-vbold">0.00</span></h2>
                            <h3 className="text-small text-regular rate-text">Rate - <span>530</span></h3>
                        </div>
                    </div>
                </form>

                <div className="best-giftcards">
                    <div className="best-giftcards-content">
                        <div className="heading">
                            <h1 className="text-vbold text-blue text-kindabig">Best Gift Cards at the Moment.</h1>
                        </div>
                        <div className="details">
                            <h3 className="text-blue text-regular text-small">Listed below are the top 10 best gift cards to sell in Nigeria at the moment, ranked according to the best rates in descending order. It is updated automatically.</h3>
                        </div>

                        <div className="giftcard-info-card-container">
                            <GiftcardInfoCard category="Amazon" subcategory="Amazon USA" rate="345" />
                            <GiftcardInfoCard category="Amazon" subcategory="Amazon USA" rate="345" />
                            <GiftcardInfoCard category="Amazon" subcategory="Amazon USA" rate="345" />
                            <GiftcardInfoCard category="Amazon" subcategory="Amazon USA" rate="345" />
                            <GiftcardInfoCard category="Amazon" subcategory="Amazon USA" rate="345" />
                            <GiftcardInfoCard category="Amazon" subcategory="Amazon USA" rate="345" />
                            <GiftcardInfoCard category="Amazon" subcategory="Amazon USA" rate="345" />
                            <GiftcardInfoCard category="Amazon" subcategory="Amazon USA" rate="345" />
                            <GiftcardInfoCard category="Amazon" subcategory="Amazon USA" rate="345" />
                        </div>
                    </div>
                </div>

                <div className="about-rates">
                    <div className="heading">
                        <h1 className="text-vbold text-blue text-kindabig">About Rates On Cardtonic</h1>
                    </div>
                    <div className="text">
                        <h3 className="text-regular text-small text-blue">Rates specified on this page are accurate as at the time it’s checked. So if you ever wonder ‘How much can I sell gift cards in Nigeria’, this is the to-go page. However, rates change continually, and what the rate is at the moment may change in the next minute. If you leave the tab open, always reload the page before checking current rates. </h3>
                        <h3 className="text-regular text-small text-blue">Cardtonic gift card rates are mostly above market average in Nigeria, which is because we have the interest of customers at heart. So, you can be rest assured that the rate you see here is among the best possible rates you can sell your gift card in Nigeria. 
                            If you need further help or clarification, <Link className="text-vbold" to="/contact-us">Contact Us</Link> 
                        </h3>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default RateCalculator