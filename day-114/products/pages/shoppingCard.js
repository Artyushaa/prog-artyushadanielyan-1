import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quantityProduct } from '../features/addCart/shopingCartSlice';
import { deleteCart } from '../features/deleteCard/deleteSlice';
import { shopingCartData } from '../features/addCart/shopingCartSlice';

export default function ShopingCart({ result }) {

    const dispatch = useDispatch();

    function handleClickDeleteCart(cartId) {
        dispatch(deleteCart(cartId))
    }

    function subotalPrice(data) {
        dispatch(quantityProduct(data))
    }

    const quantityState = useSelector((state) => state.addCart.quantity);
    const quantityIncrementState = useSelector((state) => state.addCart.quantityIncrement);
    const addProductAndEnlargeQuantityState = useSelector((state) => state.addCart.addProductAndEnlargeQuantity);
    const shopingCartDataState = useSelector((state) => state.addCart.shopingCartData);


    let data = shopingCartDataState.map(el => {
        return <div className="shoppingCard">
            <input type="checkbox" />
            <div className="shoppingCard__pictured-container">
                <img src={el.image} className="shoppingCard__pictured"></img>
            </div>
            <div className="shoppingCard__info-container">
                <p className="shoppingCard__name">{el.name}</p>
                <div className="shoppingCard__purchase-information">
                    <p className="shoppingCard__price">${el.price}</p>
                    <input type="number" value={quantityIncrementState - 1} className="shoppingCard__quantity" onChange={(e) => {
                        subotalPrice({ quantity: e.target.value, id: el.cartId })
                    }} />
                    <p className="shoppingCard__price-subtotal">${
                        addProductAndEnlargeQuantityState ?? el.price * addProductAndEnlargeQuantityState ? el.price * addProductAndEnlargeQuantityState : el.price * quantityState ? el.price * quantityState : el.price
                    }</p>
                    <button onClick={() => {
                        handleClickDeleteCart(el.cartId)
                    }} className="shoppingCard__delete">Delete</button>
                </div>
            </div>
        </div>
    })

    useEffect(() => {
        async function shopingCart() {
            let token = 'eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODg1MzBjODYzNTAzMGIxZDA4NTE0YyIsImlhdCI6MTY2OTg3OTEwMn0.7r84ouxrKweV6Z2m-cvD8OS1RZY4yxPcWu2Pj3FKyOD5LxbhQmbKPrLxJ3NI9C4Q'
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", `Bearer ${token}`)

            let response = await fetch("https://420.canamaster.net/cart/rest/1/100", {
                method: "GET",
                headers: myHeaders,
            });

            let res = await response.json();
            let data = res.data.map(prod => {
                return {
                    name: prod.product.descriptions[0].name,
                    id: prod.product.productId,
                    price: prod.product.price,
                    image: `https://420.canamaster.net/media/image/d/350/${prod?.product?.imageMain[0]?.image?.url}`,
                    quantity: prod.quantity,
                    cartId: prod.cartId,
                }
            })
            dispatch(shopingCartData(data))
        }
        shopingCart()
    }, [])

    return (
        <>
            <div className="wrapper">
                {data}
            </div>
        </>
    )
}

