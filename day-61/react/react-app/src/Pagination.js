import { useState } from "react"

export default function PagInation() {

    const [color, setColor] = useState()

    function handleRight (e) {
        setColor(e.target.style.color = "red")
    }
    return (
        <>
            <div className="pag-ination">
                <button className="pag-ination__btn-arrow"><i class="fa-solid fa-arrow-left"></i></button>
                <div className="pag-ination__slide">
                    <button className="pag-ination__btn">1</button>
                    <button className="pag-ination__btn">2</button>
                    <button className="pag-ination__btn">3</button>
                    <button className="pag-ination__btn">4</button>
                    <button className="pag-ination__btn">5</button>
                    <button className="pag-ination__btn">6</button>
                    <button className="pag-ination__btn">7</button>
                </div>
                <button className="pag-ination__btn-arrow-right" onClick={handleRight}><i class="fa-solid fa-arrow-right"></i></button>

            </div>
        </>
    )
}