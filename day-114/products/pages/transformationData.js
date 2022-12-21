export default async function transformationData(data) {
    // console.log(data,'data');
    let resultData = data.map((e) => {
        return {
            name: e.product.descriptions[0].name,
            price: e.product.price,
            image: `https://420.canamaster.net/media/image/d/350/${e?.product?.imageMain[0]?.image?.url}`,
            quantity: e.quantity,
            cartId: e.cartId,
            productId: e.productId
        }
    })
    return resultData
}