export function DailySellsCard({descriptions, category, name, price, discountPrice, url, classname}) {
    return (
        <>
            <div className="daily-sells__container">
                <div
                    className={classname}>{descriptions}</div>
                <img src={url} alt="" className="daily-sells__pictured"/>

                    <a href="#" className="daily-sells__text-category">{category}</a>
                    <a href="#" className="daily-sells__description-dish">{name}</a>
                    <div className="daily-sells__fa-star-container">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="daily-sells__price-add-container">
                        <div className="daily-sells__price">
                            <span className="daily-sells--color-green">{price} <span
                                className="daily-sells__discount-price">{discountPrice}</span></span>
                        </div>
                        <div className="daily-sells__line"></div>
                        <div className="daily-sells__add">
                            <i className="fa-solid fa-cart-shopping"></i>
                            Add To Cart
                        </div>
                    </div>
            </div>
        </>
    )
}


export default function DailySells() {
    return (
        <>
            <div className="daily-sells-container">
                <div className="daily-sells__categories">
                    <p className="daily-sells__categories-header">Daily Best Sells</p>
                    <ul className="daily-sells__item">
                        <li className="daily-sells__list">
                            <a href="#" className="daily-sells__click daily-sells_click--color-green">Featured</a>
                        </li>
                        <li className="daily-sells__list">
                            <a href="#" className="daily-sells__click">Popular</a>
                        </li>
                        <li className="daily-sells__list">
                            <a href="#" className="daily-sells__click">New added</a>
                        </li>
                    </ul>
                </div>

                <div className="daily-sells__product">
                    <button className="daily-sells__left-btn"><i className="fa-solid fa-arrow-left"></i></button>
                    <button className="daily-sells__right-btn"><i className="fa-solid fa-arrow-right right"></i></button>
                    <div className="daily-sells__nature-card">
                        <p className="daily-sells__nature-title">Bring Nature into your home</p>
                        <img src="./img/banner/banner-4.png" alt="" className="daily-sells__nature-pictured"/>
                            <button className="daily-sells__nature-btn">Shop Now<i
                                className="fa-solid fa-arrow-right-long"></i></button>
                    </div>

                    <div className="daily-sells__product-slide">
                        <DailySellsCard url="img/shop/product-1-1.jpg" descriptions="Save 15%" category="Hodo Foods" name="Seeds of Change Organic Quinoa, Brown" price="$238.85" discountPrice="$245.0" classname="daily-sells__descriptions daily-sells__descriptions--width daily-sells__descriptions--color-pink" />

                        <DailySellsCard url="img/shop/product-5-1.jpg" descriptions="Save 35%" category="Hodo Foods" name="All Natural Italian-Style Chicken Meatballs" price="$238.85" discountPrice="$245.0" classname="daily-sells__descriptions daily-sells__descriptions--width daily-sells__descriptions--color-green" />

                        <DailySellsCard url="img/shop/product-2-1.jpg" descriptions="Sale" category="Hodo Foods" name="All Natural Italian-Style Chicken Meatballs" price="$238.85" discountPrice="$245.0" classname="daily-sells__descriptions daily-sells__descriptions--width daily-sells__descriptions--color-aqua" />

                        <DailySellsCard url="img/shop/product-3-1.jpg" descriptions="Best Sale" category="Hodo Foods" name="All Natural Italian-Style Chicken Meatballs" price="$238.85" discountPrice="$245.0" classname="daily-sells__descriptions daily-sells__descriptions--width daily-sells__descriptions--color-orange" />

                        <DailySellsCard url="img/shop/product-4-1.jpg" descriptions="Save 15%" category="Hodo Foods" name="All Natural Italian-Style Chicken Meatballs" price="$238.85" discountPrice="$245.0" classname="daily-sells__descriptions daily-sells__descriptions--width daily-sells__descriptions--color-pink" />

                        <DailySellsCard url="img/shop/product-4-1.jpg" descriptions="Save 15%" category="Hodo Foods" name="All Natural Italian-Style Chicken Meatballs" price="$238.85" discountPrice="$245.0" classname="daily-sells__descriptions daily-sells__descriptions--width daily-sells__descriptions--color-pink" />
                    </div>
                </div>
            </div>
        </>
    )
}