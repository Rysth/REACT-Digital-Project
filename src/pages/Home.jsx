import React from 'react';
import Portrait from '../assets/images/portrait/portrait.png';

function Home() {
  return (
    <section>
      <div className="container max-w-screen-xl p-4 mx-auto">
        <div className="grid md:grid-cols-2">
          <header className="mb-5 text-center md:text-left">
            <h2 className="text-2xl font-light text-[var(--CL-primary-light)] uppercase">
              Project
            </h2>
            <h2 className="text-4xl font-bold">Primal Statement</h2>
            <div className="relative flex items-center justify-center w-full gap-3 mx-auto my-3">
              <button type="button" className="z-20 w-12 h-10 bg-white border">
                <i className="fa-solid fa-arrow-left" />
              </button>
              <button
                type="button"
                className="z-20 w-12 h-10 border bg-[var(--CL-primary-extra-light)]"
              >
                <i className="fa-solid fa-arrow-right" />
              </button>
              <hr className="absolute top-0 right-0 w-full md:w-2/4 translate-y-[18.5px] z-10" />
            </div>
            <div className="flex items-center justify-end">
              <p className="text-base text-[var(--CL-primary-light)]">01</p>
              <hr className="w-10 -rotate-45" />
              <p className="text-base text-[var(--CL-primary-light)]">02</p>
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
