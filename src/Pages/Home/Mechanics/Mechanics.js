import React from 'react';
import mechanic1 from '../../../images/exparts/mechanic-1.jpg'
import mechanic2 from '../../../images/exparts/mechanic-2.jpg'
import mechanic3 from '../../../images/exparts/mechanic-3.jpg'
import mechanic4 from '../../../images/exparts/mechanic-4.jpg'
import Mechanic from '../Mechanic/Mechanic';

const Mechanics = () => {
    const mechanics = [
        {
            img: mechanic1,
            name: 'Andrew Smith',
            expertize: '-Engine Expert-'
        },
        {
            img: mechanic2,
            name: 'John Anderson',
            expertize: '-Polish Expert-'
        },
        {
            img: mechanic3,
            name: 'Zakaria Smith',
            expertize: '-Coloring Expert-'
        },
        {
            img: mechanic4,
            name: 'Sakib Anderson',
            expertize: '-Alrounder Expert-'
        },
    ]

    return (
        <div className='container' id='mechanics'>
            <div className='row'>
                <h2 className='tetx-primary mt-5'>Our exparts</h2>
                {
                    mechanics.map(mechanic => <Mechanic
                        mechanic={mechanic}
                    ></Mechanic>)
                }
            </div>
        </div>
    );
};

export default Mechanics;