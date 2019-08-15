import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUp extends Component {
    constructor(props) {
        super();
        this.state = {
            firstName : '',
            lastName : '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    onFirstNameChange = (e) => {
        this.setState({firstName: e.target.value})
    }
    onLastNameChange = (e) => {
        this.setState({lastName: e.target.value})
    }
    onEmailChange = (e) => {
        this.setState({email: e.target.value})
    }

    onPasswordChange = (e) => {
        this.setState({password: e.target.value})
    }

    onConfirmPasswordChange = (e) => {
        this.setState({confirmPassword: e.target.value})
    }

    onSignUp = () => {
        if (this.state.password===this.state.confirmPassword) {

            fetch('http://localhost:3000/register', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    email: this.state.email,
                    password: this.state.password,
                    confirmPassword: this.state.confirmPassword
                })
            })
                .then(response => response.json())
                .then(user => {
                    if (user.id) {
                        this.props.history.push('/signin')
                    } else {
                        alert('Unable to register')
                    }
                }) 
        } else {
            alert('passwords do not match!')
        }
    }

    render() {
        return (
            <article className="bg-white tc center ba b--black-20 br3 pa1 mw5 ma3 pa3">
                <h1 className='text-success'>Register</h1>
                <form action="sign-up_submit" method="get" acceptCharset="utf-8">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
                        <div className="mt3">
                            <label className="tl db fw6 lh-copy f6" htmlFor="name">first name</label>
                            <input className="pa2 input-reset ba br3 btn-outline-success w-100 measure" type="text" name="first name"  id="name" onChange={this.onFirstNameChange}/>
                        </div>
                        <div className="mt3">
                            <label className="tl db fw6 lh-copy f6" htmlFor="name">last name</label>
                            <input className="pa2 input-reset ba br3 btn-outline-success w-100 measure" type="text" name="last name"  id="last name" onChange={this.onLastNameChange}/>
                        </div>
                        <div className="mt3">
                            <label className="tl db fw6 lh-copy f6" htmlFor="email-address">Email address</label>
                            <input className="pa2 input-reset ba br3 btn-outline-success w-100 measure" type="email" name="email-address"  id="email-address" onChange={this.onEmailChange}/>
                        </div>
                        <div className="mt3">
                            <label className="tl db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="br3 pa2 input-reset ba btn-outline-success w-100 measure" type="password" name="password"  id="password" onChange={this.onPasswordChange}/>
                        </div>
                        <div className="mt3">
                            <label className="tl db fw6 lh-copy f6" htmlFor="password">Confirm Password</label>
                            <input className="b br3 pa2 input-reset ba btn-outline-success w-100 measure" type="password" name="password"  id="confirmPassword" onChange={this.onConfirmPasswordChange}/>
                        </div>
                    </fieldset>
                    <div>
                        <p><Link className="b ph3 pv2 input-reset ba br-pill btn-outline-success f6 ma2" to='#' onClick={this.onSignUp}>Register </Link></p>
                        <small className='db'>already have an account? <Link to= '/signin' className='link pointer dim text-success'>Sign in</Link></small>
                    </div>
                </form>
            </article>
    
        )
    }

} 


export default SignUp;