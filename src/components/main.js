import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';

import SignIn from './signIn';
import Board from './board';


class Main extends Component {
    constructor() {
        super()

        this.state={
            player1: '',
            player2: '',
            player1Score: 0,
            player2Score: 0,
            gameType: 0,
            serve: true,
            tie: false,
            leaderboard: {}
        }
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addScoreButton1 = (event) => {
        this.setState({
            player1Score: this.state.player1Score + 1
        })
    }

    decrementScoreButton1 = (event) => {
        this.setState({
            player1Score: this.state.player1Score - 1
        })
    }

    addScoreButton2 = (event) => {
        this.setState({
            player2Score: this.state.player2Score + 1
        })
    }

    decrementScoreButton2 = (event) => {
        this.setState({
            player2Score: this.state.player2Score - 1
        })
    }

    clearBoard = (event) => {
        this.setState({
            player1: '',
            player2: '',
            player1Score: 0,
            player2Score: 0,
            gameType: 0,
            serve: true,
        })

    }

    toggleServe = () => {
        const p1Score = this.state.player1Score;
        const p2Score = this.state.player2Score;
        const total = p1Score + p2Score;
        console.log("total:", total)
        console.log('serve:', this.state.serve)
        

        // if (this.state.gameType === 10 && total === 0){
        //     return
        // } else if (this.state.gameType === 10 && (total)% 2 === 0) {
        //     this.setState (prevState => ({
        //         serve: !prevState.serve
        //     }))
        // } 

        // if (this.state.gameType === 20 && total === 0){
        //     return
        // } else if (this.state.gameType === 20 && (total) % 5 === 0) {
        //         this.setState(prevState => ({
        //             serve: !prevState.serve
        //         }))
        // } 

        if (total === 0) {
            return
        } else if (total % 2 !== 0) {
            this.setState(prevState => ({
                serve: !prevState.serve
            }))
        } 



        
    }

    winner = () => {
        const p1Score = this.state.player1Score;
        const p2Score = this.state.player2Score;
        let leadMap = this.state.leaderboard;


        if (p1Score === 10 && p2Score === 10) {
            alert(`You must win by 2 points`)
            this.setState({
                tie: true
            })
            
        } 
        
        if (this.state.tie === true && p1Score - p2Score === 2) {
            alert(`${this.state.player1} wins!`)
            leadMap[this.state.player1] ? leadMap[this.state.player1]++ : leadMap[this.state.player1] = 1
        } else if (this.state.tie === true && p2Score - p1Score === 2) {
            alert(`${this.state.player2} wins!`)
            leadMap[this.state.player2] ? leadMap[this.state.player2]++ : leadMap[this.state.player2] = 1
        }
        
        
        
        if (this.state.tie === false && p1Score > 10) {
            alert(`The winner is ${this.state.player1}`)
            leadMap[this.state.player1] ? leadMap[this.state.player1]++ : leadMap[this.state.player1] = 1
        } else if (this.state.tie === false && p2Score > 10) {
            alert(`The winner is ${this.state.player2}`)
            leadMap[this.state.player2] ? leadMap[this.state.player2]++ : leadMap[this.state.player2] = 1
        } 
            
        
        console.log("Tie: ", this.state.tie)
        console.log('leaderboard:', leadMap)
        console.log('---------')

    }
    
    // currentLeader = () => {
    //     let leaderboard = this.state.leaderboard
    //     let sortable = Object.keys(leaderboard).sort().reduce(function (result, key) {
    //         result[key] = leaderboard[key];
    //         return sortable
    //     })
    //     console.log(sortable)
    // }

    componentDidMount() {
        // this.currentLeader()
    }



    render() {
        // console.log(this.state.player1)
        // console.log(this.state.player2)
        // console.log(this.state.gameType)
        return (
            <div>
                <Switch>
                    <Route path='/game-board' component={() => <Board 
                        player1={this.state.player1}
                        player2={this.state.player2}
                        player1Score={this.state.player1Score}
                        player2Score={this.state.player2Score}
                        addScoreButton1={this.addScoreButton1}
                        decrementScoreButton1={this.decrementScoreButton1}
                        addScoreButton2={this.addScoreButton2}
                        decrementScoreButton2={this.decrementScoreButton2}
                        clearBoard={this.clearBoard}
                        serve={this.state.serve}
                        toggleServe={this.toggleServe}
                        winner={this.winner}
                        gameType={this.state.gameType}
                        />} 
                    />

                    <Route path='/' component={() => <SignIn 
                        player1={this.state.player1} 
                        player2={this.state.player2} 
                        changeHandler={this.changeHandler}
                        gameType={this.state.gameType}
                        />} 
                    />
                    
                    
                </Switch>
            </div>
        )
    }
}

export default Main;