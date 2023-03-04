import React from "react";
import Page from "../../layout/Page"

class HomeComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            main : this.props.main
        }
    }

    render() {
        return (
            <Page main = {this.state.main}  />
        )
    }
}

export default HomeComponent;