import React from 'react';

import { isoMarioCampbell } from '../../../images'
import { Redes } from '../../atoms'

const LogoMarioCampbell = () => {
    return (
        <div className='flex flex-col items-center'>
            <a href="http://mariocampbell.com.ar" target='_blank' rel="noreferrer"><img className='w-14' src={ isoMarioCampbell } alt="isotipo Mario Campbell"/></a>
            <Redes />
            <h1 className='font-logotipo uppercase text-white text-3xl text-center -mt-2'>Mario Campbell</h1>
        </div>
    );
};

export default LogoMarioCampbell;
