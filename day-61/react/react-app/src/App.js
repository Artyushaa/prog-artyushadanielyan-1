
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import WrapperSlide from "./Wrapper-slide";
import FeaturedProduct from "./Featured-product";
import PopularProduct from "./Popular-product";
import DailySells from "./Daily-sells";
import DealsDay from "./Deals-day";
import TopProduct from "./Top-product";
import PagInation from "./Pagination";

function App() {

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <PagInation />
        <Routes>
          <Route path="/Home1" element={<>
          <WrapperSlide/>
          <FeaturedProduct/>
          <PopularProduct/>
          <DailySells />
          <DealsDay />
          <TopProduct />
          </>} 
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
