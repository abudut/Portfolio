import React from "react";

function Home() {
  return (
    <section id='Home'>
    <div 
      style={{
        backgroundImage: `url("https://images.wallpaperscraft.com/image/matrix_code_numbers_147523_1920x1080.jpg")`,
      }}
      className="bg-center bg-no-repeat h-screen bg-auto text-gray-50 "
    >
      <div className="pt-80 text-center font-serif">
        <div className=" px-10 flex justify-center font-black text-3xl sm:text-5xl  md:text-7xl  text-opacity-50 ">
          <h1>I'm Abudu Touray</h1>
        </div>
        <div className=" px-10 flex justify-center font-bold text-gray-300  text-lg ">
          <h2>Based in London. Web Developer</h2>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Home;
