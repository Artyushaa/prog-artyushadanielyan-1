import axios from 'axios'
import transformCartItemData from '../../pages/transformCartItem'

export async function DeleteCartItem(cartId) {
    let token = localStorage.getItem('token')
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
    console.log(response, 'response');

    return {
        data: transformCartItemData(response.data),
        status: response.status,
        statusText: response.statusText
    }
}