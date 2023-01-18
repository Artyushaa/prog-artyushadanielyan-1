import { useState } from "react";

export function FeaturedProductCard({ name, quantity, url, classname }) {
    return (
        <>
            <div className={classname}>
                <img src={url} alt="" className="featured-product__pictured" />
                <p className="featured-product-name">{name}</p>
                <p className="featured-product-quantity">{quantity}</p>
            </div>
        </>
    )
}

export function FeaturedProductThreeCard({ name, url }) {
    return (
        <>
            <div className="featured-product-three-card">
                <img src={url} alt="" className="featured-product__three-pictured" />
                <p className="featured-product__three-card-header">{name}</p>
                <button className="featured-product__three-card-btn">Shop Now<i
                    className="fa-solid fa-arrow-right-long"></i></button>
            </div>
        </>
    )
}


export default function FeaturedProduct() {

    const [moveLeft, setMoveLeft] = useState(false);
    const [className, setClassName] = useState('')
    const [featuredProducts, setFeaturedProducts] = useState([
        {
            name: "Headphone",
            quantity: "87 items",
            url: "img/shop/cat-15.png",
            classname: "featured-product-card featured-product--aqua",
        },
        {
            name: "Cake & Milk",
            quantity: "26 items",
            url: "img/shop/cat-13.png",
            classname: "featured-product-card",
        },
        {
            name: "Organic Kiwi",
            quantity: "28 items",
            url: "img/shop/cat-12.png",
            classname: "featured-product-card featured-product--pink1",
        },
        {
            name: "Peach",
            quantity: "14 items",
            url: "img/shop/cat-11.png",
            classname: "featured-product-card featured-product--aqua",
        },
        {
            name: "Read Apple",
            quantity: "54 items",
            url: "img/shop/cat-9.png",
            classname: "featured-product-card featured-product--pink2",
        },
        {
            name: "Snack",
            quantity: "56 items",
            url: "img/shop/cat-3.png",
            classname: "featured-product-card featured-product--pink3",
        },
        {
            name: "Vegatables",
            quantity: "72 items",
            url: "img/shop/cat-1.png",
            classname: "featured-product-card featured-product--pink1",
        },
        {
            name: "Cake & Milk",
            quantity: "26 items",
            url: "img/shop/cat-2.png",
            classname: "featured-product-card",
        },
        {
            name: "Black lum",
            quantity: "123 items",
            url: "img/shop/cat-4.png",
            classname: "featured-product-card featured-product--pink4",
        },
        {
            name: "Custrad apple",
            quantity: "34 items",
            url: "img/shop/cat-5.png",
            classname: "featured-product-card featured-product--pink1",
        },
        {
            name: "Coffe & Tea",
            quantity: "89 items",
            url: "img/shop/cat-14.png",
            classname: "featured-product-card featured-product--pink5",
        },
        {
            name: "Headphone",
            quantity: "87 items",
            url: "img/shop/cat-15.png",
            classname: "featured-product-card featured-product--aqua",
        },
    ]);
    function moveToRight() {
        setMoveLeft(true);
        const array = [...featuredProducts]
        setClassName('featured-product__right-btn')
        setTimeout(() => {
            array.pop()
            array.unshift(array[array.length - 1])
            setFeaturedProducts([...array])
            setMoveLeft(false)
        }, 700)
    }
    function moveToLeft() {
        setMoveLeft(true);
        const array = [...featuredProducts]
        setClassName('featured-product__left-btn')
        setTimeout(() => {
            array.shift()
            array.push(array[0])
            setFeaturedProducts([...array])
            setMoveLeft(false)
        }, 700)
    }

    return (
        <>
            <div className="featured-product-container">
                <div className="featured-categories">
                    <p className="featured-categories__text">Fetured Categories</p>
                    <ul className="featured-categories__item">
                        <li className="featured-categories__list"><a className="featured-categories__click" href="#">Cake & Milk</a>
                        </li>
                        <li className="featured-categories__list"><a className="featured-categories__click" href="#">Coffes &
                            Teas</a></li>
                        <li className="featured-categories__list"><a
                            className="featured-categories__click featured-categories--green-text" href="#">Ped Froods</a>
                        </li>
                        <li className="featured-categories__list"><a className="featured-categories__click" href="#">Vegetables</a>
                        </li>
                    </ul>
                    <div className="featured-categories__btn-container">
                        <button className="featured-categories__left-btn" onClick={moveToRight}>←</button>
                        <button className="featured-categories__right-btn" onClick={moveToLeft}>→</button>
                    </div>
                </div>

                <div className="featured-product">
                    <div className="featured-product__slide">
                        {
                            featuredProducts.map((product) => {
                                return <FeaturedProductCard
                                    name={product.name}
                                    quantity={product.quantity}
                                    url={product.url}
                                    classname={moveLeft ? `${product.classname} ${className}` : product.classname} />
                            })
                        }
                    </div>
                </div>

                <div className="featured-product__three-card-container">
                    <FeaturedProductThreeCard name='Everyday Fresh & Clean with Our Products' url='img/banner-imgs/banner-1.png' />
                    <FeaturedProductThreeCard name='Make your Breakfast Healthy and Easy' url='img/banner-imgs/banner-2.png' />
                    <FeaturedProductThreeCard name='The best Organic Products Online' url='img/banner-imgs/banner-3.png' />
                </div>
            </div>
        </>
    )
}