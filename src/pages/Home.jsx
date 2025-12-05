import React from 'react'

import { CgShoppingCart } from 'react-icons/cg';
import { BsClock, BsInstagram, BsTwitter } from 'react-icons/bs'

import {  BiPhone } from 'react-icons/bi'
import { MdEmail } from 'react-icons/md'
import { FaFacebook } from 'react-icons/fa'

import i from '../assets/hi.jpg'
import ii from '../assets/hii.jpg'
import iii from '../assets/hiii.jpg'
import iiii from '../assets/hiiii.jpg'
import iiiii from '../assets/hiiiii.jpg'
import iiiiii from '../assets/hiiiiii.jpg'



function Home() {



  return (

    <>


      <div className='w-full ' style={{ backgroundColor: "#f8f1e5" }}>

        <div className='grid grid-cols-1 sm-grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:p-16 p-3'>

          <div className='py-24'>

            <h1 className='font-bold xl:text-5xl text-4xl'>Discover The Best Deals</h1>

            <h1 className='font-bold xl:text-5xl text-4xl py-3'>on Top Products</h1>

            <p className='mt-3 xl:text-xl text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, qui! </p>

            <p className=' xl:text-xl text-lg'> Quaerat optio delectus amet atque voluptatem nihil voluptatum </p>

            <p className='text-xl'>velit drolem</p>

            <div className='flex gap-2.5 py-6'>
              <button className='border border-pink-800 px-5 py-3 rounded-2xl hover:bg-pink-600 font-bold hover:text-white text-pink-800'>Shop Now </button>

              <button className='border border-pink-800 px-5 py-3 rounded-2xl hover:bg-pink-600 font-bold hover:text-white text-pink-800'>View Offer</button>
            </div>



          </div>

          <div className='w-full pt-28 xl:pt-0'>
            <img src={i} alt="" className='w-full h-auto  rounded-2xl' />
          </div>





        </div>


      </div>











    </>
  )
}

export default Home