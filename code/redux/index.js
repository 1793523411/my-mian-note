function createStore(reducer, preloadedState, enhancer) {
    if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
        enhancer = preloadedState
        preloadedState = undefined
    }

    if (typeof enhancer !== "undefined") {
        return enhancer(createStore)(reducer, preloadedState)
    }
    let currentRedcer = reducer;
    let currentState = preloadedState
    let currentLiteners = []
    let nextListeners = currentLiteners;
    let isDispatching = false;

    function ensureCanMutateNextListeners() {
        if (nextListeners === currentLiteners) {
            nextListeners = currentLiteners.slice()
        }
    }

    function getState() {
        return currentState;
    }

    function subscribe(listener) {
        if (typeof listener !== "function") {
            throw new Error("Expected the listener to be a function")
        }
        if (isDispatching) {
            throw new Error("error")
        }
        let isSubscribed = true;
        ensureCanMutateNextListeners();
        nextListeners.push(listener)
        return function unsubscribe() {
            if (!isSubscribed) {
                return
            }
            isSubscribed = false;
            ensureCanMutateNextListeners()
            const index = nextListeners.indexOf(listener)
            nextListeners.splice(index, 1)
        }
    }

    function dispatch(action) {
        if (!isPlainObject(action)) {
            throw new Error("error")
        }
        if (typeof action.type === "undefined") {
            throw new Error("error")
        }
        if (isDispatching) {
            throw new Error(error)
        }
        try {
            isDispatching = true;
            currentState = currentRedcer(currentState, action)
        } finally {
            isDispatching = false
        }
        const listeners = (currentLiteners = nextListeners);
        for (let i = 0; i < listeners.length; i++) {
            const listener = listeners[i]
            listener()
        }
        return action
    }

    function replaceReducer(nextReducer) {
        currentRedcer = nextListeners;
        dispatch({ typeof: ActionTypes.REPLACE });
        return store;
    }
    dispatch({ type: ActionTypes.INIT });
    function observable() {

    }
    return {
        dispatch,
        subscribe,
        getState,
        replaceReducer,
        [$$observable]: observable
    }
}