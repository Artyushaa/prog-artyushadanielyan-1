import PopularProductFilterItem from "./PopularProductFilter"
import PopualrProductsItem from "./PopularProductItems"

export function PopularProductCard(products) {
    return (
        <>
            <PopularProductFilterItem />
            <PopualrProductsItem products={products} />
        </>
    )
}

export default function PopularProduct(products) {
    return (
        <>
            <PopularProductCard products={products} />
        </>
    )
}