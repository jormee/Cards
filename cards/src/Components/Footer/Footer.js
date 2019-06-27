import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    
    return (
        <footer className="pv2 ph3 ph5-m mt3 bg-black-80">
            <small className="f6 db tc white-50 text-success">© 2019 <b className="ttu">Cards.Inc</b>., All Rights Reserved</small>
            <div className="tc mt3">
                <Link to="/language" title="Language" className="f6 dib ph2 link mid-gray dim text-success">Language</Link>
                <Link to="/terms/"    title="Terms" className="f6 dib ph2 link mid-gray dim text-success">Terms of Use</Link>
                <Link to="/privacy/"  title="Privacy" className="f6 dib ph2 link mid-gray dim text-success">Privacy</Link>
            </div>
        </footer>

    )
};

export default Footer;