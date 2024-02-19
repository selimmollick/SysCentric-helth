import { FaBookMedical, FaPlugCirclePlus, FaTruckArrowRight, FaUnlockKeyhole } from "react-icons/fa6";


const Header2 =()=>{
     return(
        <div class="relative h-64 mt-80 md:mt-0 mx-auto">
        <img className="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8IaI0vpwHwUz7r7SUTuYmZEiOFwgoe4NX6yT_B6q2Tg&s" alt="Background Image" class="absolute inset-0 w-full h-full object-cover opacity-50"/>
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="text-white text-4xl font-bold  bg-blue-900 bg-opacity-80 py-8">
          <div className='w-screen'>
        <div className='grid grid-cols-1 md:grid-cols-4 mx-28'>
        <div className='flex flex-col items-center justify-center'>
      <FaTruckArrowRight className='h-10 w-10  rounded-full my-4 py-2'/>
      
      <div className="text-center mb-5">
        <h1 className='text-white font-medium text-xl mb-1'>1000+</h1>
        <hr className=""></hr>
        <p className='text-white font-sans text-base'>
          Lorem enjnen ejiofjeij<br/>
          efuhfuiheefnfnn<br/>
          euuhfnjn
        </p>
      </div>
    </div>
    <div className='flex flex-col items-center justify-center'>
      <FaUnlockKeyhole  className='h-10 w-10  rounded-full my-4 py-2'/>
      
      <div className="text-center mb-5">
        <h1 className='text-white font-medium text-xl mb-2'>2017</h1>
        <hr className=""></hr>
        <p className='text-white font-sans text-base'>
          Lorem enjnen ejiofjeij<br/>
          efuhfuiheefnfnn<br/>
          euuhfnjn
        </p>
      </div>
    </div>
    <div className='flex flex-col items-center justify-center'>
      <FaPlugCirclePlus className='h-10 w-10 rounded-full my-4 py-2'/>
      
      <div className="text-center mb-5">
        <h1 className='text-white font-medium text-xl mb-2'>1105</h1>
        <hr className=""></hr>
        <p className='text-white font-sans text-base'>
          Lorem enjnen ejiofjeij<br/>
          efuhfuiheefnfnn<br/>
          euuhfnjn
        </p>
      </div>
    </div>
    <div className='flex flex-col items-center justify-center'>
      <FaBookMedical className='h-10 w-10  rounded-full my-4 py-2'/>
      
      <div className="text-center mb-5">
        <h1 className='text-white font-medium text-xl mb-2'>500+</h1>
        <hr className=""></hr>
        <p className='text-white font-sans text-base'>
          Lorem enjnen ejiofjeij<br/>
          efuhfuiheefnfnn<br/>
          euuhfnjn
        </p>
      </div>
    </div>
        </div>
      </div>
          </div> 
        </div>
      </div>
      
     )
}

export default Header2;