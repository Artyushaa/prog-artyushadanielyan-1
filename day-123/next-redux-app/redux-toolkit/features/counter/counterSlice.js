import { createSlice } from "@reduxjs/toolkit";

export const counterInitialState = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState: counterInitialState,
    reducers: {
        increment(state) {
            state.value += 1
        },
        decrement(state) {
            state.value -= 1
        },
        incrementByCount(state, action) {
            state.value += action.payload
        }
    }
})

export function valueSelector(state) {
    return state.counter.value
}

console.log(counterSlice);

export const { increment, decrement, incrementByCount } = counterSlice.actions;
export default counterSlice.reducer;
