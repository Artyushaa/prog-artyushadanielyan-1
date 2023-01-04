import { getFilterProducts, getPageInation } from "../features/product-filter/productFilterSlice";
import { filterProduct } from "../features/product-filter/productFilterSlice";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import { addProductInShoppingCart } from "../features/shopingCart/shopingCartSlice";
import Link from "next/link";
import { setCategoryId } from '../features/product-filter/productFilterSlice'

export default function filterProductCart() {

    function handleClickAddToCart(productId) {
        dispatch(addProductInShoppingCart(productId))
    }

    function handlePageClick(page) {
        dispatch(getPageInation(page))
    }

    function handleClick() {
        dispatch(getFilterProducts(0))
    }

    function handleFilterClick(categoryId) {
        dispatch(setCategoryId(categoryId))
        dispatch(getFilterProducts(categoryId))
    }

    const dispatch = useDispatch();
    let filterProductState = useSelector((state) => state.filter.filterProduct);
    let getFilterProductsState = useSelector((state) => state.filter.getFilterProducts);
    let getProductState = useSelector((state) => state.shopingCartState.product);

    let getFilterProductsData = getFilterProductsState.map((e) => {
        return <div key={e._id} className="filter-product__cart">
            <img src={"https://420.canamaster.net/media/image/d/350/".concat(e?.imageMain[0]?.image?.url)} alt="" className="popular-products__pictured" />
            <Link className='popular-products__description-dish' href={`/products/${e.productId}`}>{e.descriptions.map((e) => {
                return e.name
            })}</Link>
            <div className="popular-products__fa-star-container">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
            </div>
            <div className="popular-products__price-add-container">
                <div className="popular-products__price">
                    <span className="popular-products--color-green">{e.price + "$"}</span>
                </div>
                <button onClick={() => {
                    addProductInShoppingCart(e.productId)
                }} className="popular-products__add-btn"><i className="fa-solid fa-cart-shopping"></i>Add</button>
            </div>
        </div>
    })


    let cartItem = getProductState ? getProductState.map((e) => {
        return <div key={e._id} className="popular-products_container">
            <img src={"https://420.canamaster.net/media/image/d/350/".concat(e.imageMain[0]?.image?.url)} alt="" className="popular-products__pictured" />
            <Link className='popular-products__description-dish' href={`/${e._id}`}>{e.descriptions[0].name}</Link>
            <div className="popular-products__fa-star-container">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
            </div>
            <div className="popular-products__price-add-container">
                <div className="popular-products__price">
                    <span className="popular-products--color-green">{e.price + "$"}</span>
                </div>
                <button onClick={() => {
                    handleClickAddToCart(e.productId)
                }} className="popular-products__add-btn"><i className="fa-solid fa-cart-shopping"></i>Add</button>
            </div>
        </div>
    }) : 0


    async function filterData() {
        let res = await fetch('https://420.canamaster.net/api/v1/products/shop/categories/0/23');
        let result = await res.json();
        let categories = result.categories;

        let filterProduct = categories ? categories.map((e) => {
            let categoryId = e.categoryId
            return <div key={e._id} className="filter-product__name-container">
                <p className="filter-product__name">{e.descriptions[0].name}</p><input type="radio" name="radio" onClick={() => {
                    handleFilterClick(categoryId)
                }} className="filter-product__radio" /></div>
        }) : 'a'
        return filterProduct
    }
    useEffect(() => {
        filterData().then(result => {
            dispatch(filterProduct(result))
        })
    }, [])

    useEffect(() => {
        dispatch(getFilterProducts(0))
    }, [])

    return (
        <>
            <div className="filter-product__container">
                <div className="filter-product">
                    <div className="filter-product__name-container">
                        <p className="filter-product__name">All</p>
                        <input type="radio" name="radio" onClick={handleClick} className="filter-product__radio" />
                    </div>
                    {filterProductState}
                </div>
                <div className="filter-product__cart-container">
                    {getFilterProductsData}
                </div>
                <div className="popular-products">
                    {cartItem}
                </div>
            </div>
            <div className="page-ination">
                <button className="page-ination__left">left</button>
                <button className="page-ination__page" value="1" onClick={(e) => {
                    handlePageClick(e.target.value)
                }}>1</button>
                <button className="page-ination__page" value="2" onClick={(e) => {
                    handlePageClick(e.target.value)
                }}>2</button>
                <button className="page-ination__page" value="3" onClick={(e) => {
                    handlePageClick(e.target.value)
                }}>3</button>
                <button className="page-ination__page" value="4" onClick={(e) => {
                    handlePageClick(e.target.value)
                }}>4</button>
                <button className="page-ination__page" value="5" onClick={(e) => {
                    handlePageClick(e.target.value)
                }}>5</button>
                <button className="page-ination__right">right</button>
            </div>
        </>
    )
}
