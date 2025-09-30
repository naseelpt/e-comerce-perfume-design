import React from 'react'
import i from '../assets/hi.jpg'
import ii from '../assets/hii.jpg'
import iii from '../assets/hiii.jpg'
import iiii from '../assets/hiiii.jpg'
import iiiii from '../assets/hiiiii.jpg'
import iiiiii from '../assets/hiiiiii.jpg'
import q from '../assets/p.png'
import qq from '../assets/pp.png'
import qqq from '../assets/ppp.png'
import qqqq from '../assets/pppp.png'

function Ctegories() {

    
  const pro = [
    { name: "Chypre", price: "$66.49", img: q },
    { name: "Leathery", price: "$56.99", img: qq },
    { name: "Floral", price: "$44.99", img: qqq },
    { name: "Woody", price: "$38.99", img: qqqq },
    { name: "Chypre", price: "$66.49", img: qq },
    { name: "Leathery", price: "$56.99", img: qqqq },
    { name: "Floral", price: "$44.99", img: q },
    { name: "Woody", price: "$38.99", img: qqq }

  ];
  return (
    <>

    <div className='w-full'>
    
            <div className='bg-amber-50 md:p-20 sm-p-16 p-24'>
    
              <h1 className='text-center md:text-4xl text-xl sm-text-3xl font-bold'>Explore Our Fragrence Collection</h1>
    
              <p className='md:text-xl text-sm pt-3 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
    
              <div className='grid md:grid-cols-3 md:gap-5 sm-gap-4 gap-6 sm-grid-cols-2 grid-cols-1 pt-18'>
    
    
    
                <div className="w-full relative transition-transform hover:scale-105 ">
                  <div className='brightness-80 w-full absolute h-48 sm:h-56 md:h-72 bg-cover bg-center rounded-2xl' style={{ backgroundImage: `url(${i})` }}> </div>
    
                  <div className='md:px-6 relative sm-px-4 px-2 md:pt-58 sm-pt-80 pt-24'>
                    <h1 className='text-xl  font-bold text-white'>Mens collection</h1>
                    <p className='text-white '>amet consectetur adipisicing elit</p>
                  </div>
    
    
    
                </div>
    
                <div className="w-full relative transition-transform hover:scale-105 ">
                  <div className='brightness-80 w-full absolute h-48 sm:h-56 md:h-72 bg-cover bg-center rounded-2xl' style={{ backgroundImage: `url(${ii})` }}> </div>
    
                  <div className='md:px-6 relative sm-px-4 px-2 md:pt-58 sm-pt-80 pt-24'>
                    <h1 className='text-xl  font-bold text-white'>Mens collection</h1>
                    <p className='text-white '>amet consectetur adipisicing elit</p>
                  </div>
    
    
    
                </div>
    
                <div className="w-full relative transition-transform hover:scale-105 ">
                  <div className='brightness-80 w-full absolute h-48 sm:h-56 md:h-72 bg-cover bg-center rounded-2xl' style={{ backgroundImage: `url(${iii})` }}> </div>
    
                  <div className='md:px-6 relative sm-px-4 px-2 md:pt-58 sm-pt-80 pt-24'>
                    <h1 className='text-xl  font-bold text-white'>Mens collection</h1>
                    <p className='text-white '>amet consectetur adipisicing elit</p>
                  </div>
    
    
    
                </div>
    
                <div className="w-full relative transition-transform hover:scale-105 ">
                  <div className='brightness-80 w-full absolute h-48 sm:h-56 md:h-72 bg-cover bg-center rounded-2xl' style={{ backgroundImage: `url(${iiii})` }}> </div>
    
                  <div className='md:px-6 relative sm-px-4 px-2 md:pt-58 sm-pt-80 pt-24'>
                    <h1 className='text-xl  font-bold text-white'>Mens collection</h1>
                    <p className='text-white '>amet consectetur adipisicing elit</p>
                  </div>
    
    
    
                </div>
    
                <div className="w-full relative transition-transform hover:scale-105 ">
                  <div className='brightness-80 w-full absolute h-48 sm:h-56 md:h-72 bg-cover bg-center rounded-2xl' style={{ backgroundImage: `url(${iiiii})` }}> </div>
    
                  <div className='md:px-6 relative sm-px-4 px-2 md:pt-58 sm-pt-80 pt-24'>
                    <h1 className='text-xl  font-bold text-white'>Mens collection</h1>
                    <p className='text-white '>amet consectetur adipisicing elit</p>
                  </div>
    
    
    
                </div>
    
                <div className="w-full relative transition-transform hover:scale-105 ">
                  <div className='brightness-80 w-full absolute h-48 sm:h-56 md:h-72 bg-cover bg-center rounded-2xl' style={{ backgroundImage: `url(${iiiiii})` }}> </div>
    
                  <div className='md:px-6 relative sm-px-4 px-2 md:pt-58 sm-pt-80 pt-24'>
                    <h1 className='text-xl  font-bold text-white'>Mens collection</h1>
                    <p className='text-white '>amet consectetur adipisicing elit</p>
                  </div>
    
    
    
                </div>
    
    
    
    
    
    
              </div>
    
    
            </div>
    
    
          </div>

           <div className='w-full py-10'>
          
                  <h1 className='text-center md:text-4xl text-xl sm-text-3xl font-bold'>Best Seller Product</h1>
          
                  <p className='text-center pt-2 md:px-0 px-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
                  <div className='grid md:grid-cols-4 sm:grid-cols-2 md:gap-8 sm-gap-4 grid-cols-1 md:px-18 px-10 py-5'>
          
                    {pro.map((item) => (
          
                      <div className='group'>
                        <div className='w-72 relative h-52  bg-gray-400 rounded-xl'>
                          <img src={item.img} alt="" />
          
                          <div className=' absolute hidden group-hover:flex top-1/2 -translate-y-1/2 left-1/2 justify-center items-center duration-200 -translate-x-1/2 h-full group-hover:backdrop-blur-sm'>
                            <button className='bg-red-500 p-2 w-64  text-white rounded-3xl'>Add to Cart</button>
                          </div>
                        </div>
          
          
                        <div className='pt-3'>
                          <h1 className='font-medium'>{item.name}</h1>
                          <h1 className='font-medium'>{item.price}</h1>
                        </div>
          
                      </div>))}
                  </div>
          
          
                </div>
    
    
    
    
    
    
    
    </>
  )
}

export default Ctegories