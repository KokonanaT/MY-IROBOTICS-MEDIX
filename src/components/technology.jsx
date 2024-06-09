import React from 'react'
import Button from '../layouts/Button';
import TechCard from '../layouts/TechCard';
import img1 from "../assets/tech2.jpeg";
import img2 from "../assets/tech3.jpg";
import img3 from "../assets/tech4.jpg";
import img4 from "../assets/tech5.jpeg";
import img5 from "../assets/tech6.jpg";
import img6 from "../assets/tech1.jpg";
const Technology = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24'>
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">Our Latest Acquired treatment Technology</h1>
          <p className="mt-2 text-center lg:text-start">with the use of the technologies, our clients satisfaction is achieved in a more profound and systematic way</p>
        </div>
        <div className="mt-4 lg:mt-0">
          <Button title="make a pick"/>
        </div>
      </div>
      <div className="my-8">
        <div className="flex flex-wrap justify-center gap-5 transition-colors duration-300 ease-in-out  group-hover:bg-[#ade9dc]">
          <TechCard img={img1} headlines="Discovering the Efficiency of AI"/>
          <TechCard img={img2} headlines="Use of AI in the Pediatric ward"/>
          <TechCard img={img3} headlines="The Use of AI in Mental Diagnosis"/>
          <TechCard img={img4} headlines="The importance of AI in the evaluation of vital signs"/>
          <TechCard img={img5} headlines="the Application of AI in Child Conception"/>
          <TechCard img={img6} headlines="AI in Dermatology   "/>
        </div>
      </div>
    </div>
  )
}

export default Technology;