import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPostId } from "../../../../redux/actions/postActions";
import { updateUserPost, deleteUserPost } from "../../../../redux/actions/userAction";
import moment from 'moment'

const Post = ({ post }) => {

    const [action, setAction] = useState('');

    const [updatePost, setUpdatePost] = useState({
        content: post.content,
        createdAt: post.createdAt
    })

    const [oldPost, setOldPost] = useState(null);

    const dispatch = useDispatch();
    const userId = useSelector((state) => state.auth.data._id);
    const currentPostId = useSelector((state) => state.post.currentPostId)

    const handleSubmit = (e) => {

        e.preventDefault();

        switch (action) {
            case "delete":
                if (window.confirm(`Deseas eliminitar este post?`)) {
                    dispatch(deleteUserPost(userId, post._id));
                }
                break;

            case "save":
                dispatch(updateUserPost(userId, currentPostId, updatePost));
                dispatch(setCurrentPostId(null));
                break;

            case "edit":
                // store orinal values of a post in oldPost
                setOldPost({
                    ...updatePost,
                    content: post.content
                })
                dispatch(setCurrentPostId(post._id));
                break;

            default: // cancel

                setUpdatePost({
                    content: oldPost.content
                })
                dispatch(setCurrentPostId(null))
                // back to old post(from the copy)
                setOldPost(null);
                break;
        }

    }
    const handleDeleteCancel = () => {
        (!currentPostId) ? setAction("delete") : setAction("cancel");
    }

    const handleEditSave = () => {
        (!currentPostId) ? setAction("edit") : setAction("save");
    }

    const handleChangeTextArea = (e) => {
        setUpdatePost({
            ...updatePost,
            content: e.target.value
        })
        console.log("setUpdatePost  values to:", updatePost);
    }

    if (post) {
        return (
            <div className="card z-depth-0 post-summary" >
                <div className="card-content grey-text text-darken-3">

                    <form onSubmit={handleSubmit}>

                        <div className="row">
                            <h6 className="grey-text text-darken-0"> {moment(post.createdAt).calendar()}</h6>
                        </div>
                        <div className="row">
                            <textarea id={post.id} name="postContent" cols="30" rows="30"
                                disabled={(currentPostId !== post._id) ? true : false}
                                onChange={handleChangeTextArea}
                                value={updatePost.content}>

                            </textarea>
                        </div>

                        <div className="row">
                            <div className="col">
                                <button className="btn blue lighten-2 z-depth-0" onClick={handleEditSave}>
                                    {(currentPostId !== post._id) ? "Editar" : "Guardar"}
                                </button>
                            </div>

                            <div className="col">
                                <button className="btn red lighten-2 z-depth-0" onClick={handleDeleteCancel} >
                                    {(currentPostId !== post._id) ? "Elimnar" : "Cancelar"}
                                </button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}

export default Post;