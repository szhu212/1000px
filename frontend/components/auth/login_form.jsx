import React from "react";
import { Link } from "react-router-dom";


class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    };

    handleInput(type){
        return (e) => {
            this.setState({[type]: e.target.value});
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    };

    renderErrors() {
        return(
          <ul>
            {this.props.errors.map((error, i) => (
              <li key={i}>
                {error}
              </li>
            ))}
          </ul>
        );
    };

    render(){
        return(
            <div>
                <form className="session-form">  
                    <h2>Log in to 100Illusts</h2>
                    <div className="err-box">
                         <span className="error">{this.renderErrors()}</span>
                    </div>
                    <label>
                        <p>Username:</p>
                        <input type="text" value={this.state.username} onChange={this.handleInput('username')}/>
                    </label>
                    <label>
                        <p>Password:</p>
                        <input type="password" value={this.state.password} onChange={this.handleInput('password')}/>
                    </label>
                    <input type="submit" id="session-submit" onClick={this.handleSubmit} value="Log in"/>
                    <input type="submit" id="demo-user" onClick={()=>{this.props.processForm({username:"Skylar", password:"aaa111"})}} value="Demo login"/>
                    <span className="bottom-message">Don't have an account? </span>
                    <Link to="/signup">Sign up</Link>
                </form>
            </div>
        );
    };
};

export default LoginForm;