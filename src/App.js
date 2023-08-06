import React from "react";
import "./App.css"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {Home} from "./app/layout/Home";
import {Marketplace} from "./app/views/Marketplace";
import {Profile} from "./app/views/Profile";
import {loadUser, loadUserInfo} from "./app/core/loader";
import {ProfileCard} from "./app/shared/components/ProfileCard";
import {NotFound} from "./app/views/NotFound";
import {ErrorBoundary} from "./app/views/ErrorBoundary";
import {Reel} from "./app/views/Reel";


function App() {
    let router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Home/>} >
                <Route path='/marketplace' element={<Marketplace/>} errorElement={<ErrorBoundary />}/>
                <Route path='/reel' element={<Reel/>} errorElement={<ErrorBoundary />}/>
                <Route path='/profile' element={<Profile/>} loader={loadUser} errorElement={<ErrorBoundary />}>
                    <Route path='/profile/:id' element={<ProfileCard/>} loader={async ({params}) => {
                        return await loadUserInfo(params.id);
                    }} errorElement={<ErrorBoundary />}/>
                </Route>
                <Route path='*' element={<NotFound/>} />
            </Route>
        )
    );

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;