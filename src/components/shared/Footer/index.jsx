import React from 'react';

import { Redes } from '../../atoms';
import { isoMarioCampbell } from '../../../images'

const Footer = () => {
    return (
        <footer className='bg-primary-900 flex flex-col items-center pt-20 pb-12'>
                <img className='w-12 ' src={ isoMarioCampbell } alt="Isotipo Mario Campbell"/>
                <Redes />
                <p className='flex flex-col md:flex-row text-white text-center font-light'>
                    <span className='md:pr-2'>Todos los derechos reservados 2020.</span>
                    <span>Creado con<i className="hover:text-primary-500 transition-colors duration-300 ease-in-out far fa-heart text-sm px-2"></i>por <a className='hover:text-primary-500 transition-colors duration-300 ease-in-out' href="http://mariocampbell.com.ar" target='_blank' rel="noreferrer"><strong>mcmpbll783</strong></a></span>
                </p>
        </footer>
    );
};

export default Footer;
