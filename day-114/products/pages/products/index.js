import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { addProductInShoppingCart, quantityProduct, saveStateProduct, addProductAndEnlargeQuantity } from '../../features/addCart/shopingCartSlice';

export default function Products({ products }) {

    const dispatch = useDispatch();

    const addProductState = useSelector((state) => state.addCart.addProductData)
    const quantityState = useSelector((state) => state.addCart.quantity)
    const quantityIncrementState = useSelector((state) => state.addCart.quantityIncrement)
    const shopingCartItemMapState = useSelector((state) => state.addCart.shopingCartItemMap)
    console.log(shopingCartItemMapState, 'shopingCartItemMapState');

    function handleClickAddToCart(productId) {
        dispatch(addProductInShoppingCart(productId))
    }

    function shopingCartQuantity(id) {
        return shopingCartItemMapState[id]?.quantity + 1
    }


    return (
        <>
            <div className="popular-products">
                {
                    products.map((product) => {
                        return <div key={product.productId} className="popular-products_container">
                            <img src={product.image} alt="" className="popular-products__pictured" />
                            <Link className='popular-products__description-dish' href={`/products/${product.productId}`}>{product.name}</Link>
                            <div className="popular-products__fa-star-container">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                            <div className="popular-products__price-add-container">
                                <div className="popular-products__price">
                                    <span className="popular-products--color-green">{product.price + "$"}</span>
                                </div>
                                <button onClick={() => {
                                    if (shopingCartItemMapState[product.productId]) {
                                        dispatch(addProductAndEnlargeQuantity({ quantity: shopingCartQuantity(product.productId), id: shopingCartItemMapState[product.productId] }))
                                    } else {
                                        handleClickAddToCart(product?.productId)
                                    }
                                }} className="popular-products__add-btn"><i className="fa-solid fa-cart-shopping"></i>Add</button>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}


export async function getStaticProps() {
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "session=s%3A2Uga7S3EoPMYFYSp28DXkkA8S8uw8wBy.9Qc2KwSU7gSmH49cu2juNVNRZqvxgD4fqosITwnAgqQ");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    const res = await fetch("https://420.canamaster.net/api/v1/products/popular/1/10", requestOptions)
    let result = await res.json()
    let products = result.products
    let newArray = []
    for (let i = 0; i < products.length; i++) {
        let data = {
            name: products[i].descriptions[0].name,
            price: products[i].price,
            image: "https://420.canamaster.net/media/image/d/350/".concat(products[i].imageMain[0].image.url),
            productId: products[i].productId,
        }
        newArray.push(data)
    }

    return {
        props: {
            products: newArray,
        },
    }
}