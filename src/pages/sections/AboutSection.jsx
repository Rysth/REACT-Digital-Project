import { Link } from 'react-router-dom';

function AboutSection() {
  return (
    <section>
      <div className="container max-w-screen-xl p-4 mx-auto ">
        <div className="bg-[var(--CL-primary-extra-light)] grid text-center p-4 py-6">
          <div className="flex flex-col gap-3 font-light ">
            <h2 className="text-3xl text-[var(--CL-primary-light)]">About</h2>
            <p className="text-xs leading-5 text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <Link
              to="/"
              className=" p-4 md:px-8 md:py-5 text-xs tracking-widest uppercase bg-white text-[var(--CL-primary-gray)]"
            >
              Read More
              <i className="ml-3 fa-solid fa-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
