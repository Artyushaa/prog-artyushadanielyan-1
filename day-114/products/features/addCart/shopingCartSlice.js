import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import transformCartItemData from "../../pages/transformCartItem";

const initialState = {
    product: [],
    shopingCartData: [],
    quantity: 1,
    addProductData: {},
    addProductAndEnlargeQuantity: 0,
    shopingCartItemMap: {},
}

export const getShopingCartData = createAsyncThunk(
    'addProduct/shopingCartData',
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
    "addProduct/addProductInShoppingCart",
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
    'addProduct/changeProductQuantity',
    async (data, { rejectWithValue, dispatch }) => {

        console.log('data: ', data);

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
        let resultData = transformCartItemData(resData)
        return resultData
    }
)

export const addProductAndEnlargeQuantity = createAsyncThunk(
    'addProduct/addProductAndEnlargeQuantity',
    async (data, { rejectWithValue, dispatch }) => {
        let addItem = {
            "quantity": data.quantity,
            "cartId": data.id
        };
        // console.log(data.quantity,'quantity');
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
        return resData.body.quantity
    }
)

export const getProduct1 = createAsyncThunk(
    'addProduct/getProduct1',
    async (_, { rejectWithValue, dispatch }) => {
        let res = await fetch('https://420.canamaster.net/api/v1/products/category/new/0/1/30?filterIds=[]&&attributeIds=[]&&productIds=[]&&parentCategoryId=23&&priceMinMax=[]&&brandIds=[]');
        let result = await res.json();
        return result.products
    }
)

const addProduct = createSlice({
    name: 'addProduct',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.product = action.payload
        },
        shopingCartData(state, action) {
            state.shopingCartData = action.payload
        },
        saveStateProduct(state, action) {
            state.quantityIncrement += 1
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProduct1.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getProduct1.fulfilled, (state, action) => {
                state.product = action.payload
            })
            .addCase(changeProductQuantity.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(changeProductQuantity.fulfilled, (state, action) => {
                // debugger
                state.shopingCartItemMap[action.payload.cartId] = action.payload
            })
            .addCase(getShopingCartData.fulfilled, (state, action) => {
                action.payload.forEach((cartItem, index) => {
                    state.shopingCartItemMap[cartItem.cartId] = action.payload[index]
                })
            })
            .addCase(addProductAndEnlargeQuantity.fulfilled, (state, action) => {
                state.addProductAndEnlargeQuantity = action.payload
            })
            .addCase(addProductInShoppingCart.fulfilled, (state, action) => {
                state.addProductData[action.payload.productId] = action.payload
            })
    },
})


export const { addToCart, saveStateProduct, shopingCartData } = addProduct.actions;
export default addProduct.reducer;

