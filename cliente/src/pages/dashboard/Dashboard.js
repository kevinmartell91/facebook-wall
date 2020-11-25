import React, {  useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getUserPosts } from "../../redux/actions/userAction";

import Wall from "./components/wall/Wall";
import { Redirect } from "react-router-dom";

const Dashboard =() => {
  
    const dispatch = useDispatch();
    const currentPostId = useSelector((state) => state.post.currentPostId)
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        if (auth ) {
            dispatch(getUserPosts(auth.data._id));
        }
    }, [dispatch,auth,currentPostId])
    

    return ( 
        ( auth && auth.success ) 
        ? 
            <div className="dashboard">
                <div className="row">
                        <Wall />
                </div>
            </div>
        : <Redirect to='/signin' />
    )
}

export default Dashboard;
