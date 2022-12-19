import Link from "next/link"
export function DropDownHome(props) {
    const {
        classname
    } = props
    return (
        <>
            <div className={classname}>
                <DropDownText dropDownText='Home 1' />
                <DropDownText dropDownText='Home 2' />
                <DropDownText dropDownText='Home 3' />
                <DropDownText dropDownText='Home 4' />
                <DropDownText dropDownText='Home 5' />
                <DropDownText dropDownText='Home 6' />
            </div>
        </>
    )
}

export function DropDownShop({ classname }) {
    return (
        <>
            <div className={classname}>
                <DropDownText dropDownText='Shop Grid – Right Sidebar' />
                <DropDownText dropDownText='Shop Grid – Left Sidebar' />
                <DropDownText dropDownText='Shop List – Right Sidebar' />
                <DropDownText dropDownText='Shop List – Left Sidebar' />
                <DropDownText dropDownText='Shop - Wide' />
                <DropDownText dropDownText='Single Product' />
                <DropDownText dropDownText={<Link href="/filterProcutCart" className="departament__list__drop-down-text">Shop – Filter</Link>} />
                <DropDownText dropDownText='Shop – Wishlist' />
                <DropDownText dropDownText='Shop – Cart' />
                <DropDownText dropDownText='Shop – Checkout' />
                <DropDownText dropDownText='Shop – Compare' />
                <DropDownText dropDownText='Shop Invoice' />
            </div>
        </>
    )
}

export function DropDownPage({ classname }) {
    return (
        <>
            <div className={classname}>
                <DropDownText dropDownText='About Us' />
                <DropDownText dropDownText='Contact' />
                <DropDownText dropDownText='Contact' />
                <DropDownText dropDownText='Login' />
                <DropDownText dropDownText='Register' />
                <DropDownText dropDownText='Forgot password' />
                <DropDownText dropDownText='Reset password' />
                <DropDownText dropDownText='Purchase Guide' />
                <DropDownText dropDownText='Privacy Policy' />
                <DropDownText dropDownText='Terms of Service' />
                <DropDownText dropDownText='404 Page' />
            </div>
        </>
    )
}

export function DropDownText({ dropDownText }) {
    return (
        <>
            <Link className="departament__list__drop-down-text" href="/products">{dropDownText}</Link>
        </>
    )
}


export default function Header() {
    return (
        <>
            <header className="header">
                <nav className="nav">
                    <ul className="nav__info">
                        <li className="nav__info__item"><a className="nav__link" href="#">About Us</a></li>
                        <li className="nav__info__item"><a className="nav__link" href="#">My Account</a></li>
                        <li className="nav__info__item"><a className="nav__link" href="#">Wishlist</a></li>
                        <li className="nav__info__item"><a className="nav__link" href="#">Order Tracking</a></li>
                    </ul>
                    <ul className="nav__ticker">
                        <li className="nav__ticker__item item1">100% Secure delivery without contacting the courier</li>
                        <li className="nav__ticker__item item2">100% Secure delivery without contacting the courier</li>
                        <li className="nav__ticker__item item3">100% Secure delivery without contacting the courier</li>
                    </ul>
                    <ul className="nav__right-info nav--info-style">
                        <li className="nav__right-info__item">Need help? Call Us:<span className="nav--telephon">+ 1800 900</span></li>
                        <li className="nav__right-info__item">
                            {/* <select name="" id="" className="nav__language nav--language">
                                <option><a href="#">English</a></option>
                            </select> */}
                        </li>
                        <li className="nav__right-info__item">
                            {/* <select name="" id="" className="nav__language nav--language">
                                <option value="usd"><a href="#">USD</a></option>
                            </select> */}
                        </li>
                    </ul>
                </nav>

                <div className="header__main">
                    <div className="header__main__logo">
                        <img src="img/icons/logo.svg" alt="" className="header__main__svg" />
                    </div>
                    <div className="header__main__search">
                        <form action="#" className="header__search-container">
                            <select name="" id="" className="header__categories">
                                <option value="categories">All Categories</option>
                            </select>
                            <input type="text" value="" id="a" className="header__search-item" placeholder="Search for item" />
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </form>
                    </div>
                    <div className="profile">
                        <div className="profile__action">
                            <div href="#" className="profile__link">
                                <img src="img/icons/icon-compare.svg" alt="" />
                                <Link href="#" className="profile__link">Compare</Link>
                            </div>
                        </div>

                        <div className="profile__action">
                            <div href="#" className="profile__link">
                                <img src="img/icons/icon-heart.svg" alt="" />
                                <a href="#" className="profile__link">Wishlist</a>
                            </div>
                        </div>

                        <div className="profile__action">
                            <div href="#" className="profile__link">
                                <img src="img/icons/icon-cart.svg" alt="" />
                                <Link href="/shoppingCard" className="profile__link">Cart</Link>
                            </div>
                        </div>

                        <div className="profile__action">
                            <div href="#" className="profile__link">
                                <img src="img/icons/icon-user.svg" alt="" />
                                <a href="#" className="profile__link">Account</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header__department">
                    <div className="header__brows__categories">
                        <img src="img/icons/four-squares.svg" alt="" className="header__square" />
                        {/* <select name="" id="" className="header__categorise-text">
                            <option value="">Brows All Categories</option>
                        </select> */}
                    </div>

                    <ul className="department">
                        <a href="#"><img src="img/icons/icon-hot.svg" alt="" className="department__link" /></a>
                        <li className="department__list"><a className="department__link" href="#">Deals</a></li>
                        <li className="department__list"><a className="department__link link--green" href="#">Home</a></li>
                        <DropDownHome classname="departament__list__drop-down-home" />
                        <li className="department__list"><a className="department__link" href="#">About</a></li>
                        <li className="department__list"><a className="department__link" href="#">Shop</a></li>
                        <DropDownShop classname="departament__list__drop-down-shop" />
                        <li className="department__list"><a className="department__link" href="#">Vendors</a></li>
                        <li className="department__list"><a className="department__link" href="#">Mega Menu</a></li>
                        <li className="department__list"><a className="department__link" href="#">Blog</a></li>
                        <li className="department__list"><a className="department__link" href="#">Pages</a></li>
                        <DropDownPage classname="departament__list__drop-down-page" />
                        <li className="department__list"><a className="department__link" href="#">Contact</a></li>
                    </ul>



                    <div className="suport-center">
                        <div className="suport-center__icon">
                            <img src="img/icons/icon-headphone.svg" alt="" />
                        </div>
                        <div className="suport-center__number">
                            1900 - 888
                            <span className="suport-center__text">
                                24/7 Support Center
                            </span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}