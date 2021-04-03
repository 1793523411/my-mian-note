function createStore(reducer, preloadedState, enhancer) {
    if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
        enhancer = preloadedState;
        preloadedState = undefined
    }
    if (typeof enhancer !== "undefined") {
        return enhancer(createStore)(Reducer, preloadedState)
    }
    let currentReducer = reducer;
    let currentState = preloadedState;
    let currentListeners = [];
    let nextListeners = currentListeners;
    let isDisPatching = false;

    function ensureCanMutateNextListeners() {
        if (nextListeners === currentListeners) {
            nextListeners = currentListeners
        }
    }

    function getState() {
        return currentState
    }

    function subscribe(listener) {
        if (isDisPatching) {
            throw new Error('error')
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
            throw new Error('error')
        }
        if (isDisPatching) {
            throw new Error('error')
        }
        try {
            isDisPatching = true;
            currentState = currentReducer(currentState, action)
        } finally {
            isDisPatching = false
        }

        const listeners = (currentListeners = nextListeners);
        for (let i = 0; i < listeners.length; i++) {
            const listener = listeners[i];
            listener()
        }
        return action
    }

    function replaceReducer() {
        currentReducer = nextListeners;
        dispatch({ type: ActionTypes.REPLACE })
        return store
    }

    dispatch({ type: ActionTypes.INIT })

    //?它在 redux 内部使用，开发者一般不会直接接触
    function observable() {
        //····
        const outerSubscribe = subscribe;
        return {
            subscribe(observer) {
                if (typeof observer !== 'object' || observer === null) {
                    throw new TypeError("error")
                }
                function observeState() {
                    const observerAsObserver = observable;
                    if (observerAsObserver.next) {
                        observerAsObserver.next(getState())
                    }
                }

                observeState()
                const unsubscribe = outerSubscribe(observeState);
                return { unsubscribe }
            },

            [$$observable]() {
                return this
            }
        }
    }

    return {
        dispatch,
        subscribe,
        getState,
        replaceReducer,
        [$$observable]: observable
    }
}