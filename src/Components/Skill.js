import React from 'react';
import skill from './Skillimg.js';

function Skill() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-20">
      {skill.map((e, index) => (
        <div key={index} className='max-w-sm m-auto p-10  bg-teal-200
         border-gray-200 rounded-lg shadow
         sm:max-w-full
         '
         >
          <img className="h-auto max-w-full rounded-lg cursor-pointer duration-200 hover:scale-110" src={e.logo} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Skill;
