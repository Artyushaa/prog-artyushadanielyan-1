import initialState from "./initialState";
import produce from "immer";
import { combineReducers } from "redux";

// function RootReducer(state = initialState, action) {
//     switch (action.type) {
//         case "counter/increment":
//             return produce(state, (draft) => {
//                 draft.counter.value += 1
//             })

//             return {
//                 ...state,
//                 counter: {
//                     ...state.counter,
//                     value: state.counter.value + 1
//                 }
//             };
//         case "counter/decrement":
//             return produce(state, (draft) => {
//                 draft.counter.value -= 1
//             })

//             return {
//                 ...state,
//                 counter: {
//                     ...state.counter,
//                     value: state.counter.value - 1
//                 }
//             };
//         case "todos/todosLoaded":
//             return {
//                 ...state,
//                 todos: {
//                     ...state.todos,
//                     ids: [
//                         ...state.todos.ids,
//                         ...action.payload.todos
//                     ]
//                 }
//             };
//         case "todos/todosLoading":
//             return {
//                 ...state,
//                 todos: {
//                     ...state.todos,
//                     loading: true

//                 }
//             }
//         default:
//             return state
//     }
// }

function counterReducer(state = initialState.counter, action) {
    switch (action.type) {
        case "counter/increment":
            return produce(state, (draft) => {
                draft.value += 1
            })

            return {
                ...state,
                counter: {
                    ...state.counter,
                    value: state.counter.value + 1
                }
            };
        case "counter/decrement":
            return produce(state, (draft) => {
                draft.value -= 1
            })

            return {
                ...state,
                counter: {
                    ...state.counter,
                    value: state.counter.value - 1
                }
            };
        default:
            return state
    }
}

function todosReducer(state = initialState.todos, action) {
    switch (action.type) {
        case "todos/todosLoaded":
            return produce(state, (draft) => {
                draft.loading = false;
                draft.ids.push(...action.payload.todos)
            })

            return {
                ...state,
                todos: {
                    ...state,
                    ids: [
                        ...state.ids,
                        ...action.payload.todos
                    ]
                }
            };
        case "todos/todosLoading":
            return produce(state, (draft) => {
                draft.loading = true
            })
            return {
                ...state,
                todos: {
                    ...state,
                    loading: true

                }
            }
        default:
            return state
    }
}

const rootReducer1 = combineReducers({
    todos: todosReducer,
    counter: counterReducer
})

export default rootReducer1