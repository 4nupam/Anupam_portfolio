import React, { useState } from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail
} from "react-icons/ai";
import { AiFillFilePdf } from "react-icons/ai";
import image from "../assests/dev-ed-wave.png";
import dataimage from "./image.js";
import code from '../assests/code.png'
import background from '../assests/background.png'
import Skill from "./Skill.js";

import cv from "../assests/Anupam_Frontend.pdf"

const Main = () => {

  return (
    <div className='bg-gray-800'>
      <main className="px-10  md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between ">
            <h1 className="font-burtons"> <img className="size-12" src={code}></img> </h1>
            <ul className="flex items-center gap-3">
              <li>
                <a href={cv} className="" download>
                  <AiFillFilePdf
                    className="cursor-pointer size-10 text-teal-500 hover:text-gray-600" /></a>

              </li>
              <li>
                <a href="mailto:4.anupamupadhyay@gmail.com" className="">
                  <AiFillMail
                    className="cursor-pointer size-10 text-teal-500 hover:text-gray-600" /></a>

              </li>
            </ul>
          </nav>
          <div className="text-center flex-col gap-3 p-10">
            <h2 className="text-4xl py-2 text-teal-400 font-medium  md:text-6xl">
              <sup>&lt;</sup>Anupam<sub>&gt;</sub></h2>
            <i className="text-1xl text-white py-2 font-bold md:text-2xl">Javascript Developer</i>
            <p className="text-base font-medium text-teal-100">
              Experienced front-end developer with a passion for continuous learning and growth.
              Hungry for new opportunities to
              excel in delivering innovative solutions.
              Eager to leverage expertise and drive to advance in the field.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="https://twitter.com/4nupam_" className="text-teal-500 rounded-full hover:text-gray-600">
              {" "}
              <AiFillTwitterCircle />
            </a>
            <a href="https://linkedin.com/in/anupam-upadhyay-504a1b208" className="text-teal-500 rounded-full hover:text-gray-600">
              {" "}
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/4nupam" className="text-teal-500 rounded-full hover:text-gray-600">
              <AiFillGithub />{" "}
            </a>
          </div>
          <div
            className="mx-auto bg-gradient-to-b from-teal-300 
          rounded-full w-60 h-60 relative overflow-hidden mt-20 md:h-96 md:w-96"
          >
            <img src={image} layout="fill" objectFit="cover"></img>
          </div>
        </section>
        
        <h2 className="text-teal-500 mt-5 font-bold text-4xl"><sup>{"-"}</sup> Experience <sub>{"-"}</sub></h2>

        <section className="grid mt-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">


          <div class=" max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <svg class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
            </svg>
            <a href="#">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">WiJungle</h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Leveraged<span className="text-teal-500 font-semibold"> React, HTML, CSS, and JavaScript </span> across various projects, consistently meeting
              client expectations and delivering high-quality results.</p>
            <a href="https://www.linkedin.com/company/wijungle/" class="inline-flex font-medium items-center text-blue-600 hover:underline">
              More About Company
              <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
              </svg>
            </a>
          </div>
          <div class=" max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <svg class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
            </svg>
            <a href="#">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Venturepact</h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Demonstrated versatility and expertise in <span className="text-teal-500 font-semibold"> React, HTML, CSS, and JavaScript</span>, ensuring the
              successful completion of diverse projects and garnering client approval</p>
            <a href="https://www.linkedin.com/company/venturepact/" class="inline-flex font-medium items-center text-blue-600 hover:underline">
              More About Company
              <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
              </svg>
            </a>
          </div>

        </section>
        <h2 className="text-teal-500 mt-5 mb-5 font-bold text-4xl"><sup>{"{"}</sup> Projects <sub>{"}"}</sub></h2>
        <section className="grid mt-12 pb-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

          {dataimage &&
            dataimage.map((e) => (
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href={e.Link}>
                  <img class="rounded-t-lg" src={e.url} alt="" />
                </a>
                <div class="p-5">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {e.project_name}
                  </h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {e.Desc}
                  </p>
                  <a
                    href={e.Link}
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <AiFillGithub />
                    <svg
                      class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
        </section>

        
        {/* <h2 className="text-teal-500 mt-5 font-bold text-4xl">
          <sup>{"`"}</sup> Skill <sub>{"`"}</sub></h2> */}
        <section>

{/* <Skill/> */}
        </section>
      </main>
    </div>
  );
};

export default Main;
