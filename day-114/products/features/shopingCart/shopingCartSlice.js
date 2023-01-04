import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import transformCartItemData from "../../pages/transformCartItem";

const initialState = {
    saveDeleteCartId: [],
    shopingCartItemMap: {},
}

export const deleteCart = createAsyncThunk(
    'shopingCart/deleteCart',
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

export const getShopingCartData = createAsyncThunk(
    'shopingCart/shopingCartData',
    async (_, { rejectWithValue, dispatch }) => {
        let token = 'eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODg1MzBjODYzNTAzMGIxZDA4NTE0YyIsImlhdCI6MTY2OTg3OTEwMn0.7r84ouxrKweV6Z2m-cvD8OS1RZY4yxPcWu2Pj3FKyOD5LxbhQmbKPrLxJ3NI9C4Q'
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`)

        let response = await fetch("https://420.canamaster.net/cart/rest/1/100", {
            method: "GET",
            headers: myHeaders,
        });

        let res = await response.json();
        let data = res.data.map((cartItem) => {
            return transformCartItemData(cartItem)
        })
        return data
    }
)

export const addProductInShoppingCart = createAsyncThunk(
    "shopingCart/addProductInShoppingCart",
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
        let resultData = transformCartItemData(resData);
        return resultData
    }
)

export const changeProductQuantity = createAsyncThunk(
    'shopingCart/changeProductQuantity',
    async (data, { rejectWithValue, dispatch }) => {
        let addItem = {
            "quantity": data.quantity,
            "cartId": data.id
        };

        let token = 'eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODg1MzBjODYzNTAzMGIxZDA4NTE0YyIsImlhdCI6MTY2OTg3OTEwMn0.7r84ouxrKweV6Z2m-cvD8OS1RZY4yxPcWu2Pj3FKyOD5LxbhQmbKPrLxJ3NI9C4Q'
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`)
        let response = await fetch(`https://420.canamaster.net/cart/rest/${addItem.cartId}`, {
            method: "PUT",
            headers: myHeaders,
            body: JSON.stringify(addItem),
            redirect: "follow"
        });

        let resData = await response.json();

        return {
            name: resData.product.descriptions[0].name,
            price: resData.product.price / 1,
            image: `https://420.canamaster.net/media/image/d/350/${data?.product?.imageMain[0]?.image?.url}`,
            quantity: resData.quantity,
            cartId: resData.cartId,
            productId: resData.product_id,
        }
    }
)

export const addProductAndEnlargeQuantity = createAsyncThunk(
    'shopingCart/addProductAndEnlargeQuantity',
    async (data, { rejectWithValue, dispatch }) => {
        console.log(data, 'data');
        let addItem = {
            "quantity": data.quantity,
            "cartId": data.id.cartId
        };

        let token = 'eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODg1MzBjODYzNTAzMGIxZDA4NTE0YyIsImlhdCI6MTY2OTg3OTEwMn0.7r84ouxrKweV6Z2m-cvD8OS1RZY4yxPcWu2Pj3FKyOD5LxbhQmbKPrLxJ3NI9C4Q'
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`)
        let response = await fetch(`https://420.canamaster.net/cart/rest/${addItem.cartId}`, {
            method: "PUT",
            headers: myHeaders,
            body: JSON.stringify(addItem),
            redirect: "follow"
        });

        let resData = await response.json();

        return {
            name: resData.product.descriptions[0].name,
            price: resData.product.price / 1,
            image: `https://420.canamaster.net/media/image/d/350/${data?.product?.imageMain[0]?.image?.url}`,
            quantity: resData.quantity,
            cartId: resData.cartId,
            productId: resData.product_id,
        }
    }
)

export const getProduct1 = createAsyncThunk(
    'shopingCart/getProduct1',
    async (_, { rejectWithValue, dispatch }) => {
        let res = await fetch('https://420.canamaster.net/api/v1/products/category/new/0/1/30?filterIds=[]&&attributeIds=[]&&productIds=[]&&parentCategoryId=23&&priceMinMax=[]&&brandIds=[]');
        let result = await res.json();
        return result.products
    }
)

const shopingCartReducer = createSlice({
    name: 'shopingCart',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            // builder.addCase(HYDRATE, (state, action) => {
            //     return {
            //         ...state,
            //         ...action.payload
            //     }
            // })
            .addCase(deleteCart.fulfilled, (state, action) => {
                state.saveDeleteCartId = action.payload
            })
            .addCase(getProduct1.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getProduct1.fulfilled, (state, action) => {
                state.product = action.payload
                state.status = 'ok'
            })
            .addCase(changeProductQuantity.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(changeProductQuantity.fulfilled, (state, action) => {
                console.log(action.payload, 'action');
                state.shopingCartItemMap[action.payload.productId] = action.payload
                state.status = 'ok'
            })
            .addCase(getShopingCartData.fulfilled, (state, action) => {
                action.payload.forEach((cartItem, index) => {
                    state.shopingCartItemMap[cartItem.productId] = action.payload[index]
                })
                state.status = 'ok'
            })
            .addCase(addProductAndEnlargeQuantity.fulfilled, (state, action) => {
                state.shopingCartItemMap[action.payload.productId] = action.payload
                state.status = 'ok'
            })
            .addCase(addProductInShoppingCart.fulfilled, (state, action) => {
                state.shopingCartItemMap[action.payload.productId] = action.payload
                state.status = 'ok'
            })
    },
})


export const { addToCart, saveStateProduct, shopingCartData } = shopingCartReducer.actions;
export default shopingCartReducer.reducer;

