import React from 'react'
import { BiOutline, BiPhone } from 'react-icons/bi'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'


function Contact() {
  return (
    <>

    <div className='w-full bg-pink-700'>

        <div className='px-5 py-10 '>

          <div className='grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1 px-10 gap-5 '>

            <div className='bg-white rounded-2xl p-10'>

              <h1 className='text-2xl font-medium'>Send Us a Meassage</h1>

              <div className='pt-5'>
                <h1>Your name</h1>
                <input type="text" placeholder='your name' className='w-full border  h-10 rounded-2xl px-3 text-sm border-black' />
              </div>

              <div className='pt-5'>
                <h1>Your Email</h1>
                <input type="text" placeholder='your@email.com' className='w-full border  h-10 rounded-2xl px-3 text-sm border-black' />
              </div>

              <div className='pt-5'>
                <h1>Your name</h1>
                <input type="text" placeholder='your message' className='w-full border h-30 rounded-2xl px-3 text-sm border-black' />
              </div>

              <button className='w-full h-10 bg-pink-800 text-white rounded-2xl mt-5 '>Send Message</button>

            </div>


            <div className='bg-white rounded-2xl w-full md:p-10 sm:p-8 p-6'>

              <h1 className='text-2xl font-medium'>Contact Information</h1>

              <div className='pt-5 flex gap-3'>

                <div className='bg-pink-300 w-9 h-9 rounded-full flex items-center justify-center'><BiPhone size={20} /></div>

                <div>
                  <h1 className='font-medium'>Phone</h1>
                  <h1>+91 6235636362</h1>
                  <h1>mon-fri 9pm-6pm</h1>
                </div>

              </div>

              <div className='pt-5 flex gap-3'>

                <div className='bg-pink-300 w-9 h-9 rounded-full flex items-center justify-center'><MdEmail size={20} /></div>

                <div>
                  <h1 className='font-medium'>Email</h1>
                  <h1>Contact@perfume.com</h1>
                  <h1>Support@perfume.com</h1>
                </div>

              </div>

              <div className='pt-5 flex gap-3'>

                <div className='bg-pink-300 w-9 h-9 rounded-full flex items-center justify-center'><BiOutline size={20} /></div>

                <div>
                  <h1 className='font-medium'>Our Boutique</h1>
                  <h1>123 perfume street</h1>
                  <h1>German,Italy 7501</h1>
                </div>

              </div>

              <h1 className='font-medium pt-10'>Follow Us</h1>

              <div className='flex pt-4 gap-4'>
                <p className='bg-pink-300 w-9 h-9 rounded-full flex items-center justify-center'><BsInstagram size={16} /></p>

                <p className='bg-pink-300 w-9 h-9 rounded-full flex items-center justify-center'><FaFacebook size={16} /></p>

                <p className='bg-pink-300 w-9 h-9 rounded-full flex items-center justify-center'><BsTwitter size={16} /></p>
              </div>





            </div>


          </div>
        </div>

      </div>
    
    
    
    </>
  )
}

export default Contact