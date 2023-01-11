import axios from 'axios'
import transformCartItemData from '../../pages/transformCartItem'

export async function deleteCartItem(cartId) {
    let token = localStorage.getItem('token');
    let res = await axios.delete(`https://420.canamaster.net/cart/rest/${cartId}`, cartId, {
        headers: { Authorization: `Bearer ${token}` },
    })
    let result = {
        status: res.status,
        statusText: res.statusText,
        data: res.data
    }
    return result
}

export async function getShoppingCartDataRequest() {
    let token = localStorage.getItem('token')
    let response = await axios.get("https://420.canamaster.net/cart/rest/1/100", {
        headers: { Authorization: `Bearer ${token}` }
    });

    return {
        data: response.data.data.map((cartItem) => {
            return transformCartItemData(cartItem)
        }),
        status: response.status,
        statusText: response.statusText
    }
}

export async function addProductItemInShoppingCart(id) {
    let addItem = {
        "quantity": 1,
        "productId": id
    };
    let token = localStorage.getItem('token')
   
    let response = await axios.post("https://420.canamaster.net/cart/rest/", addItem, {
        headers: { Authorization: `Bearer ${token}` },
    });

    return {
        data: transformCartItemData(response.data),
        status: response.status,
        statusText: response.statusText
    }
}

export async function changeProductQuantityRequest(data) {
    let addItem = {
        "quantity": data.quantity,
        "cartId": data.id
    };

    let token = localStorage.getItem('token')
    let response = await axios.put(`https://420.canamaster.net/cart/rest/${addItem.cartId}`, addItem, {
        headers: {
            "Authorization": `Bearer ${token}`
        },
    });

    return {
        data: {
            name: response.data.product.descriptions[0].name,
            price: response.data.product.price / 1,
            image: `https://420.canamaster.net/media/image/d/350/${response.data?.product?.imageMain[0]?.image?.url}`,
            quantity: response.data.quantity,
            cartId: response.data.cartId,
            productId: response.data.product_id,
        },
        status: response.status,
        statusText: response.statusText
    }
}

export async function addProductAndEnlargeQuantityRequest(data) {
    let addItem = {
        "quantity": data.quantity,
        "cartId": data.id.cartId
    };

    let token = localStorage.getItem('token')
    console.log(token,'token');
    let response = await axios.put(`https://420.canamaster.net/cart/rest/${addItem.cartId}`, addItem, {
        headers: { "Authorization": `Bearer ${token}` },
    });

    return {
        data: {
            name: response.data.product.descriptions[0].name,
            price: response.data.product.price / 1,
            image: `https://420.canamaster.net/media/image/d/350/${response.data?.product?.imageMain[0]?.image?.url}`,
            quantity: response.data.quantity,
            cartId: response.data.cartId,
            productId: response.data.product_id,
        },
        status: response.status,
        statusText: response.statusText
    }
}