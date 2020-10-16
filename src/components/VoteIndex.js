import React, { Component } from 'react';

export default class VoteIndex extends React.Component {
  render() {
    console.log(this.props.votes, "crepe")
    return (
        <div>
        {this.props.votes.map(vote =>
          <div>
            <h1>{vote.name}</h1>
            <h2>{vote.framework}</h2>
          </div>
          )}
        </div>
      );
    }
  }