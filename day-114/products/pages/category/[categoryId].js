import { wrapper } from "../../app/store";
import { getFilterProducts } from "../../features/product-filter/productFilterSlice";

export default function categoryProduct(props) {
    return (
        <>
            {props.filterProductsState}
        </>
    )
}

export const getServerSideProps = wrapper.getServerSideProps((store) => {
    return async function ({ req, res, params, resolvedUrl, query }) {
        
        return {
            props: {
                filterProductsState
            }
        }
    }
})