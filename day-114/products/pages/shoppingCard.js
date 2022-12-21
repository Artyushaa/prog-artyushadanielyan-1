import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quantityProduct } from '../features/addCart/shopingCartSlice';
import { deleteCart } from '../features/deleteCard/deleteSlice';
import { getShopingCartData } from '../features/addCart/shopingCartSlice';

export default function ShopingCart() {

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
    const shopingCartItemMapState = useSelector((state) => state.addCart.shopingCartItemMap)
    const getShopingCartDataState = useSelector((state) => state.addCart.getShopingCartData)
    
    function shopingCartQuantity(id) {
        return shopingCartItemMapState[id].quantity
    }


    let data = Object.values(shopingCartItemMapState).map(el => {
        return <div className="shoppingCard">
            <input type="checkbox" />
            <div className="shoppingCard__pictured-container">
                <img src={el.image} className="shoppingCard__pictured"></img>
            </div>
            <div className="shoppingCard__info-container">
                <p className="shoppingCard__name">{el.name}</p>
                <div className="shoppingCard__purchase-information">
                    <p className="shoppingCard__price">${el.price}</p>
                    <input type="number" value={shopingCartQuantity(el.cartId)} className="shoppingCard__quantity" onChange={(e) => {
                        subotalPrice({ quantity: e.target.value, id: el.cartId })
                    }} />
                    <p className="shoppingCard__price-subtotal">${
                        shopingCartQuantity(el.cartId) * el.price
                    }</p>
                    <button onClick={() => {
                        handleClickDeleteCart(el.cartId)
                    }} className="shoppingCard__delete">Delete</button>
                </div>
            </div>
        </div>
    })

    useEffect(() => {
        dispatch(getShopingCartData())
    }, [])

    return (
        <>
            <div className="wrapper">
                {data}
            </div>
        </>
    )
}

