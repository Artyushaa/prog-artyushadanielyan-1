import ShoppingCartItems from "../../features/shoppingCart/shoppingCart"

export default function ShoppingCart() {

    return (
        <>
            <div className="shoppingCart__container">
                <div className="shoppingCart__markAllProduct">
                    <p className="shoppingCart__markAllProduct__title"><input type="checkbox" />Product</p>
                    <ul className="shoppingCart__markAllProduct__item-container">
                        <li className="shoppingCart__markAllProduct__item">Unit Price</li>
                        <li className="shoppingCart__markAllProduct__item">Quantity</li>
                        <li className="shoppingCart__markAllProduct__item">Subtotal Remove</li>
                    </ul>
                </div>
                <ShoppingCartItems />
            </div>
        </>
    )
}

