import axios from 'axios'

async function asyncRequestDeleteCart(url, cartId) {
    let token = localStorage.getItem('token')
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "session=s%3A2Uga7S3EoPMYFYSp28DXkkA8S8uw8wBy.9Qc2KwSU7gSmH49cu2juNVNRZqvxgD4fqosITwnAgqQ");
    myHeaders.append("Authorization", `Bearer ${token}`);
    let res = await axios.delete(`${url}/${cartId}`, {
        headers: myHeaders,
        body: JSON.stringify(cartId),
        redirect: 'follow'
    })
    let result = await res.json()
    return result
} 

export default asyncRequestDeleteCart