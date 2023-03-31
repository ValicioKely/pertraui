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
import {GraphQLWsLink} from "@apollo/client/link/subscriptions";
import {createClient} from "graphql-ws";
import {RestLink} from "apollo-link-rest";


const wsLink = new GraphQLWsLink(createClient({
        url: 'https://api.apilayer.com/currency_data/live?source=EUR&currencies=USD',
    }
))

const restLink = new RestLink(
    {
        uri: "https://reqres.in/" ,
        credentials: "same-origin"
        });

const client = new ApolloClient({
    link : restLink,
    cache: new InMemoryCache(),
    credentials: 'include'
})
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(
    createRoutesFromElements(
            <Route path="/" element={<App/>}>
                <Route path="home" element={<Home/>} />
                <Route path="profile" element={<Profile/>}/>
                <Route path="reel" element={<Reel/>}/>
                <Route path="marketplace" element={<Marketplace/>}/>
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
reportWebVitals();
