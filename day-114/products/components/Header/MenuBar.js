import Link from "next/link"
export function DropDownHome(props) {
    const {
        classname
    } = props
    return (
        <>
            <div className={classname}>
                <Link className="departament__list__drop-down-text" href="#">Home 1</Link>
                <Link className="departament__list__drop-down-text" href="#">Home 2</Link>
                <Link className="departament__list__drop-down-text" href="#">Home 3</Link>
                <Link className="departament__list__drop-down-text" href="#">Home 4</Link>
                <Link className="departament__list__drop-down-text" href="#">Home 5</Link>
                <Link className="departament__list__drop-down-text" href="#">Home 6</Link>
            </div>
        </>
    )
}

export function DropDownShop({ classname }) {
    return (
        <>
            <div className={classname}>
                <Link href="/#" className="departament__list__drop-down-text">Shop Grid – Right Sidebar</Link>
                <Link href="/#" className="departament__list__drop-down-text">Shop Grid – Left Sidebar</Link>
                <Link href="/#" className="departament__list__drop-down-text">Shop List – Right Sidebar</Link>
                <Link href="/#" className="departament__list__drop-down-text">Shop List – Left Sidebar</Link>
                <Link href="/#" className="departament__list__drop-down-text">Shop - Wide</Link>
                <Link href="/#" className="departament__list__drop-down-text">Single Product</Link>
                <Link href="/filterProcutCart" className="departament__list__drop-down-text">Shop – Filter</Link>
                <Link href="/#" className="departament__list__drop-down-text">Shop – Wishlist</Link>
                <Link href="/#" className="departament__list__drop-down-text">Shop – Cart</Link>
                <Link href="/#" className="departament__list__drop-down-text">Shop – Checkout</Link>
                <Link href="/#" className="departament__list__drop-down-text">Shop – Compare</Link>
                <Link href="/#" className="departament__list__drop-down-text">Shop Invoice</Link>
            </div>
        </>
    )
}

export function DropDownPage({ classname }) {
    return (
        <>
            <div className={classname}>
                <Link className="departament__list__drop-down-text" href="#">About Us</Link>
                <Link className="departament__list__drop-down-text" href="#">Contact</Link>
                <Link className="departament__list__drop-down-text" href="/my-account">My Account</Link>
                <Link className="departament__list__drop-down-text" href="#">Login</Link>
                <Link className="departament__list__drop-down-text" href="#">Register</Link>
                <Link className="departament__list__drop-down-text" href="#">Forgot password</Link>
                <Link className="departament__list__drop-down-text" href="#">Reset password</Link>
                <Link className="departament__list__drop-down-text" href="#">Purchase Guide</Link>
                <Link className="departament__list__drop-down-text" href="#">Privacy Policy</Link>
                <Link className="departament__list__drop-down-text" href="#">Terms of Service</Link>
                <Link className="departament__list__drop-down-text" href="#">404 Page</Link>
            </div>
        </>
    )
}

export function DropDownText({ dropDownText }) {
    return (
        <>

        </>
    )
}