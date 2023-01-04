import DailySells from "../components/Daily-sells";
import DealsDay from "../components/Deals-day";
import FeaturedProduct from "../components/Featured-product";
import PopularProduct from "../components/Popular-product";
import TopProduct from "../components/Top-product";
import WrapperSlide from "../components/Wrapper-slide";

export default function MyApp() {
    return (
        <>
            <WrapperSlide />
            <FeaturedProduct />
            <PopularProduct />
            <DailySells />
            <DealsDay/>
            <TopProduct />
        </>
    )
}