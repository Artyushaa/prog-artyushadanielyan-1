import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import transformCartItemData from "../../pages/transformCartItem";
import { addProductAndEnlargeQuantityRequest, addProductItemInShoppingCart, changeProductQuantityRequest, deleteCartItem, getShoppingCartDataRequest } from "./shoppingCartAPI";

const initialState = {
    saveDeleteCartId: [],
    shoppingCartItemMap: {},
    errorMassage: ''
}

export const deleteCart = createAsyncThunk(
    'shoppingCart/deleteCart',
    async (cartId, { rejectWithValue, dispatch }) => {
        let result = deleteCartItem(cartId)
        return result
    }
)

export const getShoppingCartData = createAsyncThunk(
    'shoppingCart/shoppingCartData',
    async (_, { rejectWithValue, dispatch }) => {
        let result = await getShoppingCartDataRequest();
        return result.data
    }
)

export const addProductInShoppingCart = createAsyncThunk(
    "shoppingCart/addProductInShoppingCart",
    async (id, { rejectWithValue, dispatch }) => {
        let data = await addProductItemInShoppingCart(id)
        // return data.data
    }
)

export const changeProductQuantity = createAsyncThunk(
    'shoppingCart/changeProductQuantity',
    async (data, { rejectWithValue, dispatch }) => {
        let result = await changeProductQuantityRequest(data)
        return result.data
    }
)

export const addProductAndEnlargeQuantity = createAsyncThunk(
    'shoppingCart/addProductAndEnlargeQuantity',
    async (data, { rejectWithValue, dispatch }) => {
        let result = await addProductAndEnlargeQuantityRequest(data)
        return result.data
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
                console.log(action.payload, 'actionaaaaa');
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
            .addCase(addProductInShoppingCart.rejected, (state, action) => {
                if (action.error.message) {
                    state.errorMassage = action.error.message
                }
            })
    }
})


export const { addToCart, saveStateProduct, shoppingCartData } = shoppingCartReducer.actions;
export default shoppingCartReducer.reducer;

