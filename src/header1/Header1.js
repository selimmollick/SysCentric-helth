import { FaTruckArrowRight,FaHandHoldingMedical, FaStethoscope, FaHospital } from "react-icons/fa6";

const Header1 =()=>{
 return(
    <div className="bg-white py-12">
    <div className="container mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-800 py-4 my-4">Why Choose Us</h1>
        <p className="text-gray-900 font-serif mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p className="text-gray-900 font-serif mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      </div>
      <div className='bg-white'>
      <div className='grid md:grid-cols-3 grid-cols-1 mx-36'>
      <div className='items-center justify-center py-8 mt-12'>
          <div className="flex">
            <div className="h-12 w-12">

            <FaTruckArrowRight className='h-10 w-10 bg-sky-600 rounded-full py-2' />
            </div>
            <h1 className='text-gray-800 font-medium text-xl mb-2 ml-2'>Best Transportation</h1>
          </div>
          <p className='text-gray-800 font-sans text-base'>
            Lorem enjnen ejiofjeij
            efuhfuiheefnfnn
            euuhfnjn
          </p>
          <p className='text-gray-800 font-sans text-base'>
            Lorem enjnen ejiofjeij
            efuhfuiheefnfnn
            euuhfnjn
          </p>
          <div className="mt-4">

          <div className="flex">
            <div className="h-12 w-12">

            <FaTruckArrowRight className='h-10 w-10 bg-sky-600 rounded-full my-4 py-2'/>
            </div>
            <h1 className='text-gray-800 font-medium text-xl mb-2 ml-2'>Best Transportation</h1>
          </div>
          <p className='text-gray-800 font-sans text-base'>
            Lorem enjnen ejiofjeij
            efuhfuiheefnfnn
            euuhfnjn
          </p>
          <p className='text-gray-800 font-sans text-base'>
            Lorem enjnen ejiofjeij
            efuhfuiheefnfnn
            euuhfnjn
          </p>
        </div>
          </div>
        <div className='items-center justify-center py-10'>
        <img className="rounded-md md:h-96 h-64 w-full" src="https://st4.depositphotos.com/12985790/21800/i/450/depositphotos_218003704-stock-photo-smiling-young-female-doctor-medical.jpg"/>
        </div>
        
    <div className='items-center justify-center py-8'>
      <div className="flex">
        <div className="h-12 w-12">

        <FaHandHoldingMedical className='h-10 w-10 bg-sky-600 rounded-full my-4 py-2'/>
        </div>
        <h1 className='text-gray-900 font-medium text-xl mb-2 ml-2'>Emergency Services</h1>
      </div>
      <p className='text-gray-900 font-sans text-base'>
        Lorem enjnen ejiofjeij
        efuhfuiheefnfnn
        euuhfnjn
      </p>
      <p className='text-gray-900 font-sans text-base'>
        Lorem enjnen ejiofjeij
        efuhfuiheefnfnn
        euuhfnjn
      </p>
        
      <div className="mt-6"></div>
      <div className="flex items-center my-2">
        <div>

        <FaHospital className='h-10 w-10 bg-sky-600 rounded-full my-4 py-2'/>
        </div>
        <h1 className='text-gray-900 font-medium text-xl mb-2 ml-2'>Advanced Facilities</h1>
      </div>
      <p className='text-gray-900 font-sans text-base'>
        Lorem enjnen ejiofjeij
        efuhfuiheefnfnn
        euuhfnjn
      </p>
      <p className='text-gray-900 font-sans text-base'>
        Lorem enjnen ejiofjeij
        efuhfuiheefnfnn
        euuhfnjn
      </p>

    </div>
        
      </div>
    </div>
    </div>
  </div>
 )
}

export default Header1;