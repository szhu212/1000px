import React from "react";
import { Link } from "react-router-dom";


class SignupForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            email:"",
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
      }

    render(){
        return(
            <div>
                <section className="container-section">
                    <form className="session-form">
                        <h2>Join 100Illusts</h2>
                        <div className="err-box">
                             <span className="error">{this.renderErrors()}</span>
                        </div>
                        <label>
                                <p>Username:</p>
                            <input type="text" value={this.state.username} onChange={this.handleInput('username')}/>
                        </label>
                        <label>
                                <p>email:</p>
                            <input type="text" value={this.state.email} onChange={this.handleInput('email')}/>
                        </label>
                        <label>
                                <p>Password:</p>
                            <input type="password" value={this.state.password} onChange={this.handleInput('password')}/>
                        </label>
                        <input type="submit" id="session-submit" onClick={this.handleSubmit} value="Sign up"/>
                        <span className="bottom-message">Already have an account? </span>
                        <Link to="/login">Log in</Link>
                    </form>
                </section>
            </div>
        )
    }
}

export default SignupForm;