import PopularProductsItem from "./PopularProductItems"

export function PopularProductCard(props) {
    const { products } = props
    return (
        <>
            <PopularProductsItem products={products} />
        </>
    )
}

export default function PopularProduct(props) {
    const { products } = props
    return (
        <>
            <PopularProductCard products={products} />
        </>
    )
}