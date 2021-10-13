import React from 'react';

const Mechanic = ({ mechanic }) => {
    const { name, img, expertize } = mechanic;
    return (
        <div className='col-lg-4 col-sm-6 col-12'>
            <img src={img} alt="" />
            <h3>Name :{name}</h3>
            <h5 className='tetx-danger'>{expertize}</h5>
        </div>
    );
};

export default Mechanic;