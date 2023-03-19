import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {Home} from "./app/views/Home";
import {Group} from "./app/views/Group";
import {Marketplace} from "./app/views/Marketplace";
import {Videos} from "./app/views/Videos";
import {Reel} from "./app/views/Reel";
import {Friends} from "./app/views/Friends";
import {NotFound} from "./app/views/NotFound";
import {Profile} from "./app/views/Profile";


const client = new ApolloClient({
    uri: "https://apps.twinesocial.com/api/v1/content?campaign=louboutin",
    cache: new InMemoryCache()
})
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(
    createRoutesFromElements(
            <Route path="/" element={<App/>}>
                <Route path="home" element={<Home/>} />
                <Route path="group" element={<Group/>}/>
                <Route path="profile" element={<Profile/>}/>
                <Route path="reel" element={<Reel/>}/>
                <Route path="marketplace" element={<Marketplace/>}/>
                <Route path="videos" element={<Videos/>}/>
                <Route path="friends" element={<Friends/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
    )
);
root.render(
    <ApolloProvider client={client}>
        <RouterProvider router={router}/>
    </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
