import React from "react";

const HeadLineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 grid md:grid-cols-3 gap-3">
      <div className="relative max-h-[500px] rounded-full hover:scale-90">
        <div className="bg-black/40 absolute w-full h-full text-white justify-center items-center  flex flex-col rounded-3xl ">
          <p className="text-lg pt-1  font-bold">Suns out Daily</p>
          <p className=" font-bold">Recomended</p>
          <button className=" bg-transparent text-white border-white p-1 md:max-w-[200px] max-w-[100px] hover:bg-orange-400 hover:text-black  ">Order Now</button>
        </div>
        <img
          className="object-cover w-full max-h-[160px] rounded-3xl"
          src='https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'
        />
      </div>
      <div className="relative max-h-[500px] rounded-full  hover:scale-90">
        <div className="bg-black/40 absolute w-full h-full text-white justify-center items-center  flex flex-col rounded-3xl ">
          <p className="text-lg pt-1  font-bold">Suns out Daily</p>
          <p className=" font-bold">Recomended</p>
          <button className=" bg-transparent text-white border-white p-1 md:max-w-[200px] max-w-[100px] hover:bg-orange-400 hover:text-black ">Order Now</button>
        </div>
        <img
          className="object-cover w-full max-h-[160px] rounded-3xl"
          src='https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'
        />
      </div>
      <div className="relative max-h-[500px] rounded-full  hover:scale-90">
        <div className="bg-black/40 absolute w-full h-full text-white justify-center items-center  flex flex-col rounded-3xl ">
          <p className="text-lg pt-1  font-bold">Suns out Daily</p>
          <p className=" font-bold">Recomended</p>
          <button className=" bg-transparent text-white border-white p-1 md:max-w-[200px] max-w-[100px] hover:bg-orange-400 hover:text-black  ">Order Now</button>
        </div>
        <img
          className="object-cover w-full max-h-[160px] rounded-3xl"
          src='https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
        />
      </div>
    </div>
  );
};

export default HeadLineCards;

{
}
