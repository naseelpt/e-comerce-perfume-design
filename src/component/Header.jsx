import React from 'react'
import { BiCart, BiHeart, BiSearch, BiUser } from 'react-icons/bi'


function Header() {
    return (
        <>

            <div className="w-full md:flex hidden   px-4">
                <div className="grid grid-cols-3 items-center h-18">

                    <div className="font-bold text-2xl ps-20 text-pink-600">ShopEase</div>

                    <div className="relative ms-30">

                        <input type="text" placeholder='search ' className='w-80 py-1 border border-gray-300 px-2 shadow rounded-2xl' />

                        <div className="absolute -mt-6  items-center left-68  text-gray-400">
                            <BiSearch size={18} />
                        </div>

                    </div>

                    <div className='ms-80 flex gap-5 '>

                      <BiHeart size={18} />
                      <BiCart size={18}/>
                      <BiUser size={18}/>
                        
                         </div>

                    
                </div>
            </div>

            <div className='w-full  '>
               <div className=' py-5 bg-pink-800' >
                    <div className='flex md:gap-5 sm:gap-3 gap-2  item-center md:font-bold sm:text-xl text-sm text-white justify-center'>
                        <h1 className='hover:text-black'>Home</h1>
                         <h1 className='hover:text-black'>Product</h1>
                          <h1 className='hover:text-black'>Categories</h1>
                           <h1 className='hover:text-black'>offers</h1>
                            <h1 className='hover:text-black'>About</h1>
                             <h1 className='hover:text-black'>Contact</h1>
                       
                    </div>
               </div>
            </div>

            





        </>
    )
}

export default Header