import produce from "immer";
import { combineReducers } from "redux";
import createSlice from "../counter/counterSlice";

export const todosInitialState = {
    amount: 0,
    loading: false,
    ids: [],
};

// export const todosAsync = createAsyncThunk() {
//     "todos/todosLoaded"
//         // async ({id}) => {

//     // }
// }

const todosSlice = createSlice({
    name: 'todos',
    initialState: todosInitialState,
    reducers: {
        todosLoading() {

        },
        todosLoaded() {

        }
    }
})

export const { todosLoading, todosLoaded } = todosSlice.actions;

// export const todosInitialState = {
//     amount: 0,
//     loading: false,
//     ids: [],
// };
// function todosReducer(state = todosInitialState, action) {
//     console.log("todos", state);
//     switch (action.type) {
//         case "todos/todosLoading": {
//             return produce(state, (todos) => {
//                 todos.loading = true;
//             });
//             return {
//                 ...state,
//                 todos: {
//                     ...state.todos,
//                     loading: true,
//                 },
//             };
//         }
//         case "todos/todosLoaded": {
//             return produce(state, (draft) => {
//                 draft.loading = false;
//                 draft.ids.push(...action.payload);
//             });
//             return {
//                 ...state,
//                 todos: {
//                     ...state.todos,
//                     ids: [...state.todos.ids, ...action.payload],
//                     loading: false,
//                 },
//             };
//         }
//         default:
//             return state;
//     }
// }
// export function fetchTodos() {
//     return async (dispatch, getState) => {
//         dispatch(todosLoading());
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/todos"
//         );
//         const todos = await response.json();
//         dispatch(todosLoaded(todos));
//     };
// }
// export const todosLoading = () => ({ type: "todos/todosLoading" });
// export const todosLoaded = (todos) => ({
//     type: "todos/todosLoaded",
//     payload: todos,
// });
// export function fetchTodo({ id }) {
//     return async (dispatch, getState) => {
//         dispatch(todosLoading());
//         const response = await fetch(
//             `https://jsonplaceholder.typicode.com/todos/${id}`
//         );
//         const todos = await response.json();
//         dispatch(todosLoaded(todos));
//     };
// }
// export function getTodos(state) {
//     return state.todos.ids;
// }
// export default todosReducer;