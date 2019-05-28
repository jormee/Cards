import React from 'react';

const Navbar = () => {

    return(
        <div>
            <div className="w-100 bg-black-80 ph4-m ph5-l">

                <nav className="dt w-100 border-box pa3 ph5-ns">
                    <a className="dtc v-mid mid-gray link dim w-25" href="#" title="Home">
                    <img src="http://tachyons.io/img/logo.jpg" className="dib w2 h2 br-100" alt="Site Name"/>
                    </a>
                    <div className="dtc v-mid w-75 tr">
                        <a className="link dim white-80 f6 f5-ns dib mr3 mr4-ns" href="#" title="About">Profile</a>
                        <a className="link dim white-80 f6 f5-ns dib mr3 mr4-ns" href="#" title="Store">Notifications</a>
                        <a className="link dim white-80 f6 f5-ns dib" href="#" title="Contact">Contact</a>
                    </div>
                </nav>

            </div>
        </div>
    );
}

export default Navbar;