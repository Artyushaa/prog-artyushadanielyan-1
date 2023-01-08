import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

const initialState = {
    popularProductFilterState: [],
    popularProductFilterItemState: [],
    filterProduct: [],
    getFilterProducts: [],
    categoryId: 0,
}

export const getPopularProductFilterName = createAsyncThunk(
    'productFilter/popularProductFilter',
    async (_, { rejectWithValue, dispatch }) => {
        let res = await fetch('https://420.canamaster.net/api/v1/products/shop/categories/0/23');
        let result = await res.json();
        return result.categories
    }
)

export const popularProductFilterItem = createAsyncThunk(
    'productFilter/popularProductFilterItem',
    async (categoryId, { rejectWithValue, dispatch }) => {
        let res = await fetch(`https://420.canamaster.net/api/v1/products/category/new/${categoryId}/1/10?filterIds=[]&&attributeIds=[]&&productIds=[]&&parentCategoryId=23&&priceMinMax=[]&&brandIds=[]`)
        let result = await res.json()
        console.log(result.products, 'result');
        return result.products
    }
)

export const getFilterProduct = createAsyncThunk(
    'productFilter/getFilterProducts',
    async (_, { rejectWithValue, dispatch }) => {
        let res = await fetch('https://420.canamaster.net/api/v1/products/shop/categories/0/23');
        let result = await res.json();
        return result
    }
)

export const getFilterProducts = createAsyncThunk(
    'productFilter/getFilterProduct',
    async (categoryId, { rejectWithValue, dispatch }) => {
        let res = await fetch(`https://420.canamaster.net/api/v1/products/category/new/${categoryId}/1/10?filterIds=[]&&attributeIds=[]&&productIds=[]&&parentCategoryId=23&&priceMinMax=[]&&brandIds=[]`)
        let result = await res.json()
        return result.products
    }
)

export const getPageInation = createAsyncThunk(
    'productFilter/getPageInation',
    async (page, { rejectWithValue, dispatch, getState }) => {
        let categoryId = getState().filter.categoryId
        let res = await fetch(`https://420.canamaster.net/api/v1/products/category/new/${categoryId}/${page}/10?filterIds=[]&&attributeIds=[]&&productIds=[]&&parentCategoryId=23&&priceMinMax=[]&&brandIds=[]`)
        let result = await res.json()
        return result.products
    }
)

const productFilter = createSlice({
    name: "productFilter",
    initialState,
    reducers: {
        filterProduct(state, action) {
            state.filterProduct = action.payload
        },
        setCategoryId(state, action) {
            state.categoryId = action.payload
            console.log(state.categoryId, 'state.categoryId');
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getFilterProduct.pending, (state) => {
                state.filterProduct = 'loading';
            })
            .addCase(getFilterProduct.rejected, (state, action) => {
                console.log(action, 'action');
            })
            .addCase(getFilterProduct.fulfilled, (state, action) => {
                state.filterProduct = action.payload
            })
            .addCase(getFilterProducts.fulfilled, (state, action) => {
                state.getFilterProducts = action.payload
            })
            .addCase(getPageInation.fulfilled, (state, action) => {
                state.getFilterProducts = action.payload
            })
            .addCase(getPopularProductFilterName.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getPopularProductFilterName.fulfilled, (state, action) => {
                state.popularProductFilterState = action.payload
                state.status = 'ok'
            })
            .addCase(popularProductFilterItem.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(popularProductFilterItem.fulfilled, (state, action) => {
                state.popularProductFilterItemState = action.payload
                state.status = 'ok'
            })
            .addCase(HYDRATE, (state, action) => {
                return { ...state, ...action.payload }
            })
    },
})

export const { filterProduct, setCategoryId } = productFilter.actions
export default productFilter.reducer;