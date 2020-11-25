import React from 'react';
import { useSelector } from "react-redux";
import CreatePost from '../posts/CreatePost';
import PostList from '../posts/PostList';

const Wall = () => {

    const posts = useSelector((state) => state.user.posts);
    
    return (
        <div className="wall container" >
            
            <div className="row">
                <div >  <CreatePost /></div>
                <div >  <PostList posts={posts}/></div>
                

            </div>
        </div>
    )
}

export default Wall;