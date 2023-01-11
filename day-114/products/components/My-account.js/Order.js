export default function Order() {
    return(
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
                    </div>
                    <div className="my-order__data"></div>
                </div>
            </div>
        </>
    )
}