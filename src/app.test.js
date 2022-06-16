import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import SamuraiApp from "./App";

it('renders poxyi', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SamuraiApp/>)
    ReactDOM.unmountComponentAtNode(div)
});