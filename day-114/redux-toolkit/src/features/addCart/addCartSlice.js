import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: []
}

export const getProduct = createAsyncThunk(
    "addProduct/getProduct",
    async (id, { rejectWithValue, dispatch }) => {
        let addItem = {
            "quantity": 1,
            "productId": id
        };
        let token = 'eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODg1MzBjODYzNTAzMGIxZDA4NTE0YyIsImlhdCI6MTY2OTg3OTEwMn0.7r84ouxrKweV6Z2m-cvD8OS1RZY4yxPcWu2Pj3FKyOD5LxbhQmbKPrLxJ3NI9C4Q'
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`)
        let response = await fetch("https://420.canamaster.net/cart/rest/", {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(addItem),
            redirect: "follow"
        });

        let resData = await response.json();
        dispatch(addToCart(resData))
    }
)

const addProduct = createSlice({
    name: 'addProduct',
    initialState,
    reducers: {
        addToCart(state, action) {
            console.log(state, 'state');
        }
    }
})


export const { addToCart } = addProduct.actions;
export default addProduct;

