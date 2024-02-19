import React from 'react';
import { FaTruckArrowRight,FaUnlockKeyhole,FaPlugCirclePlus,FaBookMedical } from "react-icons/fa6";

function HeroSection() {
  return (
    <section className="pt-12 bg-white mt-0 md:mt-8">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center px-10">
      <div className="lg:w-1/2">
  <h1 className="text-4xl text-center md:ml-24 lg:text-5xl font-bold text-gray-800 leading-tight mb-4 lg:mb-6 inline-block">
    We have best Medicare<br /> plan options for you
  </h1>
  <p className="text-lg text-gray-600 mb-6 lg:mb-8 text-center">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis <br/>libero et hendrerit vestibulum.
  </p>
  <button className="bg-blue-500 text-white md:mb-0 mb-8 py-2 px-6 rounded-full text-lg font-medium shadow hover:bg-blue-600 focus:outline-none focus:bg-blue-600 md:ml-72 ml-8 ">
    Read More
  </button>
</div>

        <div className="lg:w-96 mt-8 lg:mt-0 shadow-inner">
          <img src="https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=" alt="Doctor" className="w-full rounded-lg" />
        </div>
      </div>
      <div className='bg-sky-600'>
        <div className='grid grid-cols-2 md:grid-cols-4 '>
        <div className='flex flex-col items-center justify-center'>
      <FaTruckArrowRight className='h-10 w-10 bg-slate-50 rounded-full my-4 py-2'/>
      
      <div className="text-center mb-5">
        <h1 className='text-white font-medium text-xl mb-2'>Best Transportation</h1>
        <p className='text-white font-sans text-base'>
          Lorem enjnen ejiofjeij<br/>
          efuhfuiheefnfnn<br/>
          euuhfnjn
        </p>
      </div>
    </div>
    <div className='flex flex-col items-center justify-center'>
      <FaUnlockKeyhole  className='h-10 w-10 bg-slate-50 rounded-full my-4 py-2'/>
      
      <div className="text-center mb-5">
        <h1 className='text-white font-medium text-xl mb-2'>Best Medacal support</h1>
        <p className='text-white font-sans text-base'>
          Lorem enjnen ejiofjeij<br/>
          efuhfuiheefnfnn<br/>
          euuhfnjn
        </p>
      </div>
    </div>
    <div className='flex flex-col items-center justify-center'>
      <FaPlugCirclePlus className='h-10 w-10 bg-slate-50 rounded-full my-4 py-2'/>
      
      <div className="text-center mb-5">
        <h1 className='text-white font-medium text-xl mb-2'>Quelified Doctors</h1>
        <p className='text-white font-sans text-base'>
          Lorem enjnen ejiofjeij<br/>
          efuhfuiheefnfnn<br/>
          euuhfnjn
        </p>
      </div>
    </div>
    <div className='flex flex-col items-center justify-center'>
      <FaBookMedical className='h-10 w-10 bg-slate-50 rounded-full my-4 py-2'/>
      
      <div className="text-center mb-5">
        <h1 className='text-white font-medium text-xl mb-2'>Best Medicare</h1>
        <p className='text-white font-sans text-base'>
          Lorem enjnen ejiofjeij<br/>
          efuhfuiheefnfnn<br/>
          euuhfnjn
        </p>
      </div>
    </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
