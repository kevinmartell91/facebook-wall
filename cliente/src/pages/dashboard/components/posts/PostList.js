import React from 'react';
import Post from "./Post";

const PostList = ({ posts }) => {

    const postsList =
        (posts)
            ?
            (posts.map(each => {
                return (
                    <Post post={each} key={each._id} />
                )
            }))
            :
            (null);

    return (
        <div className="col ">
            <div className="row">
                {postsList}
            </div>
        </div>
    )
}

export default PostList;