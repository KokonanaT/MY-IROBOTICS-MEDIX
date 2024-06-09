import React, { useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import docImg from '../assets/docs.jpg';
import nurseImg from '../assets/nurses.jpg';
import geriImg from '../assets/geri.webp';
import cardioImg from '../assets/cardio.jpg';
import intensiveImg from '../assets/Intensive.webp';
import famImg from '../assets/famdoc.jpg';


const DoctorsNurses = () => {
  const slider = useRef(null);

  const data = [
    {
      img: docImg,
      specialties: "Dermatologists",
    },
    {
      img: nurseImg,
      specialties: "Pediatricians",
    },
    {
      img: geriImg,
      specialties: "Geriatricians",
    },
    {
      img: cardioImg,
      specialties: "Cardiologist",
    },
    {
      img: intensiveImg,
      specialties: "Intensive Healthcare Provider",
    },
    {
      img: famImg,
      specialties: "Family Medicine",
    },
  ]; 

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToScroll: 3,
          slidesToShow: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16">
      <div className="flex flex-col items-center lg:flex-row justify-between mb-10">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">Our Doctors/Nurses</h1>
          <p className="mt-2 text-center lg:text-start">
Efficient and relatable doctors and nurses are the backbone of any healthcare system. At IRobotics Medix, these dedicated professionals are the pillars that keep us standing tall.
          </p>
        </div>
        <div className="flex gap-5 mt-4 lg:mt-0">
          <button className="bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]" onClick={() => slider.current.slickPrev()}>
            <FaArrowLeft size={25} />
          </button>
          <button className="bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]" onClick={() => slider.current.slickNext()}>
            <FaArrowRight size={25} />
          </button>
        </div>
      </div>
      <div className="mt-5">
        <Slider ref={slider} {...settings}>
          {data.map((e, index) => (
            <div key={index} className="h-[350px] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer">
              <div>
                <img src={e.img} alt={e.specialties} className="h-56 rounded-t-xl w-full" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3 className="pt-2 font-semibold">{e.specialties}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DoctorsNurses;
