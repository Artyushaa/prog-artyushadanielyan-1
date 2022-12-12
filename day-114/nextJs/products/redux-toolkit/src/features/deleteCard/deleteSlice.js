import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
let initialState = {
    cartId: []
}

export const cart = createAsyncThunk(
    'delete/cart',
    async (cartId, { rejectWithValue, dispatch }) => {
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "session=s%3A2Uga7S3EoPMYFYSp28DXkkA8S8uw8wBy.9Qc2KwSU7gSmH49cu2juNVNRZqvxgD4fqosITwnAgqQ");
        let res = fetch(`https://420.canamaster.net/cart/rest/${cartId}`, {
            method: 'DELETE',
            headers: myHeaders,
            body: JSON.stringify(cartId),
            redirect: 'follow'
        })
        let result = (await res).json()
        dispatch(deleteShopCard(result))
    }
)


const deleteShopCard = createSlice({
    name: 'delete',
    initialState,
    reducers: {
        delteShopCard(state, action) {
            state.cartId = action.payload
            console.log(state.cartId, 'cartId');
        }
    },
    extraReducers: {
        [cart.fulfilled]() { console.log('getProducts: fulfilled') },
        [cart.pending]() { console.log('getProducts: pending') },
        [cart.rejected]() { console.log('getProducts: rejected') }
    }
})

export const { delteCard } = deleteShopCard.actions;
export default deleteShopCard;

