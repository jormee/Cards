import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../Exglamz.jpg';
import logo from '../../logo.svg';
import Users from '../../UserDB';

const Profile = ()=> {
    return(
        <div >
            <header className='clearfix'>
                <img alt='company logo' title='logo' src={img} className='br-100 mw5 dib' />
                <div></div>

            </header>
        </div>
    )
};

export default Profile;