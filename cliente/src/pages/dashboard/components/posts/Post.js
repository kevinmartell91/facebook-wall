import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPostId } from "../../../../redux/actions/postActions";
import { updateUserPost, deleteUserPost } from "../../../../redux/actions/userAction";
import moment from 'moment'

const Post = ({post}) => {
    
    const [action, setAction] = useState('');
    const [oldPost, setOldPost] = useState(null);

    const [updatePost, setUpdatePost] = useState({ 
        content: post.content,
        createdAt: post.createdAt
    })


    const dispatch = useDispatch();
    const currentPostId = useSelector((state) => state.post.currentPostId)
    const userId = useSelector((state) => state.auth.data._id);

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
                dispatch(setCurrentPostId(post._id));
                // make copy of the post in old post
                setOldPost({post});
                break;
                
            default: // cancel
                dispatch(setCurrentPostId(null))
                // back to old post(from the copy)
                setUpdatePost(oldPost);
                setOldPost(null);
                break;
        }

    }
    const handleDeleteCancel = () => {
        ( !currentPostId ) ? setAction("delete") : setAction("cancel");
    }

    const handleEditSave = () => {
        ( !currentPostId ) ? setAction("edit") :setAction("save");
    }

    const handleChangeTextArea = (e) => {
        setUpdatePost({
            ...updatePost,
            content: e.target.value 
        })
    }
    
    if ( updatePost ) {
        return (
            <div className="card z-depth-0 post-summary" >
                <div className="card-content grey-text text-darken-3">
                    
                    <form onSubmit={handleSubmit}>

                        <div className="row">
                            <h6 className="grey-text text-darken-0"> {moment(post.createdAt).calendar()}</h6> 
                        </div>
                        <div className="row">
                            <textarea id={post.id} name="postContent" cols="30" rows="30" 
                                disabled={(currentPostId !== post._id) ? true : false} onChange={handleChangeTextArea}>
                                {updatePost.content}
                            </textarea>
                        </div>
                        
                                          

                        <div className="row">
                            <div className="col">
                                 <button className="btn blue lighten-2 z-depth-0" onClick={handleEditSave}>
                                    { (currentPostId !== post._id) ? "Editar" : "Guardar"}   
                                </button>
                            </div>

                            <div className="col">
                                <button  className="btn red lighten-2 z-depth-0" onClick={handleDeleteCancel} >
                                    {(currentPostId !== post._id) ? "Elimnar" : "Cancelar" }
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