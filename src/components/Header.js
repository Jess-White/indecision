import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function Header() {
    return (
        <Jumbotron style={{backgroundColor: "#000080", padding: "2%",
        margin: "0%"}}>
            <h1 style={{backgroundColor: "#000060", padding: "0%",
            margin: "0%"}} className="jumbotron" >Indecision</h1>
        </Jumbotron>
    )
}