import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';

const Home = () => {
    
    return(
        <div className='w-80 center'>
            <div className='tc'>
                <section className='flip-container dib bg-white tc dib ma3 ba b--black-20 br3 shadow-5 pa1 w-10'>
                    <img src={logo} alt='CARDS' title='cards.inc' />
                    <h1  className='dib fw9 f1 tc courier text-success'>Cards</h1>
                    <small className='db tr courier f7 fw8 text-success'>...extend your reach</small>
                </section>
                <section>
                    <p><Link className="b ph3 pv2 ba br-pill btn-outline-success pointer f6 ma2" to='/signin'>Get Started</Link></p>
                </section>
            </div>
            <div className='tc mt3 pt0'>
                <section className='mw5 ph2 dib pv4 tc ma1 w-30'>
                    <h3 className='f3 fw5 tc text-success'>
                        Easy to work with
                    </h3>
                    <p className='mt3'>
                        Get the best with easy Navigation and we are with you every step of the way.
                        <span className='courier'> Cards'</span> user interface is designed to enable easy interaction and getting the best of our service.
                    </p>

                </section>
                <section className='mw5 ph2 dib pv4 tc ma1 w-30'>
                    <h3 className='f3 fw5 tc text-success'>
                        Getting your business online can't get any easier.
                    </h3>
                    <p> 
                        Get an online presence for your business without having to worry about coverage. With our simple user interface, you can get a business impression that is irresistible.
                    </p>
                </section>
                <section className='mw5 ph2 dib pv4 tc ma1 w-30'>
                    <h3 className='f3 fw5 tc text-success'>
                        Search for a service
                    </h3>
                    <p> 
                        We are not just here for business owners. You can also search through our collection of registered businesses to get that service you need for your business or personally. 
                    </p>
                </section>
            </div>
        </div>
    )
}

export default Home;