import React from 'react';

const ServicesCard = ({ icon, title }) => {
  return (
    <div className="group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:translate-y-6 transition duration-300 ease-in-out">
      <div className="bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]">{icon}</div>
      <h1 className="font-semibold text-lg">{title}</h1>
      <p><b>Predictive Analysis:</b> Utilizing advanced algorithms and data analytics, we predict and prevent potential health issues before they arise, enabling proactive interventions and improved patient care.</p>
      <p><b>Telemedicine Solution:</b> Our telemedicine services enable remote consultations, diagnostics, and monitoring, ensuring accessibility to quality healthcare from the comfort of your home.</p>
      <p><b>Personalized Medicine:</b> We offer personalized treatment plans based on individual patient data and genetic profiles, optimizing treatment outcomes and minimizing adverse effects.</p>
      <p><b>AI-Driven Diagnostics:</b> Leveraging AI algorithms, we provide accurate and timely diagnostics, aiding in early disease detection and improving patient prognosis.</p>
      <p><b>Medical Imaging Analysis:</b> Our image analysis services utilize AI to interpret images such as X-rays, MRIs, and CT scans, assisting healthcare professionals in diagnosis and treatment planning.</p>
      <h3 className="text-backgroundColor cursor-pointer hover:text-[#ade9dc] transition duration-300 ease-in-out">Learn more</h3>
    </div>
  );
};

export default ServicesCard;
