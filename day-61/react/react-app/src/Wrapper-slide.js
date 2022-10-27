import { useRef } from "react"


export default function WrapperSlide({onClick}) {

    const slideRef = useRef()
    return (
        <>
            <div className="wrapper__slide">
                <div className="wrapper__slide__container">
                    <div className="wrapper__slide__grocery-deals a">
                        <img className="wrapper__slide__pictures" src="img/slider/slider-1.png" alt="" />
                        <div className="slide-header-text">Don't miss amazing grocery deals</div>
                        <div className="slide-title">Sign up for the daily newsletter</div>
                        <form action="" className="slide-email">
                            <i className="fa-solid fa-paper-plane"></i>
                            <input type="email" className="slide-email__field" placeholder="Your emaill address" />
                            <button className="slide-subscribe-btn">Subscribe</button>
                        </form>
                    </div>

                    <div className="wrapper__slide__vegetables a">
                        <img className="wrapper__slide__pictures" src="img/slider/slider-2.png" alt="" />
                        <div className="slide-header-text">Fresh Vegetables Big discount</div>
                        <div className="slide-title">Save up to 50% of on yout first order</div>
                        <form action="" className="slide-email">
                            <i className="fa-solid fa-paper-plane"></i>
                            <input type="email" className="slide-email__field" placeholder="Your emaill address" />
                            <button className="slide-subscribe-btn">Subscribe</button>
                        </form>
                    </div>

                </div>
                <button className="wrapper__slide__left-btn">
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button className="wrapper__slide__right-btn">
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
                {/* <button className="wrapper__slide__switch-btn"></button>
            <button className="wrapper__slide__switch-btn"></button> */}
            </div>
        </>
    )
}