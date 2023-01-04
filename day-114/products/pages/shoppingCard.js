import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeProductQuantity } from '../features/shoppingCart/shoppingCartSlice';
import { deleteCart } from '../features/shoppingCart/shoppingCartSlice';
import { getShoppingCartData } from '../features/shoppingCart/shoppingCartSlice';

export default function ShoppingCart() {

    const dispatch = useDispatch();

    function handleClickDeleteCart(cartId) {
        dispatch(deleteCart(cartId))
    }

    function handleProductAmountChange(data) {
        dispatch(changeProductQuantity(data))
    }

    const shoppingCartItemMapState = useSelector((state) => state.shoppingCart.shoppingCartItemMap)

    function shoppingCartQuantity(id) {
        return shoppingCartItemMapState[id].quantity
    }


    let data = Object.values(shoppingCartItemMapState).map(el => {
        return <div className="shoppingCard">
            <input type="checkbox" />
            <div className="shoppingCard__pictured-container">
                <img src={el.image} className="shoppingCard__pictured"></img>
            </div>
            <div className="shoppingCard__info-container">
                <p className="shoppingCard__name">{el.name}</p>
                <div className="shoppingCard__purchase-information">
                    <p className="shoppingCard__price">${el.price}</p>
                    <input type="number"
                        value={shoppingCartQuantity(el.productId)}
                        className="shoppingCard__quantity"
                        onChange={(e) => {
                            handleProductAmountChange({ quantity: e.target.value, id: el.cartId })
                        }} />

                    <p className="shoppingCard__price-subtotal">${
                        shoppingCartQuantity(el.productId) * el.price
                    }</p>

                    <button onClick={() => {
                        handleClickDeleteCart(el.cartId)
                    }} className="shoppingCard__delete">Delete</button>
                </div>
            </div>
        </div>
    })

    useEffect(() => {
        dispatch(getShoppingCartData())
    }, [])

    return (
        <>
            <div className="wrapper">
                {data}
            </div>
        </>
    )
}

