import React from "react";

class PageLayout extends React.Component{


    render() {
        return (
            <div className= "App">
                <div className= "header">
                    {this.props.topBar}
                </div>
                <div className= "main">
                    <div className= "sideNav">
                        {this.props.sideNav}
                    </div>
                    <div className= "main-content">
                        {this.props.section}
                    </div>
                </div>
                <div className= "footer" >
                    {this.props.footer}
                </div>
            </div>
        );
    }
}

export default PageLayout;