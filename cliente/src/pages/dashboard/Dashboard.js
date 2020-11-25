import React from "react";
import { useSelector } from "react-redux";
import Wall from "./components/wall/Wall";
import { Redirect } from "react-router-dom";

const Dashboard = () => {
  
    const auth = useSelector(state => state.auth);

    return ( 
        ( auth && auth.success ) 
        ?   <div className="dashboard">
                <div className="row"> <Wall /> </div>
            </div>
        :   <Redirect to='/signin' />
    )
}

export default Dashboard;
