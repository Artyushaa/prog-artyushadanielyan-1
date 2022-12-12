import { createStore, compose, applyMiddleware } from "redux";
import RootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";

const sayHiOnDispatch = (createStore) => {
    return (rootReducer, preloadedState, enhancers) => {
        const store = createStore(rootReducer, preloadedState, enhancers);
        function newDispatch(action) {
            const result = store.dispatch(action);
            console.log("Hi!");
            return result;
        }
        return { ...store, dispatch: newDispatch };
    };
};
const includeMeaningOfLife = (createStore) => {
    return (rootReducer, preloadedState, enhancers) => {
        const store = createStore(rootReducer, preloadedState, enhancers);
        function newGetState() {
            return {
                ...store.getState(),
                meaningOfLife: 42,
            };
        }
        return { ...store, getState: newGetState };
    };
};

function print1(storeAPI) {
    return function (next) {
        return function (action) {
            console.log("1");
            return next(action)
        }
    }
}
function print2(storeAPI) {
    return function (next) {
        return function (action) {
            console.log("2");
            return next(action)
        }
    }
}
function print3(storeAPI) {
    return function (next) {
        return function (action) {
            console.log("3");
            return next(action)
        }
    }
}

const delayedActionMiddleware = storeAPI => next => action => {
    if (action.type === 'todos/todoAdded') {
        setTimeout(() => {
            // Delay this action by one second
            next(action)
        }, 1000)
        return
    }

    return next(action)
}

const fetchTodosMiddleware = storeAPI => next => action => {
    if (action.type === 'todos/fetchTodos') {
        // Make an API call to fetch todos from the server
        client.get('todos').then(todos => {
            // Dispatch an action with the todos we received
            storeAPI.dispatch({ type: 'todos/todosLoaded', payload: todos })
        })
    }

    return next(action)
}

const thunkMiddlewareEnhanceerWithDevTools = composeWithDevTools(
    applyMiddleware(thunkMiddleware, logger)
)
const composeEnhancerWithDevTools = composeWithDevTools(
    applyMiddleware(print1, print2, print3)
)
const middleWareEnhancer = applyMiddleware(print1, print2, print3)
const composeEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife, middleWareEnhancer, composeEnhancerWithDevTools, thunkMiddlewareEnhanceerWithDevTools)

const store = createStore(RootReducer, undefined, thunkMiddlewareEnhanceerWithDevTools)

export default store;