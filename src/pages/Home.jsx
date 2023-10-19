import React from 'react';
import Portrait from '../assets/images/portrait/portrait.png';

function Home() {
  return (
    <section>
      <div className="container max-w-screen-xl p-4 mx-auto">
        <div className="grid md:grid-cols-2">
          <header className="mb-5 text-center md:text-left md:flex md:flex-col md:justify-center">
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-light text-[var(--CL-primary-light)] uppercase lg:mt-48">
              Project
            </h2>
            <h2 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
              Primal Statement
            </h2>
            <div className="relative flex items-center justify-center w-full gap-3 mx-auto my-3 md:justify-start md:mt-10 lg:mt-20">
              <button
                type="button"
                className="z-20 w-12 h-10 bg-white border lg:w-16 lg:h-14"
              >
                <i className="fa-solid fa-arrow-left" />
              </button>
              <button
                type="button"
                className="z-20 w-12 h-10 lg:w-16 lg:h-14 border bg-[var(--CL-primary-extra-light)]"
              >
                <i className="fa-solid fa-arrow-right" />
              </button>
              <hr className="absolute top-0 right-0 w-full md:w-4/5 translate-y-[18.5px] z-10 lg:translate-y-[1.70rem]" />
            </div>
            <div className="flex items-center justify-end md:justify-start md:mt-4 lg:mt-20 lg:gap-8">
              <p className="text-base text-[var(--CL-primary-light)] sm:text-lg lg:text-2xl">
                01
              </p>
              <hr className="w-10 -rotate-45 sm:w-12 lg:w-16" />
              <p className="text-base text-[var(--CL-primary-light)] sm:text-lg lg:text-2xl">
                02
              </p>
            </div>
          </header>
          <div className="relative">
            <img src={Portrait} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
