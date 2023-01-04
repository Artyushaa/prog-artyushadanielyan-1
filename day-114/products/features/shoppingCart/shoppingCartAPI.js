import axios from 'axios'

export async function asyncRequestDeleteCart(url, cartId) {
    let token = localStorage.getItem('token')
    let res = await axios.delete(`${url}/${cartId}`, {
        headers: { Authorization: `Bearer ${token}` },
        data: {
            cartId
        },
    })
    let result = await res.json()
    return result
} 
