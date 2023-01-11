import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeProductQuantity } from './shoppingCartSlice';
import { deleteCart } from './shoppingCartSlice';
import { getShoppingCartData } from './shoppingCartSlice';

export default function ShoppingCartItems() {
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
        return <div className="shoppingCart">
            <input type="checkbox" />
            <div className="shoppingCart__pictured-container">
                <img src={el.image} className="shoppingCart__pictured"></img>
            </div>
            <div className="shoppingCart__info-container">
                <p className="shoppingCart__name">{el.name}</p>
                <div className="shoppingCart__purchase-information">
                    <p className="shoppingCart__price">${el.price}</p>
                    <input type="number"
                        value={shoppingCartQuantity(el.productId)}
                        className="shoppingCart__quantity"
                        onChange={(e) => {
                            handleProductAmountChange({ quantity: e.target.value, id: el.cartId })
                        }} />

                    <p className="shoppingCart__price-subtotal">${
                        shoppingCartQuantity(el.productId) * el.price
                    }</p>

                    <button onClick={() => {
                        handleClickDeleteCart(el.cartId)
                    }} className="shoppingCart__delete">Delete</button>
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