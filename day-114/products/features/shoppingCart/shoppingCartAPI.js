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
            product: response.data.product
        },
        status: response.status,
        statusText: response.statusText
    }
}

export async function addedToOrdersRequest(ordersData) {

    let token = localStorage.getItem('token')

    let body = {
        "status": "new",
        "products": ordersData,
        "orderInfo": {
            "address": {
                "value": "Los Angeles / 1st, Los Angeles, CA 90012, USA",
                "lat": 34.051930954038056,
                "lng": -118.24224398602323,
                "postalCode": "90012",
                "address": "Los Angeles / 1st, Los Angeles, CA 90012, USA"
            },
            "data": {
                "phone": 37494454398,
                "comment": "test",
                "pay": false,
                "taxPrice": 19.125,
                "taxParcent": "22.5%",
                "shipping": 5,
                "address": "Los Angeles / 1st, Los Angeles, CA 90012, USA"
            },
            "pay": {
                "status": "open",
                "method": "payOnDelivery"
            },
            "status": "done",
            "value": {
                "currency": "USD",
                "price": 50
            }
        }
    }

    let response = await axios.post('https://420.canamaster.net/order/rest/sales/add', body, {
        headers: { "Authorization": `Bearer ${token}` }
    })

    return {
        data: response.data,
        status: response.status,
        statusText: response.statusText
    }
}

export async function getOrdersRequest() {

    let token = localStorage.getItem('token')

    let response = await axios.get('https://420.canamaster.net/order/rest/sales/1/10?date=3&status=&search=', {
        headers: { "Authorization": `Bearer ${token}` }
    });

    return {
        data: response.data.sales,
        status: response.status,
        statusText: response.statusText
    }
}
