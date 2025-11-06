import React from 'react'


function Card(props) {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='bg-zinc-600 text-white h-[350px] w-[250px] text-xl '>
        <img src={props.img} alt="" className='w-full'/>
         <h2 className='text-lg font-semibold mt-2 ml-5'>{props.name}</h2>
          <p className='text-sm text-gray-300 ml-5'>{props.role}</p>
          
          <div className='mt-3 ml-5'>
            <p className='text-sm'>{props.location}</p>
            <p className='text-sm'>{props.designation}</p>
            <button className='mt-3 bg-amber-500 hover:bg-amber-600 px-3 py-1 rounded-lg text-sm'> View Profile</button>
          </div>
      </div>
    </div>
  )
}

export default Card