const GiftcardInfoCard = ({category, subcategory, rate}) => {
    return (
        <div className="giftcard-info-card">
            <div className="giftcard-info-card-left">
                <h3 className="category-text text-green text-small text-regular">{category}</h3>
                <h3 className="subcategory-text text-blue text-small text-vbold">{subcategory}</h3>
            </div>

            <div className="giftcard-info-card-center">
            <h3 className="subcategory-text text-blue text-small text-vbold">{subcategory}</h3>
            </div>

            <div className="giftcard-info-card-right">
                <h3 className="subcategory-text text-blue text-small text-vbold">{rate}</h3>
            </div>
        </div>
    )
}

export default GiftcardInfoCard;