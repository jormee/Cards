import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <article className="bg-white tc center ba b--black-20 br3 pa1 mw5 ma3 pa3">
            <h1 className='text-success'>Register</h1>
            <form action="sign-up_submit" method="get" accept-charset="utf-8">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
                    <div className="mt3">
                        <label className="db fw4 lh-copy f6" for="email-address">Email address</label>
                        <input className="pa2 input-reset ba br3 btn-outline-success w-100 measure" type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div className="mt3">
                        <label className="db fw4 lh-copy f6" for="password">Password</label>
                        <input className="br3 pa2 input-reset ba btn-outline-success w-100 measure" type="password" name="password"  id="password"/>
                    </div>
                    <div className="mt3">
                        <label className="db fw4 lh-copy f6" for="password">Confirm Password</label>
                        <input className="b br3 pa2 input-reset ba btn-outline-success w-100 measure" type="password" name="password"  id="password"/>
                    </div>
                </fieldset>
                <div>
                    <p><Link className="b ph3 pv2 input-reset ba br-pill btn-outline-success f6 ma2" to='/signin'>Register </Link></p>
                    <small className='db'>already have an account? <Link to= '/signin' className='link pointer dim text-success'>Sign in</Link></small>
                </div>
            </form>
        </article>

    )
}

export default SignUp;