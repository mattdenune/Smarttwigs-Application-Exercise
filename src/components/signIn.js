import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignIn extends Component {
    constructor(props) {
        super(props)
    }

    

    handleSubmit = (event) => {
        event.preventDefault()
    }




    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Enter a name for player 1</h4>
                    <input type="text" name='player1' value={this.props.player1} onChange={this.props.changeHandler}/>
                    <p>{this.props.player1}</p>
                    <h4>Enter a name for player 2</h4>
                    <input type="text" name='player2' value={this.props.player2} onChange={this.props.changeHandler}/>
                    <p>{this.props.player2}</p>
                    <h4>Enter a game type: 10 or 20 points</h4>
                    <input type="text" name='gameType' value={this.props.gameType} onChange={this.props.changeHandler}/>
                    <br/>
                    
                    <Link to='/game-board'> <input type="submit"/> </Link>
                </form>
            </div>
        )
    }
}

export default SignIn;
