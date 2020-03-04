import React from "react";
import { Link } from "react-router-dom";


class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(type){
        return (e) => {
            this.setState({[type]: e.target.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
    }

    render(){
        return(
            <div>
                <form className="session-form">  
                    <h2>Log in to 100Illusts</h2>
                    <label>
                        <p>Username:</p>
                        <input type="text" value={this.state.username} onChange={this.handleInput('username')}/>
                    </label>
                    <label>
                        <p>Password:</p>
                        <input type="password" value={this.state.password} onChange={this.handleInput('password')}/>
                    </label>
                    <input type="submit" onClick={this.handleSubmit} value="Log in"/>
                    <span>Don't have an account? </span>
                    <Link to="/signup">Sign up</Link>
                </form>
            </div>
        )
    }
}

export default LoginForm;