export default function transformCartItemData(data) {
    // console.log(data, 'data');
    return {
        name: data.product.descriptions[0].name,
        price: data.product.price / 1,
        image: `https://420.canamaster.net/media/image/d/350/${data?.product?.imageMain[0]?.image?.url}`,
        quantity: data.quantity,
        cartId: data.cartId,
        productId: data.productId,
    }
}