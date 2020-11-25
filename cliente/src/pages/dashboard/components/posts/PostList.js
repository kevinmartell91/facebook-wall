import React, { useState, useEffect} from 'react';
import Post from "./Post";

const PostList = ({posts}) => {

    
    const [filteredPost, setFilteredPost] = useState({
        list: null,
        filterValue: ''
    });
    
    useEffect(() => {
        setFilteredPost({
            ...filterPost,
            list: posts
        });

    }, [posts]);

    const handleClickPublic = () => {
        setFilteredPost({
            ...filterPost,
            list: filterPost("public"),
            filterValue: "public"
        });
    }

    const handleClickFriends = () => {
        setFilteredPost({
            ...filterPost,
            list: filterPost("friends"),
            filterValue: "friends"
        });
    }

    const filterPost = (type) => {
        return posts.filter((post) => { return post.type === type});
    }

    const postsList = 
        (filteredPost.list) ?
            (filteredPost.list.map( each => {
                return (
                    <Post post={each} key={each._id}/>
                )
            })) 
        : (null);
        
    if( filteredPost.list && filteredPost.list.length > 0) {
        return (
            <div className="col ">

                <div className="row">
                    <div className="col">
                        <button className="btn blue lighten-1 z-depth-0" onClick={handleClickPublic}> Público </button>
                    </div>
                    <div className="col">
                        <button className="btn blue lighten-1 z-depth-0" onClick={handleClickFriends}> Amigos </button>
                    </div>
                </div>

                <div className="row">
                    {postsList}
                </div>

            </div>
        )
    } else {
        return (
            <div className="container">
                <h6 className="gray-text text-darken-2"> No tienes ningún post aún. :(</h6>
            </div>
        )
    }
}   

export default PostList;