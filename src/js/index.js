
import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

import Tasks from "./containers/Tasks";
import Settings from "./containers/Settings";


const store = configureStore();

render(
    <Provider store={store}>
        <div>
            <Tasks />
            <Settings />
        </div>
    </Provider>,
    document.getElementById("root")
);