export default function HeaderProfile(props) {
    const {
        profileActionName
    } = props;

    return (
        <>
            <div class="profile__action">
                <a href="#" class="profile__link">
                    <img src="./img/icons/icon-compare.svg" alt="" />
                    <a href="#" class="profile__link">{profileActionName}</a>
                </a>
            </div>

        </>
    )
}

export default function Header(props) {
    const {

    } = props;

    return (
        <>
            <div class="wrapper">
                <header className="header">
                    <nav class="nav">
                        <ul class="nav__info">
                            <li class="nav__info__item"><a class="nav__link" href="#">About Us</a></li>
                            <li class="nav__info__item"><a class="nav__link" href="#">My Account</a></li>
                            <li class="nav__info__item"><a class="nav__link" href="#">Wishlist</a></li>
                            <li class="nav__info__item"><a class="nav__link" href="#">Order Tracking</a></li>
                        </ul>
                        <ul class="nav__ticker">
                            <li class="nav__ticker__item item1">100% Secure delivery without contacting the courier</li>
                            <li class="nav__ticker__item item2">100% Secure delivery without contacting the courier</li>
                            <li class="nav__ticker__item item3">100% Secure delivery without contacting the courier</li>
                        </ul>
                        <ul class="nav__right-info nav--info-style">
                            <li class="nav__right-info__item">Need help? Call Us:<span class="nav--telephon">+ 1800 900</span>
                            </li>
                            <li>
                                <select name="" id="" class="nav__language nav--language">
                                    <option value="elglish"><a href="#">English</a></option>
                                </select>
                            </li>
                            <li>
                                <select name="" id="" class="nav__language nav--language">
                                    <option value="usd"><a href="#">USD</a></option>
                                </select>
                            </li>
                        </ul>
                    </nav>

                    <div class="header__main">
                        <div class="header__main__logo">
                            <img src="./img/icons/logo.svg" alt="" class="header__main__svg" />
                        </div>
                        <div class="header__main__search">
                            <form action="#" class="header__search-container">
                                <select name="" id="" class="header__categories">
                                    <option value="categories">All Categories</option>
                                </select>
                                <input type="text" value="" id="a" class="header__search-item" placeholder="Search for item" />
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </form>
                        </div>
                        <div class="profile">
                            <HeaderProfile profileActionName='Compare'/>
                            <HeaderProfile profileActionName='Wishlist'/>
                            <HeaderProfile profileActionName='Cart'/>
                            <HeaderProfile profileActionName='Account'/>
                        </div>
                    </div>

                    <div class="header__department">
                        <div class="header__brows__categories">
                            <img src="./img/icons/four-squares.svg" alt="" class="header__square" />
                            <select name="" id="" class="header__categorise-text">
                                <option value="">Brows All Categories</option>
                            </select>
                        </div>

                        <ul class="department">
                            <a href="#"><img src="./img/icons/icon-hot.svg" alt="" class="department__link" /></a>
                            <li class="department__list"><a class="department__link" href="#">Deals</a></li>
                            <li class="department__list"><a class="department__link link--green" href="#">Home</a></li>
                            <li class="department__list"><a class="department__link" href="#">About</a></li>
                            <li class="department__list"><a class="department__link" href="#">Shop</a></li>
                            <li class="department__list"><a class="department__link" href="#">Vendors</a></li>
                            <li class="department__list"><a class="department__link" href="#">Mega Menu</a></li>
                            <li class="department__list"><a class="department__link" href="#">Blog</a></li>
                            <li class="department__list"><a class="department__link" href="#">Pages</a></li>
                            <li class="department__list"><a class="department__link" href="#">Contact</a></li>
                        </ul>

                        <div class="suport-center">
                            <div class="suport-center__icon">
                                <img src="./img/icons/icon-headphone.svg" alt="" />
                            </div>
                            <div class="suport-center__number">
                                1900 - 888
                                <span class="suport-center__text">
                                    24/7 Support Center
                                </span>
                            </div>
                        </div>
                    </div>
                </header>
            </div>

        </>
    )
}