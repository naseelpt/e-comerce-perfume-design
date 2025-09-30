import React from 'react'
import i from '../assets/hi.jpg'
import ii from '../assets/hii.jpg'
import iii from '../assets/hiii.jpg'
import iiii from '../assets/hiiii.jpg'
import iiiii from '../assets/hiiiii.jpg'
import iiiiii from '../assets/hiiiiii.jpg'
import { CgShoppingCart } from 'react-icons/cg';
import { BsClock, BsInstagram, BsTwitter } from 'react-icons/bs'
import aa from '../assets/a.jpg'
import { BiOutline, BiPhone } from 'react-icons/bi'
import { MdEmail } from 'react-icons/md'
import { FaFacebook } from 'react-icons/fa'
import q from '../assets/p.png'
import qq from '../assets/pp.png'
import qqq from '../assets/ppp.png'
import qqqq from '../assets/pppp.png'



function Home() {

  const products = [
    { name: "Chypre", price: "$66.49", old: "$69.99", img: ii, rating: "★★★★☆", value: 4 },
    { name: "Leathery", price: "$56.99", old: "$59.99", img: iii, rating: "★★★☆☆", value: 3 },
    { name: "Floral", price: "$44.99", old: "$49.99", img: i, rating: "★★★★★", value: 5 },
    { name: "Woody", price: "$38.99", old: "$42.99", img: iiii, rating: "★★☆☆☆", value: 2 },
    { name: "Aqua", price: "$59.99", old: "$64.99", img: iiiiii, rating: "★★★☆☆", value: 3 },
    { name: "Musk", price: "$69.99", old: "$74.99", img: iiiii, rating: "★★★☆☆", value: 3 },
  ];

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


      <div className='w-full ' style={{ backgroundColor: "#f8f1e5" }}>

        <div className='grid grid-cols-1 sm-grid-cols-2 md:grid-cols-2 p-16'>

          <div className='py-24'>

            <h1 className='font-bold text-5xl'>Discover The Best Deals</h1>

            <h1 className='font-bold text-5xl py-3'>on Top Products</h1>

            <p className='mt-3 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, qui! </p>

            <p className=' text-xl'> Quaerat optio delectus amet atque voluptatem nihil voluptatum </p>

            <p className='text-xl'>velit drolem</p>

            <div className='flex gap-2.5 py-6'>
              <button className='border border-pink-800 px-5 py-3 rounded-2xl hover:bg-pink-600 font-bold hover:text-white text-pink-800'>Shop Now </button>

              <button className='border border-pink-800 px-5 py-3 rounded-2xl hover:bg-pink-600 font-bold hover:text-white text-pink-800'>View Offer</button>
            </div>



          </div>

          <div className='w-full'>
            <img src={i} alt="" className='w-full h-auto  rounded-2xl' />
          </div>





        </div>


      </div>



      <div className="w-full bg-gray-200 p-16">
        <h2 className="md:text-2xl text-xl text-amber-900 font-bold mb-4">Featured Products</h2>


        <div className="overflow-x-auto">
          <div className="flex gap-4 w-max ">
            {products.map((item) => (
              <div
                className="md:w-[335px] w-[240px] sm-w-[100px] bg-white rounded-2xl shadow-md hover:shadow-xl transition  " >
                <img
                  src={item.img}
                  alt=""
                  className="md:w-full md:h-64 object-cover rounded-t-xl"
                />
                <div className='px-3 py-4'>
                  <div className='flex gap-2'>
                    <span className='text-yellow-400 text-xl'>{item.rating}  </span>
                    <h1>({item.value})</h1>

                  </div>
                  <h3 className="mt-2 font-bold ">{item.name}</h3>
                  <div className='flex justify-between pt-2'>
                    <div className='flex gap-2'>
                      <p className="text-pink-600 font-bold">{item.price}</p>
                      <p className="text-gray-400 line-through text-sm">{item.old}</p>
                    </div>

                    <div className='bg-amber-900 rounded-full h-6 flex justify-center items-center hover:bg-pink-600 w-6'>
                      <CgShoppingCart size={15} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>



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

        <p className='text-center pt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
        <div className='grid md:grid-cols-4 sm:grid-cols-2 md:gap-8 sm-gap-4 grid-cols-1 px-18 py-5'>

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



      <div className='w-full'>

        <div className='bg-gray-200 md:p-20'>

          <h1 className='text-center md:text-4xl text-xl sm-text-3xl font-bold'>Special Offers</h1>

          <p className='md:text-xl text-sm pt-3 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>

          <div className='w-full'>

            <div className='grid md:grid-cols-3 gap-5 sm-grid-cols-2 grid-cols-1 p-8 w-full'>

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



      <div className='w-full'>

        <div className='px-8 py-16 bg-gray-50 '>

          <div className='grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 '>

            <div className='w-full md:h-[500px] sm:h-[350px] h-[350px] bg-cover rounded-2xl' style={{ backgroundImage: `url(${aa})` }}>

            </div>

            <div className='px-10 py-3'>

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


          </div>

        </div>


      </div>



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

export default Home