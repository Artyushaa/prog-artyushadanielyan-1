import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../redux-toolkit/src/features/addCart/addCartSlice';

export default function Products({ products }) {

    const dispatch = useDispatch();

    let productsCard = products.map((e) => {
        return <div key={e.id} className="popular-products_container">
            {/* <div className={classname}>{description}</div> */}
            <img src={e.url} alt="" className="popular-products__pictured" />
            {/* <a href="#" className="popular-product__text-category">{category}</a> */}
            <Link className='popular-products__description-dish' href={`/${e.id}`}>{e.name}</Link>
            <div className="popular-products__fa-star-container">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
            </div>
            {/* <p className="popular-products__title-company">By <span
            className="popular-products--color-green">{companyName}</span></p> */}
            <div className="popular-products__price-add-container">
                <div className="popular-products__price">
                    <span className="popular-products--color-green">{e.price + "$"}</span>
                </div>
                <button onClick={() => {
                    dispatch(getProduct(e.id))
                }} className="popular-products__add-btn"><i className="fa-solid fa-cart-shopping"></i>Add</button>
            </div>
        </div>
    })


    return (
        <>
            <div className="popular-products">
                {productsCard}
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
            url: "https://420.canamaster.net/media/image/d/350/".concat(products[i].imageMain[0].image.url),
            id: products[i].productId
        }
        newArray.push(data)
    }

    return {
        props: {
            products: newArray,
        },
    }
}