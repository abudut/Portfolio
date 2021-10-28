import React from "react";

function Resume() {
  return (
    <section id='Resume'>
    <div  className="bg-gray-900 w-full text-white flex justify-center ">
      <div className="divide-y w-full px-3  divide-white sm:w-3/6 sm:px-0 ">
        <div className="flex py-4 w-full justify-between sm:py-16">
          <h1  className="text-left pb-3 text-green-600 font-bold text-md sm:text-lg">
            EDUCATION
          </h1>{" "}
          <div>
            <h3>Caparrella-Spain</h3>{" "}
            <div className="flex justify-between">
              <p className='pr-5'>Bachelors degree</p> <p>2020</p>
            </div>{" "}
          </div>
        </div>

        <div className="flex py-4 w-full justify-between sm:py-16">
          <h1 id='Projects' className="text-left pb-3 text-green-600 font-bold text-md sm:text-lg">
            EDUCATION
          </h1>{" "}
          <div>
            <h3>Caparrella-Spain</h3>{" "}
            <div className="flex justify-between">
              <p  className='pr-5'>Bachelors degree</p> <p>2020</p>
            </div>{" "}
          </div>
        </div>

        <div className="flex py-4 w-full justify-between sm:py-16">
          <h1 className="text-left pb-3 text-green-600 font-bold text-md sm:text-lg">
            EDUCATION
          </h1>{" "}
          <div>
            <h3>Caparrella-Spain</h3>{" "}
            <div className="flex justify-between">
              <p   className='pr-5'>Bachelors degree</p> <p>2020</p>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Resume;
