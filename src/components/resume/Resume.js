import React from "react";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}

      <div className="row">
        <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
          <div className="left flex-1 flex items-center justify-center">
            <fieldset
              data-aos="zoom-in"
              className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
            >
              <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
                Experience
              </legend>
              <div className=" relative">
                {/* design */}
                <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                  <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                  <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                  <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                </div>
                {/* design */}
                <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                  <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                    Internship
                  </h1>
                  <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                    Badan Kepegawaian Negara
                  </span>
                  <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                    June 2019 - Sept 2019
                  </span>
                  <p className=" text-[.9rem] text-justify break-words text-gray-500">
                    Create a CMS website-based employee credit rating system
                    using the PHP programming language
                  </p>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="right flex-1 flex items-center justify-center">
            <fieldset
              data-aos="zoom-in"
              className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
            >
              <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
                Education
              </legend>
              <div className=" relative">
                {/* design */}
                <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                  <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                  <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                  <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                </div>
                {/* design */}
                <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                  <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                    Information Sytem
                  </h1>
                  <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                    STMIK JAYABAYA
                  </span>
                  <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                    Year 2016 - Year 2020
                  </span>
                  <p className=" text-[.9rem] text-justify text-gray-500">
                    As an undergraduate student, I have a good understanding of
                    web development technologies such as HTML, CSS, Tailwind
                    CSS, JavaScript, and React JS. Additionally, I'm proficient
                    in backend technologies such as Node.js, Express.js, and
                    PostgreSQL.
                  </p>
                </div>
              </div>
            </fieldset>
          </div>
        </div>

        <div className="row">
          <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
            <div className="left flex-1 flex items-center justify-center">
              <fieldset
                data-aos="zoom-in"
                className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
              >
                <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
                  Education Non Formal
                </legend>
                <div className=" relative">
                  {/* design */}
                  <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                    <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                    <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                    <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                  </div>
                  {/* design */}
                  <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                    <ul>
                      <li>
                        <span>
                          <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                            Fullstack Web Developer
                          </h1>
                        </span>
                        <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                          Build With Angga
                        </span>
                      </li>
                      <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                        January 2021 - February 2021
                      </span>
                    </ul>
                    <br />
                    <ul>
                      <li>
                        <span>
                          <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                            Create backend app for beginner
                          </h1>
                        </span>
                        <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                          Dicoding
                        </span>
                      </li>
                      <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                        March 2021 - April 2021
                      </span>
                    </ul>
                    <br />
                    <ul>
                      <li>
                        <span>
                          <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                            Junior Web Developer
                          </h1>
                        </span>
                        <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                          Digitalent Menkominfo
                        </span>
                      </li>
                      <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                        Juny 2021 - July 2021
                      </span>
                    </ul>

                    <br />
                    <ul>
                      <li>
                        <span>
                          <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                            Fullstack Node Js
                          </h1>
                        </span>
                        <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                          Code ID
                        </span>
                      </li>
                      <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                        March 2022 - Juny 2022
                      </span>
                    </ul>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
