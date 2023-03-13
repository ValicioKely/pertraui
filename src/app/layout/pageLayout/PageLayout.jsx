import React from "react";
import Navbar from "../topBar/TopBar";
import Section from "../section/Section";
import {Story} from "../story/story";

function StoryContainer(props) {
    return (
        <div className= " ">
            {props.children}
        </div>
    );
}

class PageLayout extends React.Component{


    render() {
        return (
            <div className= "bg-gray-100 h-screen overflow-hidden">
                <Navbar />
                <div className="h-screen grid grid-cols-4 lg:grid-cols-12 ">
                        <Section >
                            <StoryContainer >
                                <div className="col-span-1">
                                    <Story/>
                                </div>
                                <div className="col-span-1">
                                    <Story/>
                                </div>
                                <div className="col-span-1">
                                    <Story/>
                                </div>
                                <div className="col-span-1">
                                    <Story/>
                                </div>
                            </StoryContainer>
                        </Section>
                </div>
            </div>
        );
    }
}

export default PageLayout;