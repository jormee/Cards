import React from 'react';
import './Card.css';

const Card = ({ User }) => {

    return (
        <div className="flip-container center bg-white br3 ba b--black-10 tc" ontouchstart="this.classlist.toggle('hover');">
            <div className='flipper'>
                <div className='front pa2'>
                    <div class="tc">
                        <img src="http://tachyons.io/img/avatar_1.jpg" class="br-100 h3 w3 dib" title="Photo of a kitty staring at you"/>
                        <h1 class="f4">Mimi</h1>
                        <hr class="mw3 bb bw1 b--black-10"/>
                    </div>
                    {/* <p class="lh-copy measure center f6 black-70">
                        Quite affectionate and outgoing.
                        She loves to get chin scratches and will
                        roll around on the floor waiting for you give her more of them.
                    </p> */}
                    <a href="#" class="btn btn-dark tr">Go to webpage</a>
                </div>
                    <div className='back'>
                        <div class="tc">
                            <img src="http://tachyons.io/img/avatar_1.jpg" class="br-100 h3 w3 dib" title="Photo of a kitty staring at you"/>
                            <h1 class="f4">Mimi</h1>
                            <hr class="mw3 bb bw1 b--black-10"/>
                        </div>
                        <p class="lh-copy measure tj f6 black-70">
                            Quite affectionate and outgoing.
                            She loves to get chin scratches and will
                            roll around on the floor waiting for you give her more of them.
                        </p>
                        <a href="#" class="btn btn-dark tr">Go to webpage</a>
                    </div>
            </div>

        </div>
    )
}

export default Card;