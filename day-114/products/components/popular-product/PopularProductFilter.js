import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getPopularProductFilterName, popularProductFilterItem } from "../../features/product-filter/productFilterSlice";
import { useDispatch } from "react-redux";

export default function PopularProductFilterItem() {

    const dispatch = useDispatch()
    let filterState = useSelector((state) => state.filter.popularProductFilterState);

    useEffect(() => {
        dispatch(getPopularProductFilterName())
    }, [])

    function handleClick(categoryId) {
        dispatch(popularProductFilterItem(categoryId))
    }

    return (
        <>
            <div className="popular-products__categories">
                <p className="popular-products__categories-header">Popular Products</p>
                <li className="popular-products__list">
                    <a href="#" className="popular-products__all popular-products--color-green">All</a>
                </li>
                {
                    filterState.map((product) => {
                        return <>
                            <p className="popular-products__list" onClick={() => {
                                handleClick(product.categoryId)
                            }}>{product.source}</p>
                        </>
                    })
                }
            </div>
        </>
    )
}
