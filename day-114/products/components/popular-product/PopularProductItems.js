import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductInShoppingCart, addProductAndEnlargeQuantity } from '../../features/shoppingCart/shoppingCartSlice';
import MyApp from '../../pages';
import PopularProductFilterItem from './PopularProductFilter';

export default function PopularProductsItem(props) {

    const [active, setActive] = useState(false)

    const { products, error } = props

    const dispatch = useDispatch();

    const shoppingCartItemMapState = useSelector((state) => state.shoppingCart.shoppingCartItemMap);

    function handleClickAddToCart(productId) {
        dispatch(addProductInShoppingCart(productId))
    }

    function shoppingCartQuantity(id) {
        return shoppingCartItemMapState[id]?.quantity + 1
    }

    return (
        <>
            <div className="popular-products">
                <PopularProductFilterItem />
                {
                    products.map((product) => {
                        return <div className="popular-products_container">
                            <div className="popular-products__descriptions">Hot</div>
                            <img src={product.image} alt="" className="popular-products__pictured" />
                            <div className="popular-product__product-info-container">
                                <a href="#" className="popular-product__text-category">Snack</a>
                                <Link className='popular-products__description-dish' href={`/products/${product.productId}`}>{product.name}</Link>
                                <div className="popular-products__fa-star-container">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <p className="popular-products__title-company">By <span
                                    className="popular-products--color-green">NestFood</span></p>
                                <div className="popular-products__price-add-container">
                                    <div className="popular-products__price">
                                        <span className="popular-products--color-green">{product.price + "$"} <span
                                            className="popular-products__discount-price">$32.0</span></span>
                                    </div>
                                    <button disabled={active} onClick={() => {
                                        setActive(true)
                                        setTimeout(() => {
                                            setActive(false)
                                        },1000)
                                        if (shoppingCartItemMapState[product.productId]) {
                                            dispatch(addProductAndEnlargeQuantity({ quantity: shoppingCartQuantity(product?.productId), id: shoppingCartItemMapState[product.productId] }))
                                        } else {
                                            handleClickAddToCart(product?.productId)
                                        }
                                    }} className="popular-products__add-btn"><i className="fa-solid fa-cart-shopping"></i>Add</button>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}

