import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    onEmailChange = (e) => {
        this.setState({email: e.target.value})
    }

    onPasswordChange = (e) => {
        this.setState({password: e.target.value})
    }

    onSubmit = () => {
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.history.push('/cards')
                }
            }) 
    }
    render () {
        return (
            <article className="bg-white tc center ba b--black-20 br3 pa1 mw5 ma3 pa3">
                <h1 className='text-success'>Sign in</h1>
                <form action="sign-up_submit" method="get" acceptCharset="utf-8">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="ph0 mh0 fw6 clip">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
                            <input 
                                placeholder='email'
                                className="disabled pa2 input-reset ba br3 btn-outline-success w-100 measure" 
                                type="email" 
                                name="email-address"  
                                id="email-address"
                            />
                        </div>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
                            <input 
                                onChange={this.onPasswordChange} 
                                className="b br3 pa2 input-reset ba btn-outline-success measure w-100" 
                                type="password" 
                                name="password"
                                id="password"
                            />
                        </div>
                    </fieldset>
                    <div className="mt3 pa2 w-100">
                        <Link to='#' className="ph3 pv2 div input-reset ba br-pill btn-outline-success pointer f6 ma2" onClick={this.onSubmit}> Save</Link>
                        <Link to='#' className="ph3 pv2 dib input-reset ba br-pill gray pointer f6 ma2" onClick={this.onSubmit}> Cancel</Link>
                    </div>
                </form>
            </article>
    
        )
    }
}

export default SignIn;