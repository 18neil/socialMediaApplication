import React from "react";
import './Home.css'
import LeftDiv from "../../components/LeftDiv/LeftDiv";

const Home = () => {
    return (
    <div className="Home">
        <div className="leftDiv"> <LeftDiv/> </div>
        <div className="centerDiv">Center</div>
        <div className="rightDiv">Right</div>
    </div>
    )
}

export default Home