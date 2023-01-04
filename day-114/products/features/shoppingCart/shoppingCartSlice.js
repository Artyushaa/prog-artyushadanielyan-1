import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import transformCartItemData from "../../pages/transformCartItem";
import { asyncRequestDeleteCart } from "./shoppingCartAPI";

const initialState = {
    saveDeleteCartId: [],
    shoppingCartItemMap: {},
}

export const deleteCart = createAsyncThunk(
    'shoppingCart/deleteCart',
    async (cartId, { rejectWithValue, dispatch }) => {
        let result = asyncRequestDeleteCart("https://420.canamaster.net/cart/rest", cartId)
        return result
    }
)

export const getShoppingCartData = createAsyncThunk(
    'shoppingCart/shoppingCartData',
    async (_, { rejectWithValue, dispatch }) => {
        let token = localStorage.getItem('token')
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
    "shoppingCart/addProductInShoppingCart",
    async (id, { rejectWithValue, dispatch }) => {
        let addItem = {
            "quantity": 1,
            "productId": id
        };
        let token = localStorage.getItem('token')
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
    'shoppingCart/changeProductQuantity',
    async (data, { rejectWithValue, dispatch }) => {
        let addItem = {
            "quantity": data.quantity,
            "cartId": data.id
        };

        let token = localStorage.getItem('token')
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
    'shoppingCart/addProductAndEnlargeQuantity',
    async (data, { rejectWithValue, dispatch }) => {
        console.log(data, 'data');
        let addItem = {
            "quantity": data.quantity,
            "cartId": data.id.cartId
        };

        let token = localStorage.getItem('token')
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
    'shoppingCart/getProduct1',
    async (_, { rejectWithValue, dispatch }) => {
        let res = await fetch('https://420.canamaster.net/api/v1/products/category/new/0/1/30?filterIds=[]&&attributeIds=[]&&productIds=[]&&parentCategoryId=23&&priceMinMax=[]&&brandIds=[]');
        let result = await res.json();
        return result.products
    }
)

const shoppingCartReducer = createSlice({
    name: 'shoppingCart',
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
                state.shoppingCartItemMap[action.payload.productId] = action.payload
                state.status = 'ok'
            })
            .addCase(getShoppingCartData.fulfilled, (state, action) => {
                action.payload.forEach((cartItem, index) => {
                    state.shoppingCartItemMap[cartItem.productId] = action.payload[index]
                })
                state.status = 'ok'
            })
            .addCase(addProductAndEnlargeQuantity.fulfilled, (state, action) => {
                state.shoppingCartItemMap[action.payload.productId] = action.payload
                state.status = 'ok'
            })
            .addCase(addProductInShoppingCart.fulfilled, (state, action) => {
                state.shoppingCartItemMap[action.payload.productId] = action.payload
                state.status = 'ok'
            })
    },
})


export const { addToCart, saveStateProduct, shoppingCartData } = shoppingCartReducer.actions;
export default shoppingCartReducer.reducer;

