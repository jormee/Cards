import React from 'react';

const Footer = () => {
    
    return (
        <footer className="pv2 ph3 ph5-m mt3 ph6-l white bg-black-80">
            <small className="f6 db tc white-50">© 2019 <b className="ttu">Cards.Inc</b>., All Rights Reserved</small>
            <div className="tc mt3">
                <a href="/language/" title="Language" className="f6 dib ph2 link mid-gray dim">Language</a>
                <a href="/terms/"    title="Terms" className="f6 dib ph2 link mid-gray dim">Terms of Use</a>
                <a href="/privacy/"  title="Privacy" className="f6 dib ph2 link mid-gray dim">Privacy</a>
            </div>
        </footer>

    )
};

export default Footer;