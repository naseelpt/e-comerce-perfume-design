import React from 'react'
import aa from '../assets/a.jpg'


function Aboutus() {
  return (
    <>

    <div className='w-full'>
    
            <div className='xl:px-10 lg:px-5 md:px-5 sm:px-3 px-3  py-16 bg-gray-50 '>
    
              <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 '>
    
                <div className=''>
    
                  <h1 className='text-4xl text-amber-700 font-bold'>About Us</h1>
    
                  <p className='pt-8 font-medium text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla saepe ad ipsum tempora non possimus, quae quidem quam? Libero est cupiditate dignissimos aliquam illum, quidem sapiente. Molestias delectus libero maiores.</p>
    
                  <div className='grid grid-cols-2 gap-2 pt-7'>
    
                    <div className='bg-white p-5 shadow-2xl rounded-2xl w-full'>
                      <h1 className='font-medium text-pink-800'>500+</h1>
                      <h1 className='text-gray-500'>Unique Fragnents</h1>
    
                    </div>
    
                    <div className='bg-white p-5 shadow-2xl rounded-2xl w-full'>
                      <h1 className='font-medium text-pink-800'>50+</h1>
                      <h1 className='text-gray-500'>Unique Fragnents</h1>
    
                    </div>
    
    
                  </div>
    
                  <div className='grid grid-cols-2 gap-2 pt-7'>
    
                    <div className='bg-white p-5 shadow-2xl rounded-2xl w-full'>
                      <h1 className='font-medium text-pink-800'>100%</h1>
                      <h1 className='text-gray-500'>Unique Fragnents</h1>
    
                    </div>
    
                    <div className='bg-white p-5 shadow-2xl rounded-2xl w-full'>
                      <h1 className='font-medium text-pink-800'>24/7</h1>
                      <h1 className='text-gray-500'>Unique Fragnents</h1>
    
                    </div>
    
    
                  </div>
    
    
    
                </div>

                  <div className='w-full md:h-[500px] sm:h-[350px] h-[350px] bg-cover rounded-2xl' style={{ backgroundImage: `url(${aa})` }}>
    
                </div>
    
    
              </div>
    
            </div>
    
    
          </div>
    
    </>
  )
}

export default Aboutus