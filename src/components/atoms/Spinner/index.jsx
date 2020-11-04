import React from 'react'

import { loadingSpinnerCircle, loadingSpinnerIso } from '../../../images'

const Spinner = ({ width }) => {
    return (
        <div className={`${width} relative`}>
            <img className='absolute' src={ loadingSpinnerIso} alt="iso mcmpbll783"/>
            <img className='animate-spin' src={ loadingSpinnerCircle } alt="spinner circle"/>
        </div>
    );
};

export default Spinner;
