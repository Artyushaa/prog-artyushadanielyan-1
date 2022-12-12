
export default function fetchTodos() {

    return async (dispatch, getState) => {
        dispatch(todosLoading())

        const respons = await fetch('https://jsonplaceholder.typicode.com/todos')
        const todos = await respons.json()

        dispatch(todosLoaded(todos))
    }
}

export const todosLoading = () => ({ type: "todos/todosLoading" });


export const todosLoaded = (todos) => ({
    type: 'todos/todosLoaded',
    payload: todos,
})