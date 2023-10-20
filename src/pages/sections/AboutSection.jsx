import { Link } from 'react-router-dom';
import Portrait from '../../assets/images/portrait/portrait_1.png';
import Portrait2 from '../../assets/images/portrait/portrait_2.jpg';
import Portrait3 from '../../assets/images/portrait/portrait_3.jpg';

function AboutSection() {
  return (
    <section className="my-10 md:my-20 animate__animated animate__fadeIn animate__slow">
      <div className="container max-w-screen-xl mx-auto sm:p-4 ">
        <div className="bg-[var(--CL-neutral-gray)] grid gap-10 md:grid-cols-2 text-center px-4 py-6 xl:px-24 md:py-12">
          <div className="flex flex-col gap-3 font-light md:justify-between">
            <h2 className="text-3xl text-[var(--CL-primary-light)] md:text-5xl lg:text-6xl md:text-left">
              About
            </h2>
            <p className="text-xs leading-5 text-justify md:text-base sm:my-5 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <Link to="/" className="btn">
              Read More
              <i className="ml-3 fa-solid fa-arrow-right" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2">
            <picture className="flex flex-col justify-between gap-8">
              <img
                src={Portrait}
                alt="Building one"
                className="object-cover object-center h-full max-h-[265px] "
              />
              <img
                src={Portrait2}
                alt="Building two"
                className="object-cover object-center h-full max-h-[140px]"
              />
            </picture>
            <picture className="flex flex-col justify-center ">
              <img
                src={Portrait3}
                alt="Building three"
                className="object-cover object-center h-3/4 max-h-[345px]"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
