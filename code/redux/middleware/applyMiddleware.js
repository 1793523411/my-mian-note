export default function applyMiddleware(...middlewares) {
    return (createStore) => (...args) => {
        const store = createStore(...args)
        let dispatch = () => {
            throw new Error('error')
        }
        const middlewareAPI = {
            getState: store.getState,
            dispatch: (...args) => dispatch(...args),
        };
        const chain = middlewares.map((middleware) => middleware(middlewareAPI));
        dispatch = compose(...chain)(store.dispatch)
        return {
            ...store,
            dispatch
        }
    };
}