import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Marketplace} from "./app/views/Marketplace";
import {Reel} from "./app/views/Reel";
import {NotFound} from "./app/views/NotFound";
import {Profile} from "./app/views/Profile";
import Dashboard from "./app/views/Dashboard";
import {Home} from "./app/views/Home";
import {RecoilRoot} from "recoil";


const root = ReactDOM.createRoot(document.getElementById('root'));

//routes

const router = createBrowserRouter(
    [{
        path: "/",
        element: <App />
        },
        {
            path : "dashboard",
            loader: async () => {
                return 'valiciokely';
            },
            element : <Dashboard />,
            children: [{
                path: "home",
                element: <Home/>
            },
                {
                    path: "reel",
                    element: <Reel/>
                },
                {
                    path: "marketplace",
                    element: <Marketplace/>
                },
                {
                    path: "profile",
                    element: <Profile />
                }]
        },
        {
            path: '*' ,
            element: <NotFound />
        }
    ]
)


root.render(

    <RecoilRoot>
        <RouterProvider router={router}/>
    </RecoilRoot>
);
reportWebVitals();
