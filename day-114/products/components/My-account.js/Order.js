import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getOrders } from "../../features/shoppingCart/shoppingCartSlice";

export default function Order() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrders())
    }, [])

    let orderDataState = useSelector(state => state.shoppingCart.orderData)
    console.log(orderDataState);

    return (
        <>
            <div className="my-order">
                <h1 className="my-order__header">Your Orders</h1>
                <div className="my-order__data-container">
                    <div className="my-order__data-info">
                        <ul className="my-order__list-container">
                            <li className="my-order__list">Order</li>
                            <li className="my-order__list">Date</li>
                            <li className="my-order__list">Status</li>
                            <li className="my-order__list">Total</li>
                            <li className="my-order__list">Actions</li>
                        </ul>
                        {
                            orderDataState.map((order) => {
                                return <div className="my-order__product-data">
                                    <p className="my-order__product-data-order">#{order.orderId}</p>
                                    <p className="my-order__product-data-date">{order.date}</p>
                                    <p className="my-order__product-data-status">{order.status}</p>
                                    <p className="my-order__product-data-total">{order.sales[0].product.price * order.sales[0].quantity}</p>
                                    <p className="my-order__product-data-actions">View</p>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}