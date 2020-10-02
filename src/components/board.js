import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../src/App.css'

class Board extends Component {
    constructor(props) {
        super(props)
    }
    
    onClick1Add = () => {
        this.props.addScoreButton1()
        this.props.toggleServe()
        this.props.winner()
    }
    onClick2Add = () => {
        this.props.addScoreButton2()
        this.props.toggleServe()
        this.props.winner()
    }
    onClick1Minus = () => {
        this.props.decrementScoreButton1()
        this.props.toggleServe()
        this.props.winner()
    }
    onClick2Minus = () => {
        this.props.decrementScoreButton2()
        this.props.toggleServe()
        this.props.winner()
    }
    
    
    
    render() {
        return (
            <div>
                <Link to='/' onClick={this.props.clearBoard}> <button >Cancel Game</button> </Link>
                <h3>Game Type: {this.props.gameType} points</h3>
                <h4>The player in red is serving</h4>
                <div>
                    <h4 className={this.props.serve ? "serve" : ""}>Player 1:</h4>
                    <p >{this.props.player1}</p>
                    <p>Score: {this.props.player1Score}</p>
                    <button onClick={this.onClick1Add}>Add Point</button>
                    <button onClick={this.onClick1Minus}>Minus Point</button>
                </div>
                <div>
                    <h4 className={!this.props.serve ? "serve" : ""}>Player 2:</h4>
                    <p>{this.props.player2}</p>
                    <p>Score: {this.props.player2Score}</p>
                    <button onClick={this.onClick2Add}>Add Point</button>
                    <button onClick={this.onClick2Minus}>Minus Point</button>
                </div>
            </div>
        )
    }
}

export default Board;
