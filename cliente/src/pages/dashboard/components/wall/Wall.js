import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import CreatePost from '../posts/CreatePost';
import PostList from '../posts/PostList';
import { getUserPosts } from "../../../../redux/actions/userAction"

const Wall = () => {

    const posts = useSelector((state) => state.user.posts);
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    
    const [typeValue, setTypeValue] = useState('all');

    useEffect(() => {
        if (auth) {
            dispatch(getUserPosts(auth.data._id));
        }
    }, [typeValue]);
    

    const handleClickAll = () => {
        setTypeValue('all');
    }

    const handleClickPublic = () => {
        setTypeValue('public');
    }

    const handleClickFriends = () => {
        setTypeValue('friends');
    }

    const filterListBy = (type) => {
        if (type === 'all') {
            return posts;
        } else {
            return posts.filter((post) => { return post.type === type });
        }
    }

    const postsList =
        (posts)
            ? filterListBy(typeValue)
            : (null);


    return (
        <div className="wall container" >
            <div className="row">
                <div >  <CreatePost /></div>
                <div className="row">
                    <div className="col">
                        <button className="btn blue lighten-1 z-depth-0" onClick={handleClickAll}> Todos </button>
                    </div>
                    <div className="col">
                        <button className="btn blue lighten-1 z-depth-0" onClick={handleClickPublic}> Público </button>
                    </div>
                    <div className="col">
                        <button className="btn blue lighten-1 z-depth-0" onClick={handleClickFriends}> Amigos </button>
                    </div>
                </div>
                <div >  <PostList posts={postsList} /></div>
            </div>
        </div>
    )
}

export default Wall;