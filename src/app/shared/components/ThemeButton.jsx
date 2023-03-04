import {ThemeContext} from "./ThemeContext";
import React from "react";

class ThemeButton extends React.Component{
    render() {

        let props = this.props;
        let theme =  this.context;
        return (
            <button
                {...props}
                style = {{background: theme.background}}
            >

            </button>
        );
    }
}

ThemeButton.contextType = ThemeContext;

export default ThemeButton;