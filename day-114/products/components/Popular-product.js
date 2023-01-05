export function PopularProductCard({ description, name, url, companyName, category, price, discountPrice, classname }) {
    return (
        <>
            <div className="popular-products_container">
                <div className={classname}>{description}</div>
                <img src={url} alt="" className="popular-products__pictured" />
                <div className="popular-product__product-info-container">
                    <a href="#" className="popular-product__text-category">{category}</a>
                    <a href="#" className="popular-products__description-dish">{name}</a>
                    <div className="popular-products__fa-star-container">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <p className="popular-products__title-company">By <span
                        className="popular-products--color-green">{companyName}</span></p>
                    <div className="popular-products__price-add-container">
                        <div className="popular-products__price">
                            <span className="popular-products--color-green">{price} <span
                                className="popular-products__discount-price">{discountPrice}</span></span>
                        </div>
                        <div className="popular-products__add-btn">
                            <i className="fa-solid fa-cart-shopping"></i>
                            Add
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default function PopularProduct() {
    return (
        <>
            <div className="popular-products-container">
                <div className="popular-products__categories">
                    <p className="popular-products__categories-header">Popular Products</p>
                    <ul className="popular-products__item">
                        <li className="popular-products__list">
                            <a href="#" className="popular-products__click popular-products--color-green">All</a>
                        </li>
                        <li className="popular-products__list">
                            <a href="#" className="popular-products__click">Milks & Dairles</a>
                        </li>
                        <li className="popular-products__list">
                            <a href="#" className="popular-products__click">Coffes & Teas</a>
                        </li>
                        <li className="popular-products__list">
                            <a href="#" className="popular-products__click">Pet Foods</a>
                        </li>
                        <li className="popular-products__list">
                            <a href="#" className="popular-products__click">Meats</a>
                        </li>
                        <li className="popular-products__list">
                            <a href="#" className="popular-products__click">Vegetables</a>
                        </li>
                        <li className="popular-products__list">
                            <a href="#" className="popular-products__click">Fruits</a>
                        </li>
                    </ul>
                </div>

                <div className="popular-products">
                    <PopularProductCard classname="popular-products__descriptions" description="Hot" category="Snack" name="Seeds of Change Organic Quinoa, Brown, & Red
                    Rice" companyName="NestFood" price="$28.85" discountPrice="$32.0" url="img/shop/product-1-1.jpg" />

                    <PopularProductCard classname="popular-products__descriptions popular-products__descriptions--color-aqua" description="Sale" category="Hodo Foods" name="All Natural Italian-Style Chicken Meatballs" companyName="Stouffer" price="$52.85" discountPrice="$55.8" url="img/shop/product-2-1.jpg" />

                    <PopularProductCard classname="popular-products__descriptions popular-products__descriptions--color-green" description="New" category="Snack" name="Angie’s Boomchickapop Sweet & Salty Kettle Corn" companyName="StarKist" price="$48.85" discountPrice="$52.8" url="img/shop/product-3-1.jpg" />

                    <PopularProductCard category="Vegetables" name="Foster Farms Takeout Crispy Classic Buffalo Wings" companyName="NestFood" price="$17.85" discountPrice="$19.8" url="img/shop/product-4-1.jpg" />

                    <PopularProductCard classname="popular-products__descriptions popular-products__descriptions--color-orange" description="-14%" category="Pet Foods" name="Blue Diamond Almonds Lightly Salted Vegetables" companyName="NestFood" price="$23.85" discountPrice="$25.8" url="img/shop/product-5-1.jpg" />

                    <PopularProductCard category="Hodo Foods" name="Chobani Complete Vanilla Greek Yogurt" companyName="NestFood" price="$54.85" discountPrice="$55.8" url="img/shop/product-6-1.jpg" />

                    <PopularProductCard category="Meats" name="Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g" companyName="NestFood" price="$32.85" discountPrice="$33.8" url="img/shop/product-7-1.jpg" />

                    <PopularProductCard classname="popular-products__descriptions popular-products__descriptions--color-aqua" description="Sale" category="Snack" name="Encore Seafoods Stuffed Alaskan Salmon" companyName="NestFood" price="$35.85" discountPrice="$37.8" url="img/shop/product-8-1.jpg" />

                    <PopularProductCard classname="popular-products__descriptions" description="Hot" category="Coffes" name="Gorton’s Beer Battered Fish Fillets with soft paper" companyName="Old El Paso" price="$23.85" discountPrice="$25.8" url="img/shop/product-9-1.jpg" />

                    <PopularProductCard category="Cream" name="Haagen-Dazs Caramel Cone Ice Cream Ketchup" companyName="Tyson" price="$22.85" discountPrice="$24.8" url="img/shop/product-10-1.jpg" />


                </div>
            </div>
        </>
    )
}