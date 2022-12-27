import Link from "next/link"
export function DropDownHome(props) {
    const {
        classname
    } = props
    return (
        <>
            <div className={classname}>
                <Link className="departament__list__drop-down-text" href="/products">Home 1</Link>
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

        </>
    )
}