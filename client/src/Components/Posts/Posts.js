import React from "react";
import Post from "./Post/Post";
import { CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import './styles.css';

export default function Posts(){
    const posts = useSelector((state) => state.posts) ;
    console.log(posts)
    return(
        !posts.length ? <CircularProgress className="circle"/> : (
            <div className="upper">
                {posts.map((post) =>(
                    <div key={post._id}item className="div">
                        <Post post={post}/>
                    </div>
                ))}
            </div>
        )
    )
}