import React from 'react';

const Home = () => {
  return (
    <div className='min-h-screen relative'>
      <div className='absolute inset-0 bg-cover bg-center' style={{ backgroundImage: "url('/images/service background.jpg')"  }}></div>
      <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white'>
        <div className='max-w-4xl px-6 text-center'>
          <h1 className='text-4xl font-bold mb-6 leading-tight'>AI Transforming the Future of Healthcare</h1>
          <p className='text-lg leading-relaxed mb-6'>
            In the rapidly evolving landscape of healthcare, AI is revolutionizing how we diagnose, treat, and prevent diseases. From predictive analytics to personalized medicine, AI enables unprecedented advancements in patient care. Imagine AI-powered algorithms predicting heart attacks before they happen or virtual assistants streamlining healthcare professionals' workloads. AI's ability to analyze vast amounts of data swiftly and accurately means earlier diagnoses and more effective treatment plans.
            <br /><br />
            At IRobotics Medix, we harness AI to bridge gaps in healthcare, delivering a system that is reliable, effective, and less tasking. Join us in embracing a smarter, healthier future, powered by innovative AI solutions tailored to individual needs.
          </p>
          <button className='mt-5 bg-brightColor text-white px-8 py-3 rounded-full hover:bg-hoverColor transition duration-300 ease-in-out shadow-md' title="See Services">See Services</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
