import habilidadeHome from "../assets/habilidadeHome.png";
import habilidadeHomeAuth from "../assets/habilidadeHomeAuth.png";
import habilidadeLogin from "../assets/habilidadeLogin.png";

import React, { useRef } from "react";

const features = [
  { name: "Tecnologias", description: "PHP - Plataforma Moodle" },
  { name: "Banco de Dados", description: "MySql" },
  { name: "Design", description: "Tail Wind CSS" },
];

export function ProjectFour() {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -carouselRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: carouselRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <div id="projetos" className="bg-white shadow-lg rounded-xl pb-2 ">
      <>
        <a target="blank" href="http://habilidade.tech">
          <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            Habilidade.tech
          </h2>
        </a>
        <p className="mt-4 text-gray-500 px-5">
          Desbloquei seu pontencial utilizando uma plataforma de ensino dinâmica
          e acessivel{" "}
        </p>
        <div className="columns-3 px-10 mt-5">
          {features.map((feature) => (
            <div key={feature.name} className="grid grid-cols-1 ">
              <div className="border-t border-primary">
                <h2 className="font-medium text-gray-900 mt-3">
                  {feature.name}
                </h2>
                <h2 className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </h2>
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-5 p-5 rounded-[4rem] ">
          <div
            className="carousel flex overflow-hidden"
            ref={carouselRef}
          >
            <div className="carousel-item min-w-full ">
              <img
                src={habilidadeHome}
                alt="Carousel Image 1"
                className="w-full h-full  object-cover rounded-[2rem] p-5"
              />
            </div>           
            <div className="carousel-item min-w-full">
              <img
                src={habilidadeLogin}
                alt="Carousel Image 3"
                className="w-full h-full  object-cover rounded-[4rem] p-10"
              />
            </div>
            <div className="carousel-item min-w-full">
              <img
                src={habilidadeHomeAuth}
                alt="Carousel Image 2"
                className="w-full h-full object-cover rounded-[4rem] p-10"
              />
            </div>
          </div>

          <div className="absolute inset-y-0 left-0 flex items-center justify-start ml-10 pl-10">
            <button
              className="carousel-control-prev bg-gray-800 hover:bg-gray-700 text-white rounded-full p-2 focus:outline-none"
              onClick={scrollLeft}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center justify-end pr-10 mr-10">
            <button
              className="carousel-control-next bg-gray-800 hover:bg-gray-700 text-white rounded-full p-2 focus:outline-none"
              onClick={scrollRight}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {/* <a target="blank" href="https://habilidade.tech/">
          <img
            src={habilidadeHome}
            alt="print1"
            className="rounded-[4rem] object-contain my-3 px-5"
          />
        </a> */}
      </>
    </div>
  );
}
