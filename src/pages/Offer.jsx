import React from 'react'
import { BsClock } from 'react-icons/bs'

function Offer() {
  return (
    <>

     <div className='w-full'>
    
            <div className='bg-gray-200 xl:p-20 lg:p-16 md:p-16 sm:p-10 py-10 px-1'>
    
              <h1 className='text-center md:text-4xl text-xl sm-text-3xl font-bold'>Special Offers</h1>
    
              <p className='md:text-xl text-sm pt-3 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
    
              <div className='w-full'>
    
                <div className='grid xl:grid-cols-3 lg:grid-cols-2 gap-5 md-grid-cols-2 sm:grid-cols-1 grid-cols-1 xl:p-8 p-3 w-full'>
    
                  <div className='bg-amber-300 transition-transform hover:scale-105 w-full p-5 rounded-2xl '>
    
                    <div className='flex justify-between'>
                      <h1 className='text-amber-700 font-bold'>Hot Summer Sale</h1>
                      <div className='bg-white w-8 h-8 rounded-full flex justify-center items-center text-amber-800 '>%</div>
                    </div>
    
                    <p className='py-4 text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing <br /> elit discount.</p>
    
                    <div className='text-gray-600 flex gap-3 items-center text-sm'><BsClock /> Ends on 2026-10-31</div>
    
                    <div className='pt-4'>
                      <div className='bg-white shadow-2xl w-full rounded-2xl p-4'>
                        <h1 className='text-gray-400 text-sm'>Use Code</h1>
                        <h1 className='font-bold'>FREEPERFUMR</h1>
                      </div>
                    </div>
    
                    <div className='pt-4 '>
    
                      <button className='text-center w-full p-2 hover:bg-white rounded-2xl border border-amber-800 '>claim offer</button>
    
                    </div>
    
    
    
    
    
    
    
    
                  </div>
    
                  <div className='bg-violet-300 transition-transform hover:scale-105 w-full p-5 rounded-2xl '>
    
                    <div className='flex justify-between'>
                      <h1 className='text-violet-700 font-bold'>Hot Summer Sale</h1>
                      <div className='bg-white w-8 h-8 rounded-full flex justify-center items-center text-violet-700 '>%</div>
                    </div>
    
                    <p className='py-4 text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing <br /> elit discount.</p>
    
                    <div className='text-gray-600 flex gap-3 items-center text-sm'><BsClock /> Ends on 2026-10-31</div>
    
                    <div className='pt-4'>
                      <div className='bg-white shadow-2xl w-full rounded-2xl p-4'>
                        <h1 className='text-gray-400 text-sm'>Use Code</h1>
                        <h1 className='font-bold'>SUMMER</h1>
                      </div>
                    </div>
    
                    <div className='pt-4 '>
    
                      <button className='text-center hover:bg-white w-full p-2 rounded-2xl border border-violet-700 '>claim offer</button>
    
                    </div>
    
    
    
    
    
    
    
    
                  </div>
    
                  <div className='bg-pink-300 transition-transform hover:scale-105 w-full p-5 rounded-2xl '>
    
                    <div className='flex justify-between'>
                      <h1 className='text-pink-700 font-bold'>Hot Summer Sale</h1>
                      <div className='bg-white w-8 h-8 rounded-full flex justify-center items-center text-pink-700 '>%</div>
                    </div>
    
                    <p className='py-4 text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing <br /> elit discount.</p>
    
                    <div className='text-gray-600 flex gap-3 items-center text-sm'><BsClock /> Ends on 2026-10-31</div>
    
                    <div className='pt-4'>
                      <div className='bg-white shadow-2xl w-full rounded-2xl p-4'>
                        <h1 className='text-gray-400 text-sm'>Use Code</h1>
                        <h1 className='font-bold'>NEW20</h1>
                      </div>
                    </div>
    
                    <div className='pt-4 '>
    
                      <button className='text-center hover:bg-white w-full p-2 rounded-2xl border border-pink-700 '>claim offer</button>
    
                    </div>
    
    
    
    
                  </div>
    
    
                </div>
              </div>
    
            </div>
    
          </div>



    
    
    
    
    </>
  )
}

export default Offer