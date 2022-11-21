import { createStore } from "./createStore.mjs";

function football(state, action) {
    if (action.type === 'FOOTBALLTRANSFERS') {
        state.playersName = 'Bale',
            state.playersAge = 33,
            state.transferPrice = "$105.56 million"
    } else if (action.type === 'MOVIES') {
        state.moviesName = 'Red Notice',
            state.movieGenres = 'Action Movie, Comedy, Thriller'
        state.releaseDate = 'November 5, 2021'
    }
    return state
}

let store = createStore(football, {})
let movie = createStore(football, {})

store.subscribe(() => {
    const state = store.getState()
    console.log(state);
})
movie.subscribe(() => {
    const state = movie.getState()
    console.log(state);
})
store.dispatch({ type: "FOOTBALLTRANSFERS" })
movie.dispatch({ type: "MOVIES" })



