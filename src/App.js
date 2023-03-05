import React, {useEffect, useState} from "react";
import "./App.css"
import Navbar from "./app/layout/topBar/TopBar";
import Sidenav from "./app/layout/nav/SideNav";
// import Section from "./app/layout/section/Section";


function useIncrement(initValue , step) {
    const [count , setCount] = useState(initValue);
    const increment = function () {
        setCount(c => c + step);
    }
    return [count , increment] ;
}


function Compteur() {

    const [count , increment] = useIncrement(1 , 1)
    return <button className="bg-amber-400 text-stone-50 p-1  rounded border-solid border-blue-500 border-2" type="button" onClick={increment}> Incrementer {count }</button>
}


function useToggle(isShow) {
    const [show , setShow] = useState(isShow) ;
    let toggleCompteur  = function (){
        setShow(isShow => !isShow)
    }
    return [show , toggleCompteur];
}



function TodoList() {
    const [todos  , setTodos] = useState([]);

    useEffect(
        function (){
            (async function () {
               const response =  await fetch("https://jsonplaceholder.typicode.com/photos?_limit=10");
               const responseData = await response.json();
               if( response.ok){
                   setTodos(responseData);
               }else {
                   JSON.stringify(responseData);
               }
            })()
        }
    )

    return <ul className="text-center">
        list des Todos a faire
        { todos.map(t => <li>{t.title}</li>) }
    </ul>
}

function PostTable(props) {
    const [posts , setPost] = useState([]);

    useEffect(
      function (){
          (async function () {
            const response  = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=10");
            const responseData = await response.json();
            if(response.ok) {
                setPost(responseData)
            }
          })()
      }
    );

    return(
        <div className="grid grid-cols-2">
            <h1 className="text-3xl p-5">Friends</h1>
            <hr/>
            {posts.map(post =>
                <div
                    className="col-span-1 gap-1 py-8 px-8 max-w-sm mx-auto mt-5 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                    <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={post.url}
                         alt="Woman's Face" />
                        <div className="text-center space-y-2 sm:text-left">
                            <div className="space-y-0.5">
                                <p className="text-lg text-black font-semibold">
                                    {post.title}
                                </p>
                                <p className="text-slate-500 font-medium">
                                    Product Engineer
                                </p>
                            </div>
                            <button
                                className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message
                            </button>
                        </div>
                </div>

            )}
        </div>
    )
}

export default function App (){


        let [isShow , toggleCompteur] = useToggle(true);

        return (
            <div className= "bg-gray-100 h-screen overflow-hidden">
                <Navbar />
                <div className="h-screen grid grid-cols-4 lg:grid-cols-12 ">
                    <div className="col-span-1 lg:col-span-2">
                        <Sidenav />
                    </div>
                    <div className="col-span-3 lg:col-span-8 bg-gray-200 pt-2 overflow-auto">
                        <PostTable />
                    </div>
                </div>
            </div>
        );
}
