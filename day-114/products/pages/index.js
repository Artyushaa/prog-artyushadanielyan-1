import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DailySells from "../components/Daily-sells";
import DealsDay from "../components/Deals-day";
import FeaturedProduct from "../components/Featured-product";
import PopularProduct from "../components/popular-product/PopularProductContainer";
import TopProduct from "../components/Top-product";
import WrapperSlide from "../components/Wrapper-slide";
import Modal from "./Modal/Modal";

export default function MyApp(props) {

    const errorState = useSelector(state => state.shoppingCart.errorMassage);

    const { products } = props

    const [modalActive, setModalActive] = useState(false)

    useEffect(() => {
        if (errorState) {
            setModalActive(true)
        }
    }, [errorState])


    return (
        <>
            <div className="wrapper">
                <WrapperSlide />
                <FeaturedProduct />
                <PopularProduct products={products} />
                <DailySells />
                <DealsDay />
                <TopProduct />
                <Modal active={modalActive} setActive={setModalActive} />
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
            image: "https://420.canamaster.net/media/image/d/350/".concat(products[i].imageMain[0].image.url),
            productId: products[i].productId,
        }
        newArray.push(data)
    }

    return {
        props: {
            products: newArray,
        },
    }
}