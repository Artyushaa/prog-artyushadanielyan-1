export function DealsDayCard({ days, hours, mins, sec, name, companyName, price, discountPrice, url }) {
    return (
        <>
            <div className="deals-day__product">
                <img src={url} alt="" className="deals-day__product--pictured" />
                <div className="deals-day__product-info-container">
                    <div className="deals-day__product-day"><span className="deals-day__number">{days}</span>Days</div>
                    <div className="deals-day__product-day">
                        <span className="deals-day__number">{hours}</span>Hours
                    </div>
                    <div className="deals-day__product-day">
                        <span className="deals-day__number">{mins}</span>Mins
                    </div>
                    <div className="deals-day__product-day">
                        <span className="deals-day__number">{sec}</span>Sec
                    </div>
                    <div className="deals-day__product-description">
                        <p className="deals-day__product-description-title">{name}</p>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <p className="deals-day__title-company">By <span className="deals-day--color-green">{companyName}</span>
                        </p>
                        <div className="deals-day__price-add-container">
                            <div className="deals-day__price">
                                <span className="deals-day--color-green">{price} <span
                                    className="deals-day__discount-price">{discountPrice}</span></span>
                            </div>
                            <div className="deals-day__add">
                                <i className="fa-solid fa-cart-shopping"></i>
                                Add
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default function DealsDay() {
    return (
        <>
            <div className="deals-day">
                <div className="deals-day__header-container">
                    <p className="deals-day__header">Deals Of The Day</p>
                    <a href="#" className="deals-day__all-deals">
                        All Deals <i className="fa-solid fa-chevron-right"></i>
                    </a>
                </div>

                <div className="deals-day__product-container">

                    <DealsDayCard url="img/banner-imgs/banner-5.png" days="881" hours="11" mins="10" sec="34" name="Seeds of Change Organic Quinoa, Brown, & Red Rice" companyName="NestFood" price="$32.85" discountPrice="$33.8" />
                    <DealsDayCard url="img/banner-imgs/banner-6.png" days="1277" hours="11" mins="08" sec="32" name="Perdue Simply Smart Organics Gluten Free" companyName="Old El Paso" price="$24.85" discountPrice="$26.8" />
                    <DealsDayCard url="img/banner-imgs/banner-7.png" days="1611" hours="11" mins="07" sec="33" name="Signature Wood-Fired Mushroom and Caramelized" companyName="Progresso" price="$12.85" discountPrice="$13.8" />
                    <DealsDayCard url="img/banner-imgs/banner-8.png" days="833" hours="11" mins="01" sec="34" name="Simply Lemonade with Raspberry Juice" companyName="Yoplait" price="$15.85" discountPrice="$16.8" />
                </div>
            </div>
        </>
    )
}