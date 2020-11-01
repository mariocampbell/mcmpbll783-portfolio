import React from 'react'

import SpinnerIso from '../../assets/images/loading-spinner-iso.png'
import SpinnerCircle from '../../assets/images/loading-spinner-circle.png'

const Spinner = ({ width }) => {
    return (
        <div className={`${width} relative`}>
            <img className='absolute' src={ SpinnerIso} alt="iso mcmpbll783"/>
            <img className='animate-spin' src={ SpinnerCircle} alt="spinner circle"/>
        </div>
    );
};

export default Spinner;