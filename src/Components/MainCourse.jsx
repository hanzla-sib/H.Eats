import React from 'react'
import {categories} from "../data/data"
const MainCourse = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 flex flex-col space-y-4">
    <div className="flex justify-center items-center">
      <h2 className="text-3xl font-bold text-orange-600">
        Top Rated Menu Items
      </h2>
    </div>
    
    <div className="grid sm:grid-cols-2 md:grid-cols-4  gap-6">
      {categories.map((index) => (
        <div
          key={index.id}
          className="max-h-full border border-black rounded-lg hover:scale-90"
        >
        <div className="sm:max-h-[300px] max-h-[200px] flex flex-row justify-between sm:p-3 p-20 items-center ">
            <h1 className="font-bold">{index.name}</h1>
            <img
            className=" rounded-lg w-full object-contain max-h-[200px] sm:max-h-[120px] md:max-h-[150px] "
            src={index.image}
          />
          </div>
          
          
        </div>
      ))}
    </div>
  </div>
  )
}

export default MainCourse
