import { Link } from 'react-router-dom';
import Subtitle from '../../components/Subtitle/Subtitle';
import Project1 from '../../assets/images/projects/project_1.jpg';
import Project2 from '../../assets/images/projects/project_2.jpg';
import Project3 from '../../assets/images/projects/project_3.jpg';
import Project4 from '../../assets/images/projects/project_4.jpg';
import Project5 from '../../assets/images/projects/project_5.jpg';

function ProjectSection() {
  return (
    <div className="mt-10">
      <div className="container max-w-screen-xl p-4 mx-auto my-10 animate__animated animate__fadeIn animate__slow md:my-20">
        <Subtitle title="Our Projects" />
        <div className="grid gap-5 mt-10">
          <div className="flex flex-col gap-5 sm:flex-row">
            <Link
              to="/"
              className="relative flex-grow sm:w-1/2 md:hover:scale-105 md:hover:shadow-2xl md:transition md:grayscale md:hover:grayscale-0"
            >
              <img
                src={Project1}
                alt="First building"
                className="max-h-[255px] object-cover w-full h-full"
              />
            </Link>
            <Link
              to="/"
              className="flex-grow sm:w-1/2 md:hover:scale-105 md:hover:shadow-2xl md:transition md:grayscale md:hover:grayscale-0"
            >
              <img
                src={Project2}
                alt="Second building"
                className="max-h-[255px] object-cover w-full h-full"
              />
            </Link>
          </div>
          <div className="flex flex-row lg:gap-5">
            <Link
              to="/"
              className="w-2/5 sm:w-1/4 md:hover:scale-105 md:hover:shadow-2xl md:transition md:grayscale md:hover:grayscale-0"
            >
              <img
                src={Project3}
                alt="Third building"
                className=" max-h-[255px] object-cover w-full h-full"
              />
            </Link>
            <Link
              to="/"
              className="w-1/5 sm:w-3/6 md:hover:scale-105 md:hover:shadow-2xl md:transition md:grayscale md:hover:grayscale-0"
            >
              <img
                src={Project4}
                alt="Fourth building"
                className=" max-h-[255px] object-cover w-full h-full "
              />
            </Link>
            <Link
              to="/"
              className="w-2/5 sm:w-1/4 md:hover:scale-105 md:hover:shadow-2xl md:transition md:grayscale md:hover:grayscale-0"
            >
              <img
                src={Project5}
                alt="Fifth building"
                className=" max-h-[255px] object-cover w-full h-full"
              />
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <Link
            to="/projects"
            className="p-4 md:px-8 md:py-5 text-xs tracking-widest uppercase flex items-center gap-3 justify-center text-white bg-[var(--CL-primary-gray)] my-10 md:hover:translate-x-5 transition"
          >
            All Projects
            <i className="fa-solid fa-arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
