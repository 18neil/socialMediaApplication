import React from "react";
import './Home.css'
import LeftDiv from "../../components/LeftDiv/LeftDiv";
import CenterDiv from "../../components/CenterDiv/CenterDiv";
import RightDiv from "../../components/RightDiv/RightDiv";

const Home = () => {
    return (
    <div className="Home">
        <div className="leftDiv"> <LeftDiv/> </div>
        <div className="centerDiv"><CenterDiv/></div>
        <div className="rightDiv"><RightDiv/></div>
    </div>
    )
}

export default Home