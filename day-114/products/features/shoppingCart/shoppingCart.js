import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addedToOrders, getOrders } from './shoppingCartSlice';
import { changeProductQuantity } from './shoppingCartSlice';
import { deleteCart } from './shoppingCartSlice';
import { getShoppingCartData } from './shoppingCartSlice';

export default function ShoppingCartItems() {
    const dispatch = useDispatch();

    function handleClickDeleteCart(ids) {
        dispatch(deleteCart(ids))
    }

    function handleProductAmountChange(data) {
        dispatch(changeProductQuantity(data))
    }

    const shoppingCartItemMapState = useSelector((state) => state.shoppingCart.shoppingCartItemMap)

    function shoppingCartQuantity(id) {
        return shoppingCartItemMapState[id]?.quantity
    }

    function addedToOrdersData() {
        let ordersData = Object.values(shoppingCartItemMapState).map((product) => {
            return {
                "quantity": product.quantity,
                "productId": product.productId,
                "product": product.product
            }
        })
        dispatch(addedToOrders(ordersData))
    }


    let data = Object.values(shoppingCartItemMapState).map(el => {
        return <div className="shoppingCart" key={el.productId}>
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
                        handleClickDeleteCart({cartId: el.cartId, productId: el.productId})
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
                <button onClick={addedToOrdersData}>Order</button>
            </div>
        </>
    )
}