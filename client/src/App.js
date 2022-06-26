import React, { useEffect } from "react";
import Form from "./Components/Form/Form";
import Posts from "./Components/Posts/Posts";
import { useDispatch } from "react-redux";
import {HashRouter, Route, Routes} from "react-router-dom"
import Main from "./Pages/Main"
import { getPosts } from "./redux/actions/posts";
import Home from "./Pages/Home";

export default function App(){
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getPosts());
    }, [dispatch])
    return(
        < HashRouter>
            <Routes>
                <Route path="/main" element={<Main/>} />
                <Route path="/form" element={<Form/>} />
                <Route path="/" element={<Home/>} />
            </Routes>
        </HashRouter>
    )
}