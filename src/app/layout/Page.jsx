import React from "react";
import PageLayout from "./pageLayout/PageLayout";
import TopBar from "./topBar/TopBar";
import SideNav from "./nav/SideNav";
import Footer from "./footer/Footer";
import Section from "./section/Section";


class Page extends React.Component{

        render() {
            const topBar = <TopBar />;
            const sideNav = <SideNav />;
            const footer = <Footer />;
            const section =  <Section />

                return (
                    <div>
                           <PageLayout topBar = {topBar}  sideNav={sideNav} footer={footer} section={section} />
                    </div>
                );
        }
}

export default Page;