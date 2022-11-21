export function createStore(rootReducer, initialState) {
    let state = rootReducer(initialState, { type: '__INIT__' });
    let subscribes = []

    return {
        dispatch(action) {
            state = rootReducer(state, action)
            subscribes.forEach(e => e())
        },
        subscribe(callback) {
            subscribes.push(callback)
        },
        getState() {
            return state
        }
    }
}