import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cart } from '../redux-toolkit/src/features/deleteCard/deleteSlice';

export default function WishList({ result }) {
    

    const dispatch = useDispatch();
    // let a = useSelector((state) => state.delete.cartId)
    // console.log(a,'delete');

    let data = result.map(e => {
        return <div className="shoppingCard">
            <input type="checkbox" />
            <div className="shoppingCard__pictred-container">
                <img src={e.image} className="shoppingCard__pictured"></img>
            </div>
            <div className="shoppingCard__info-container">
                <p className="shoppingCard__name">{e.name}</p>
                <div className="shoppingCard__purchase-information">
                    <p className="shoppingCard__price">${e.price}</p>
                    <input type="number" placeholder="1" className="shoppingCard__quantity" />
                    <p className="shoppingCard__price-subtotal">${e.price}</p>
                    <button onClick={() => {
                        dispatch(cart(e.cartId))
                    }} className="shoppingCard__delete">Delete</button>
                </div>
            </div>
        </div>
    })

    return (
        <>
            <div className="wrapper">
                {data}
            </div>
        </>
    )
}

export async function getServerSideProps() {
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
            image: `https://420.canamaster.net/media/image/d/350/${prod.product.imageMain[0].image.url}`,
            quantity: prod.quantity,
            cartId: [prod.cartId],
        }
    })
    return {
        props: { result: data }
    }
}