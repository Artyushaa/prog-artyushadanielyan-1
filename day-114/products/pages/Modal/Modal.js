import { useSelector } from "react-redux"

export default function Modal({ active, setActive }) {

    const errorState = useSelector(state => state.shoppingCart.errorMassage)

    return (
        <>
            <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
                <div className="modal__content" onClick={e => e.stopPropagation()}>
                    <p className="modal__error">{errorState}</p>
                </div>
            </div>
        </>
    )
}