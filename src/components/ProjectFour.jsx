import habilidadeHome from "../assets/habilidadeHome.png";
import  DefaultCarousel from './Carousel';
import React from "react";
const features = [
  { name: "Tecnologias", description: "PHP - Plataforma Moodle" },
  { name: "Banco de Dados", description: "MySql" },
  { name: "Design", description: "Tail Wind CSS" },
];

export function ProjectFour() {
  return (
    <div id="projetos" className="bg-white shadow-lg rounded-xl pb-2 ">
      {/* <div
        id="carouselDarkVariant"
        class="relative"
        data-twe-carousel-init
        data-twe-ride="carousel"
      >
        <div
          class="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
          data-twe-carousel-indicators
        >
          <button
            data-twe-target="#carouselDarkVariant"
            data-twe-slide-to="0"
            data-twe-carousel-active
            class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            data-twe-target="#carouselDarkVariant"
            class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            data-twe-slide-to="1"
            aria-label="Slide 1"
          ></button>
          <button
            data-twe-target="#carouselDarkVariant"
            class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            data-twe-slide-to="2"
            aria-label="Slide 1"
          ></button>
        </div>

        <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <div
            class="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-twe-carousel-fade
            data-twe-carousel-item
            data-twe-carousel-active
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp"
              class="block w-full"
              alt="Motorbike Smoke"
            />
            <div class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
              <h5 class="text-xl">First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div
            class="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-twe-carousel-fade
            data-twe-carousel-item
          >
            <img
              src="https://picsum.photos/200/300"
              class="block w-full"
              alt="Mountaintop"
            />
            <div class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
              <h5 class="text-xl">Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div
            class="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-twe-carousel-fade
            data-twe-carousel-item
          >
            <img
              src={habilidadeHome}
              class="block w-full"
              alt="Woman Reading a Book"
            />
            <div class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
              <h5 class="text-xl">Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>

        <button
          class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-twe-target="#carouselDarkVariant"
          data-twe-slide="prev"
        >
          <span class="inline-block h-8 w-8 dark:grayscale">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
          </span>
        </button>
        <button
          class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-twe-target="#carouselDarkVariant"
          data-twe-slide="next"
        >
          <span class="inline-block h-8 w-8 dark:grayscale">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
          </span>
        </button>
      </div> */}

      <a target="blank" href="http://habilidade.tech">
        <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
          Habilidade.tech
        </h2>
      </a>
      <p className="mt-4 text-gray-500 px-5">
        Desbloquei seu pontencial utilizando uma plataforma de ensino dinâmica e
        acessivel{" "}
      </p>
      <div className="columns-3 px-10 mt-5">
        {features.map((feature) => (
          <div key={feature.name} className="grid grid-cols-1 ">
            <div className="border-t border-primary">
              <h2 className="font-medium text-gray-900 mt-3">{feature.name}</h2>
              <h2 className="mt-2 text-sm text-gray-500">
                {feature.description}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <a target="blank" href="https://habilidade.tech/">
        <img
          src={habilidadeHome}
          alt="print1"
          className="rounded-[4rem] object-contain my-3 px-5"
        />
      </a>
    </div>
  );
}
