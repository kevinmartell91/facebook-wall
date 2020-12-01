import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { createUserPost } from "../../../../redux/actions/userAction";

const CreatePost = () => {

    const [NewPost, setNewPost] = useState({
        content: '',
        type: 'friends'
    });

    const dispatch = useDispatch();
    const userId = useSelector((state) => state.auth.data._id);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createUserPost(userId, NewPost));
        // clear the form
        e.target.reset();
    }

    const handleChange = (e) => {
        setNewPost({
            ...NewPost,
            [e.target.id]: e.target.value
        });
    }

    return (
        <div className="card z-depth-0y" >
            <div className="card-content grey-text text-darken-3">

                <form onSubmit={handleSubmit}>
                    <h4 id="title" className="blue-text text-darken-3">Postea algo</h4>

                    <div className="row">
                        <textarea type="text" id="content"
                            placeholder="¿Qué está pasando?"
                            onChange={handleChange}></textarea>
                    </div>

                    <div className="row ">
                        <div className="col">
                            <select className="browser-default" id="type"
                                value={NewPost.type} onChange={handleChange} >
                                <option value="friends">Amigos</option>
                                <option value="public">Público</option>
                            </select>
                        </div>
                        <div className="col">
                            <button className="btn blue lighten-1 z-depth-0">Publicar</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreatePost;
