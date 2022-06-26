import React from "react";
import moment from "moment"
import { likePost, getPosts } from "../../../redux/actions/posts";
import { useDispatch } from "react-redux";
import './styles.css';
import { useNavigate  } from "react-router-dom";

export default function Post({post}){
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const like = post.likeCount
    return(
        <div className="card">
            <div className="iiv">
                <img className="image" src={post.selectedFile}></img>
            </div>
            <h1 className="country">{post.tags}</h1>
            <a href={post.GoogleMapsUrl} target="_blank" rel="noreferrer">
                <h1 className="title">{post.title}</h1>
            </a>
            <h1 className="desc">{post.description}</h1>
            <h1 className="creator">By: {post.creator}</h1>
            <h1 className="time">{moment(post.createdAt).fromNow()}</h1>
            <button className="button" onClick={() => dispatch(likePost(post._id), Navigate('/main'))}>like {post.likeCount}</button>

        </div>
    )
}