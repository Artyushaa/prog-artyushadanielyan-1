import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
let initialState = {
    cartId: []
}

export const deleteCart = createAsyncThunk(
    'delete/deleteCart',
    async (cartId, { rejectWithValue, dispatch }) => {
        let token = 'eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODg1MzBjODYzNTAzMGIxZDA4NTE0YyIsImlhdCI6MTY2OTg3OTEwMn0.7r84ouxrKweV6Z2m-cvD8OS1RZY4yxPcWu2Pj3FKyOD5LxbhQmbKPrLxJ3NI9C4Q'
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "session=s%3A2Uga7S3EoPMYFYSp28DXkkA8S8uw8wBy.9Qc2KwSU7gSmH49cu2juNVNRZqvxgD4fqosITwnAgqQ");
        myHeaders.append("Authorization", `Bearer ${token}`);
        let res = fetch(`https://420.canamaster.net/cart/rest/${cartId}`, {
            method: 'DELETE',
            headers: myHeaders,
            body: JSON.stringify(cartId),
            redirect: 'follow'
        })
        let result = await res.json()
        return result
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
        extraReducers: (builder) => {
            builder
                .addCase(deleteCart.fulfilled, (state, action) => {
                    state.product = action.payload
                })
        },
    }
})

export const { delteShopCard } = deleteShopCard.actions;
export default deleteShopCard;

