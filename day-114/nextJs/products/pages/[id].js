export default function PopularProductItem({product}) {

    return (
        <>
            {/* <div className="popular-product-item"> */}
                <img src={product.image} className="popular-product-item__pictured"/> 
                <p>{product.name}</p>
                <p>{product.price}</p>
            {/* </div> */}
        </>
    )
}

export async function getServerSideProps({params}) {
    const res = await fetch(`https://420.canamaster.net/api/v1/products/${params.id}?fields%5Bprice%5D=1&fields%5Bpath%5D=1&fields%5Bicon%5D=1&fields%5Bimages%5D=1&fields%5BimageMain%5D=1&fields%5Bvideos%5D=1&fields%5BproductId%5D=1&fields%5Battributes%5D=1&fields%5Bdescriptions%5D=1&fields%5Boption%5D=1&fields%5BcurrentPrice%5D=1&fields%5Bbrands%5D=1&fields%5Bfilters%5D=1`)
    const data = await res.json()
    console.log(data);
    let newData = {
        id: data.productId,
        price: data.price,
        name: data.descriptions[0].name,
        image: `https://420.canamaster.net/media/image/d/350/${data.imageMain[0].image.url}`
    }


    return {
        props: {
            product: newData
        }
    }
}