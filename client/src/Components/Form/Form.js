import React, { useState } from "react";
import {TextField, Button} from "@material-ui/core";
import FileBase from "react-file-base64";
import {useDispatch} from "react-redux";
import { createPost } from "../../redux/actions/posts";
import './styles.css';
import { useNavigate  } from "react-router-dom";

export default function Form(){
    const Navigate = useNavigate();
    const [postData, setPostData] = useState({
        creator: "", title: "", description: "", tags: "", selectedFile: "", GoogleMapsUrl: ""
    })
    const dispatch = useDispatch();
    const  handleSubmit =  (e) => {
        e.preventDefault();

        dispatch(createPost(postData));
        Navigate('/main');
    }

    return(
        <div className="div2">
            <form autoComplete="off" noValidate onSubmit={handleSubmit} className="form">
            <TextField name="creator" label="Your name" value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value})}/>
            <TextField name="title" label="Place" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value})}/>
            <TextField name="tags" label="City" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value})}/>
            <TextField name="description" label="Description" value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value})}/>
            <TextField name="GoogleMapsUrl" label="Complete Link from Google Maps" value={postData.GoogleMapsUrl} onChange={(e) => setPostData({ ...postData, GoogleMapsUrl: e.target.value})}/>
            <h4>Add Image of Place</h4>
            <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})}/>
            <Button type="submit">submit</Button>
        </form>
        </div>
    )
}