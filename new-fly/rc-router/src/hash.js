import React from 'react';
import ReactDOM from 'react-dom';
const { useState, useEffect, useMemo } = React;

const Home = () => {
    const [count, setCount] = useState(0);
    const [nowtime, setNowtime] = useState(0);
    const sum = useMemo(() => ((1 + count) * count) / 2 + " ,random: " + Math.random(), [count]);

    return (
        <div>
            <h1>Home Page</h1>
            <p> count: {count}</p>
            <p> sum: {sum}</p>
            <p> nowtime: {nowtime}</p>
            <button onClick={() => setCount(count + 1)}> add 1 </button>
            <button onClick={() => setNowtime(Date.now())}> set now time </button>
        </div>
    );
};
const About = () => {
    return (
        <div>
            <h1>About Page</h1>
        </div>
    );
};
const NotFound404 = () => {
    return (
        <div>
            <h1>404 Page</h1>
        </div>
    );
};
// ReactDOM.render(<Home />, document.getElementById("app"));
const routes = [
    {
        path: "/",
        name: "home",
        component: <Home />,
    },
    {
        path: "/about",
        name: "about",
        component: <About />,
    },
    {
        path: "*",
        name: "404",
        component: <NotFound404 />,
    },
];

class HashRouter {
    currentUrl = ''; // 当前的URL
    handlers = {};

    constructor() {
        this.refresh = this.refresh.bind(this);
        window.addEventListener('load', this.refresh, false);
        window.addEventListener('hashchange', this.refresh, false);
    }

    getHashPath(url) {
        const index = url.indexOf('#');
        if (index >= 0) {
            return url.slice(index + 1);
        }
        return '/';
    }

    refresh(event) {
        let curURL = '',
            oldURL = null;
        if (event.newURL) {
            oldURL = this.getHashPath(event.oldURL || '');
            curURL = this.getHashPath(event.newURL || '');
        } else {
            curURL = this.getHashPath(window.location.hash);
        }
        this.currentUrl = curURL;
        this.emit('change', curURL, oldURL);
    }
    on(evName, listener) {
        this.handlers[evName] = listener;
    }
    emit(evName, ...args) {
        const handler = this.handlers[evName];
        if (handler) {
            handler(...args);
        }
    }
}
const router = new HashRouter();
router.on("change", (currentUrl, lastUrl) => {
    console.log(currentUrl, lastUrl);
    let route = null;
    for (let i = 0, len = routes.length; i < len; i++) {
        const item = routes[i];
        if (currentUrl === item.path) {
            route = item;
            break;
        }
    }
    if (!route) {
        route = routes[routes.length - 1];
    }
    let container = route.component || <Home />
    ReactDOM.render(container, document.getElementById("app"));
});

