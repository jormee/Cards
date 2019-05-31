import React from 'react';
import Card from './Card';

const Cards = ({ users }) => {
    return(
        <div className='w-80 center tc ma2'>
            {
                users.map((user, i) => {
                    return(
                        <Card 
                            key = {i}
                            id = {users[i].id}
                            name = {users[i].name}
                            city = {users[i].city}
                            state = {users[i].state}
                            industry = {users[i].industry}
                            bio = {users[i].bio}
                            contact = {users[i].contact}
                        />
                    )
                })
            }
        </div>
    )
};

export default Cards;