import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative ">
         <div className="absolute w-full h-full max-h-[500px]  bg-black/40 text-white flex flex-col justify-center text-4xl font-semibold px-4 ">
          <p >
            The <span className="text-orange-400">Best</span>
          </p>
          <p>
          <span className="text-orange-400">Food</span>   <span>Deleivered</span>
          </p>
        </div>
        <img className="max-h-[500px] w-full object-cover" src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      </div>
    </div>
  );
};

export default Hero;
