import React from "react";
import { data } from "../data/data";
const Food = () => {
  //  console.log(data);
const [food,setfood]=React.useState(data);

const filterfood=(catergory)=>{
    if(catergory==="All"){
setfood(data);
    }else{
        setfood(
            data.filter((key)=>{
                return key.category===catergory;
            })
         )
    }

}

const filterprice=(price)=>{
setfood(
    data.filter((key)=>{
        return key.price===price;
    })
)
}
//   const setfood()
  return (
    <div className="max-w-[1640px] p-4 flex flex-col space-y-4">
      <div className="flex justify-center items-center">
        <h2 className="text-3xl font-bold text-orange-600">
          Top Rated Menu Items
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-between">
      <div className="flex flex-col text-orange-600 space-y-3">
        <p className="md:pl-6">Filter type</p>
        <div className="flex flex-row space-x-2 md:pl-6 ">
          <button onClick={(e)=>filterfood("All")} className="border border-orange-600 hover:bg-black hover:font-bold">All</button>
          <button onClick={(e)=>filterfood("burger")} className="border border-orange-600 hover:bg-black hover:font-bold">Burgers</button>
          <button onClick={(e)=>filterfood("pizza")} className="border border-orange-600 hover:bg-black hover:font-bold">Pizza</button>
          <button onClick={(e)=>filterfood("salad")} className="border border-orange-600 hover:bg-black hover:font-bold">Salad</button>
          <button onClick={(e)=>filterfood("chicken")} className="border border-orange-600 hover:bg-black hover:font-bold">Chicken</button>
        </div>
      </div>
      <div className="flex flex-col  text-orange-600 space-y-3">
        <p className="md:pl-6">Fixed Price</p>
        <div className="flex flex-row space-x-2 md:pl-6 ">
          <button onClick={(e)=>filterprice("$")} className="border border-orange-600 hover:bg-black hover:font-bold">$</button>
          <button onClick={(e)=>filterprice("$$")} className="border border-orange-600 hover:bg-black hover:font-bold">$$</button>
          <button onClick={(e)=>filterprice("$$$")} className="border border-orange-600 hover:bg-black hover:font-bold">$$$</button>
          <button onClick={(e)=>filterprice("$$$$")} className="border border-orange-600 hover:bg-black hover:font-bold">$$$$</button>
        </div>
      </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4  gap-6">
        {food.map((index) => (
          <div key={index.id} className="max-h-full border border-black rounded-lg hover:scale-90">
            <img
              className=" rounded-lg w-full object-cover lg:max-h-[200px] max-h-[130px]"
              src={index.image}
            />
            <div className="max-h-[100px] flex flex-row justify-between p-2 items-center ">
            <h1 className="font-bold">{index.name}</h1>
            <h1 className="bg-orange-600 rounded-full p-1">{index.price}</h1>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
