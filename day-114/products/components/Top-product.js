export function TopProductCard({ productName, descriptionName, price, discountPrice, url }) {
    return (
        <>
            <div class="top-product__info-card">
                <div class="top-product__pictured-card">
                    <img src={url} alt="" class="top-product__pictured" />
                </div>
                <div class="top-product__description">
                    <a href="#" class="top-product__description-text">{descriptionName}</a>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <span class="top-product__price">{price} <span class="top-product__discount-price">{discountPrice}</span></span>
                </div>
            </div>
        </>
    )
}

export default function TopProduct() {
    return (
        <>
            <div class="top-products">
                <div id="top-products__for-div">
                    <div class="top-product__profile-div">
                        <h4 class="top-product__profile">Top Selling</h4>
                        <hr class="top-product__hr" />
                        <div class="top-product__mini-hr"></div>
                    </div>
                    <TopProductCard url="img/shop/thumbnail-1.jpg" descriptionName="Nestle Original Coffee-Mate Coffee Creamer" price="$32.85" discountPrice="$33.0" />
                    <TopProductCard url="img/shop/thumbnail-2.jpg" descriptionName="Nestle Original Coffee-Mate Coffee Creamer" price="$32.85" discountPrice="$33.0" />
                    <TopProductCard url="img/shop/thumbnail-3.jpg" descriptionName="Nestle Original Coffee-Mate Coffee Creamer" price="$32.85" discountPrice="$33.0" />
                </div>

                <div id="top-products__for-div">
                    <div class="top-product__profile-div">
                        <h4 class="top-product__profile">Trending Products</h4>
                        <hr class="top-product__hr" />
                        <div class="top-product__mini-hr"></div>
                    </div>
                    <TopProductCard url="img/shop/thumbnail-4.jpg" descriptionName="Organic Cage-Free Grade A Large Brown Eggs" price="$32.85" discountPrice="$33.0" />
                    <TopProductCard url="img/shop/thumbnail-5.jpg" descriptionName="Seeds of Change Organic Quinoa, Brown, & Red Rice" price="$32.85" discountPrice="$33.0" />
                    <TopProductCard url="img/shop/thumbnail-6.jpg" descriptionName="Naturally Flavored Cinnamon Vanilla Light Roast Coffee" price="$32.85" discountPrice="$33.0" />
                </div>

                <div id="top-products__for-div">
                    <div class="top-product__profile-div">
                        <h4 class="top-product__profile">Recently added</h4>
                        <hr class="top-product__hr" />
                        <div class="top-product__mini-hr"></div>
                    </div>
                    <TopProductCard url="img/shop/thumbnail-7.jpg" descriptionName="Pepperidge Farm Farmhouse Hearty White Bread" price="$32.85" discountPrice="$33.0" />
                    <TopProductCard url="img/shop/thumbnail-8.jpg" descriptionName="Organic Frozen Triple Berry Blend" price="$32.85" discountPrice="$33.0" />
                    <TopProductCard url="img/shop/thumbnail-9.jpg" descriptionName="Oroweat Country Buttermilk Bread" price="$32.85" discountPrice="$33.0" />
                </div>

                <div id="top-products__for-div">
                    <div class="top-product__profile-div">
                        <h4 class="top-product__profile">Top Rated</h4>
                        <hr class="top-product__hr" />
                        <div class="top-product__mini-hr"></div>
                    </div>
                    <TopProductCard url="img/shop/thumbnail-10.jpg" descriptionName="Foster Farms Takeout Crispy Classic Buffalo Wings" price="$32.85" discountPrice="$33.0" />
                    <TopProductCard url="img/shop/thumbnail-11.jpg" descriptionName="Angie’s Boomchickapop Sweet & Salty Kettle Corn" price="$32.85" discountPrice="$33.0" />
                    <TopProductCard url="img/shop/thumbnail-12.jpg" descriptionName="All Natural Italian-Style Chicken Meatballs" price="$32.85" discountPrice="$33.0" />
                </div>
            </div>
        </>
    )
}