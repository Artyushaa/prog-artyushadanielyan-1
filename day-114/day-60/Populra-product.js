export default function WithoutStatus(props) {
    const {
        status, productName, manufacturerName, price, discountPrice
    } = props;

    return (
        <>
            <div class="popular-products_container">
                <img src="./img/shop/product-1-1.jpg" alt="" class="popular-products__pictured" />

                <a href="#" class="popular-product__text-category">{status}</a>
                <a href="#" class="popular-products__description-dish">{productName}</a>
                <div class="popular-products__fa-star-container">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <p class="popular-products__title-company">By <span
                    class="popular-products--color-green">{manufacturerName}</span></p>
                <div class="popular-products__price-add-container">
                    <div class="popular-products__price">
                        <span class="popular-products--color-green">{price} <span
                            class="popular-products__discount-price">{discountPrice}</span></span>
                    </div>
                    <div class="popular-products__add">
                        <i class="fa-solid fa-cart-shopping"></i>
                        Add
                    </div>
                </div>
            </div>

        </>
    )
}

export default function Products(props) {
    const {
        status, viewName, productName, manufacturerName, price, discountPrice
    } = props;

    return (
        <>
            <div class="popular-products_container">
                <div class="popular-products__descriptions">{viewName}</div>
                <img src="./img/shop/product-1-1.jpg" alt="" class="popular-products__pictured" />

                <a href="#" class="popular-product__text-category">{status}</a>
                <a href="#" class="popular-products__description-dish">{productName}</a>
                <div class="popular-products__fa-star-container">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <p class="popular-products__title-company">By <span
                    class="popular-products--color-green">{manufacturerName}</span></p>
                <div class="popular-products__price-add-container">
                    <div class="popular-products__price">
                        <span class="popular-products--color-green">{price} <span
                            class="popular-products__discount-price">{discountPrice}</span></span>
                    </div>
                    <div class="popular-products__add">
                        <i class="fa-solid fa-cart-shopping"></i>
                        Add
                    </div>
                </div>
            </div>

        </>
    )
}

export default function PopularProduct(props) {
    const {
        viewName, name, manufacturer
    } = props;


    return (
        <>
            <div class="popular-products-container">
                <div class="popular-products__categories">
                    <p class="popular-products__categories-header">Popular Products</p>
                    <ul class="popular-products__item">
                        <li class="popular-products__list">
                            <a href="#" class="popular-products__click popular-products--color-green">All</a>
                        </li>
                        <li class="popular-products__list">
                            <a href="#" class="popular-products__click">Milks & Dairles</a>
                        </li>
                        <li class="popular-products__list">
                            <a href="#" class="popular-products__click">Coffes & Teas</a>
                        </li>
                        <li class="popular-products__list">
                            <a href="#" class="popular-products__click">Pet Foods</a>
                        </li>
                        <li class="popular-products__list">
                            <a href="#" class="popular-products__click">Meats</a>
                        </li>
                        <li class="popular-products__list">
                            <a href="#" class="popular-products__click">Vegetables</a>
                        </li>
                        <li class="popular-products__list">
                            <a href="#" class="popular-products__click">Fruits</a>
                        </li>
                    </ul>
                </div>

                <div class="popular-products">
                    <Products viewName='Hot' productName='Seeds of Change Organic Quinoa, Brown, & Red
                        Rice' manufacturerName='NestFood' status='Snack' price='$28.85' discountPrice='$32.0'/>
                    <Products viewName='Sale' productName='All Natural Italian-Style Chicken Meatballs' manufacturerName='Stouffer' status='Hodo Foods' price='$52.85' discountPrice='$55.8'/>
                    <Products viewName='New' productName='Angie’s Boomchickapop Sweet & Salty Kettle Corn' manufacturerName=' StarKist' status='Snack' price='$48.85' discountPrice='$52.8'/>
                    <WithoutStatus productName='Foster Farms Takeout Crispy Classic Buffalo Wings' manufacturerName='NestFood' status='Vegetables' price='$17.85' discountPrice='$19.8'/>
                    <Products viewName='-14%' productName='Blue Diamond Almonds Lightly Salted Vegetables' manufacturerName='NestFood' status='Pet Foods' price='$23.85' discountPrice='$25.8'/>
                    <WithoutStatus productName='Chobani Complete Vanilla Greek Yogurt' manufacturerName='NestFood' status='Hodo Foods' price='$54.85' discountPrice='$55.8'/>
                    <WithoutStatus productName='Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g' manufacturerName='NestFood' status='Meats' price='$32.85' discountPrice='$33.8'/>
                    <Products viewName='Sale' productName='Encore Seafoods Stuffed Alaskan Salmon' manufacturerName='NestFood' status='Snack' price='$35.85' discountPrice='$37.8'/>
                    <Products viewName='Hot' productName='Gorton’s Beer Battered Fish Fillets with soft paper' manufacturerName='Old El Paso' status='Coffes' price='$23.85' discountPrice='$25.8'/>
                    <WithoutStatus productName='Haagen-Dazs Caramel Cone Ice Cream Ketchup' manufacturerName='Tyson' status='Cream' price='$22.85' discountPrice='$24.8'/>
                </div>
            </div>
        </>
    )
}