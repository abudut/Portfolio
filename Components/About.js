import React from "react";


function About(props) {
  return (
    <section id='About'>
    <div  className="flex justify-center bg-black text-white w-full divide-y divide-light-blue-400 py-16 ">
      <div className="w-1/2 my-10 text-center">
        <h1 className="text-left pb-3 text-green-600 font-bold text-lg ">
          ABOUT ME
        </h1>

        <p className="text-left pb-5">
          Hi there! I am Abudu! You might also know me as PAPA React. I've been
          coding for over 10 years now. As a Full Stack developer I've worked
          both with startups and large corporations to help build scale their
          companies. Along the journey I realised my passion existed in helping
          others excel and pursue their dreams as upcoming developers. With this
          passion, I have now trained thousand's of developers across the globe.
          Through live coaching sessions on Youtube, I have accumulated several
          MILLION views demonstrating how to apply developer skills in a range
          of cool builds and challenges.
     
        </p>

        <div className="py-3">
          <h1  className="text-left pb-3 text-green-600 font-bold text-lg">
            CONTACT DETAILS
          </h1>
          <p className="text-left">Abudu Touray</p>
          <p className="text-left">London</p>
          <p className="text-left">+4407712505678</p>
          <p className="text-left">abdoultouray@gmail.com</p>
        </div>
      </div>
    </div>
    </section>
  );
}

export default About;
