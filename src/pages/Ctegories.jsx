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

   <div className="w-full">
  {/* Fragrance Collection */}
  <div className="bg-amber-50 xl::p-20 lg:p-16 md:p-12 sm:p-12 p-6">
    <h1 className="text-center md:text-4xl sm:text-3xl text-xl font-bold">
      Explore Our Fragrance Collection
    </h1>
    <p className="md:text-xl text-sm pt-3 text-center">
      Lorem ipsum dolor sit amet consectetur adipisicing elit
    </p>

    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 pt-12 xl:gap-5 md:gap-6 gap-4">
      {[i, ii, iii, iiii, iiiii, iiiiii].map((img, index) => (
        <div key={index} className="w-full relative transition-transform hover:scale-105 rounded-2xl overflow-hidden">
          <div
            className="brightness-75 w-full h-48 sm:h-56 md:h-72 bg-cover bg-center rounded-2xl"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h1 className="text-xl font-bold">Mens Collection</h1>
            <p>amet consectetur adipisicing elit</p>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Best Seller Products */}
  <div className="w-full py-10">
    <h1 className="text-center md:text-4xl sm:text-3xl text-xl font-bold">Best Seller Product</h1>
    <p className="text-center pt-2 md:px-0 px-3">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit
    </p>

    <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 md:gap-8 sm:gap-4 gap-6 md:px-[72px] px-4 py-5">
      {pro.map((item, index) => (
        <div key={index} className="group relative">
          <div className="w-full h-52 md:h-64 bg-gray-400 rounded-xl relative overflow-hidden">
            <img src={item.img} alt={item.name} className="w-full h-full object-cover rounded-xl" />
            <div className="absolute inset-0 hidden group-hover:flex justify-center items-center backdrop-blur-sm">
              <button className="bg-red-500 p-2 w-64 text-white rounded-3xl">Add to Cart</button>
            </div>
          </div>
          <div className="pt-3 text-center">
            <h1 className="font-medium">{item.name}</h1>
            <h1 className="font-medium">{item.price}</h1>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

    
    
    </>
  )
}

export default Ctegories