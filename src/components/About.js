import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function About() {
    return (
        <Jumbotron style={{backgroundColor: "#000080", padding: "2%",
        margin: "0%"}}>
            <h1 style={{backgroundColor: "#000060", padding: "0%",
            margin: "0%"}} className="jumbotron">Hi there!</h1>
            <h3>Welcome to Indecision!</h3>
            <h5>Indecision pulls data from Github's stellar <a href="https://docs.github.com/en/free-pro-team@latest/rest/overview">API</a> to compare repos for four popular frontend frameworks: <a href="https://github.com/vuejs/vue">Vue</a>, <a href="https://github.com/facebook/react">React</a>, <a href="https://github.com/angular/angular.js">Angular</a>, and <a href="https://github.com/emberjs/ember.js/">Ember</a>.</h5>
            <h5>Check out the stats by clicking on the buttons below, and when you feel super informed, cast your totally objective vote for your fave using the handy form.</h5>
            <h5>(NB: Only one vote per email per visit!)</h5>
            <h5>Check out the repo for this project <a href="https://github.com/Jess-White/indecision">here!</a></h5>
        </Jumbotron>
    )
}