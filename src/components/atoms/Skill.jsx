import React from 'react';

const Skill = ({ skill, level=3 }) => {

    const skillCircle = ['vacio', 'vacio', 'vacio', 'vacio', 'vacio']

    return (
        <div className='flex justify-between items-center pb-2'>
            <p className='w-3/6 font-light md:text-lg' >{ skill }</p>
            <div className='w-3/6 flex flex-row justify-end'>
                { 
                    skillCircle.map( (item, index) => {
                        if(level > index) { 
                            return <div key={index} className='w-4 h-4 mx-2 bg-primary-800 border-primary-800 rounded-full '></div>
                        } else {
                            return <div key={index} className='w-4 h-4 mx-2 bg-white border border-primary-700 rounded-full '></div>
                        }
                    })
                }
            </div>
        </div>
    );
};

export default Skill;
