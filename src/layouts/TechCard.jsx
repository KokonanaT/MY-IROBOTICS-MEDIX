import React from 'react'

const TechCard = ({img, headlines}) => {
  return (
    <div className="w-full lg:w-1/4 p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] space-y-2 rounded-lg cursor-pointer hover:scale=105 transition duration-300 ease-in-out">
      <img className="h-64 md:h-96 lg:h-40 w-full rounded-lg " src={img} alt={headlines} />
      <h3 className="text-lg text-center font-semibold">{headlines}</h3>
      <p className='text-center text-sm'>
Revolutionizing the healthcare landscape, AI technology is at the forefront of medical innovation, transforming diagnostics, treatment plans, and patient care with unprecedented precision and efficiency. However, as we embrace these advancements, robust policies must be in place to ensure ethical use, data privacy, and equitable access. By balancing cutting-edge technology with thoughtful regulation, we can harness the full potential of AI to create a healthier, more inclusive future for all.</p>
    </div>
  )
}

export default TechCard;