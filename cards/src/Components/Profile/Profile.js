import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../Exglamz.jpg';
import logo from '../../logo.svg';
import Users from '../../UserDB';

const Profile = ()=> {
    return(
        <div >
            <header className='clearfix'>
                <img alt='cover' title='cover' src={img} className='w-100 dib' height='150' />
            </header>
        </div>
    )
};

export default Profile;