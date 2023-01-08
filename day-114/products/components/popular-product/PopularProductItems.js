import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { addProductInShoppingCart, addProductAndEnlargeQuantity } from '../../features/shoppingCart/shoppingCartSlice';

export default function PopualrProductsItem(props) {
    const { products } = props
    let product = products.products.products.products

    const dispatch = useDispatch();

    const shoppingCartItemMapState = useSelector((state) => state.shoppingCart.shoppingCartItemMap)

    function handleClickAddToCart(productId) {
        dispatch(addProductInShoppingCart(productId))
    }

    function shoppingCartQuantity(id) {
        return shoppingCartItemMapState[id]?.quantity + 1
    }


    return (
        <>
            <div className="popular-products">
                {
                    product.map((product) => {
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
                                    <button disabled={false} onClick={() => {
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

