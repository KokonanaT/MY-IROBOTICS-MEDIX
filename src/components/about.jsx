import React from 'react';
import img from "../assets/surgery services.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className="w-full lg:w-4/4 space-y-3">
        <h1 className="text-4xl font-semibold text-center lg:text-start">About Us</h1>
        <p className="text-sm lg:text-base text-justify lg:text-start">
          At IRobotics Medix, we're on a mission to revolutionize healthcare using cutting-edge technology. With a focus on artificial intelligence (AI), we aim to make healthcare more proactive, predictive, and personalized.
          <br /><br />
          Our dedicated team is committed to bridging the gap in healthcare accessibility by providing innovative AI solutions tailored to individual needs. From predictive analytics to personalized medicine, we empower both patients and healthcare professionals with advanced AI-driven tools and insights.
          <br /><br />
          Our vision is to create a seamless healthcare experience that enhances patient outcomes and improves quality of life. By embracing AI's transformative potential in medicine, we're working towards a smarter, healthier future for all.
          <br /><br />
          Join us in shaping the future of healthcare, where empowerment, prevention, and holistic well-being are at the forefront. Welcome to IRobotics Medix, where innovation meets compassion for a healthier tomorrow.
        </p>
      </div>
      <div  className="w-full lg:w-3/4">
        <img src={img} alt="img" className="rounded-lg"  />
      </div>
    </div>

  );
}

export default About;
