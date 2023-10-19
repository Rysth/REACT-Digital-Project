import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { projectActions } from '../../redux/ProjectSlice';

function HeroSection() {
  const { projectsArray, projectsQuantity, projectSelected } = useSelector(
    (store) => store.projects,
  );
  const [actualProject, setActualProject] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(projectActions.getProjectQuantity());
  }, [dispatch]);

  const handleProjectChange = (ID) => {
    if (ID >= 1 && ID <= projectsArray.length) setActualProject(ID);
  };

  useEffect(() => {
    dispatch(projectActions.getProjectById(actualProject));
  }, [actualProject, dispatch]);

  return (
    <section>
      <div className="container max-w-screen-xl p-4 mx-auto text-[var(--CL-primary-gray)]">
        <div className="grid md:grid-cols-[45%_1fr]">
          <header className="mb-5 text-center md:text-left md:flex md:flex-col md:justify-center">
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-light text-[var(--CL-primary-light)] uppercase lg:mt-48">
              Project
            </h2>
            <h2 className="text-4xl font-bold lg:text-5xl xl:text-6xl animate__animated animate__bounceIn animate__slow">
              {projectSelected.name}
            </h2>
            <div className="relative flex items-center justify-center w-full gap-3 mx-auto my-3 md:justify-start md:mt-10 lg:mt-20">
              <button
                type="button"
                className="z-20 w-12 h-10 bg-white border lg:w-16 lg:h-14 md:hover:scale-110 md:transition md:active:bg-slate-300 "
                onClick={() => handleProjectChange(actualProject - 1)}
              >
                <i className="fa-solid fa-arrow-left" />
              </button>
              <button
                type="button"
                className="z-20 w-12 h-10 lg:w-16 lg:h-14 border bg-[var(--CL-primary-extra-light)] md:hover:scale-110 md:transition md:active:bg-slate-300 "
                onClick={() => handleProjectChange(actualProject + 1)}
              >
                <i className="fa-solid fa-arrow-right" />
              </button>
              <hr className="absolute top-0 right-0 w-full md:w-4/5 translate-y-[18.5px] z-10 lg:translate-y-[1.70rem]" />
            </div>
            <div className="flex items-center justify-end md:justify-start md:mt-4 lg:mt-20 lg:gap-2">
              <p className="text-base text-[var(--CL-primary-light)] sm:text-lg lg:text-2xl">
                {actualProject < 10 ? `0${actualProject}` : actualProject}
              </p>
              <hr className="w-10 -rotate-45 sm:w-12 lg:w-16" />
              <p className="text-base text-[var(--CL-primary-light)] sm:text-lg lg:text-2xl">
                {projectsQuantity < 10
                  ? `0${projectsQuantity}`
                  : projectsQuantity}
              </p>
            </div>
          </header>
          <div className="relative">
            <img
              src={projectSelected.image}
              alt={projectSelected.name}
              className="md:max-h-[650px] max-h-[360px] min-h-[360px] md:min-h-[650px] w-full object-cover animate__animated animate__fadeIn animate__slower"
            />
            <Link
              to={projectSelected.to}
              className="absolute bottom-0 p-4 left-0 md:px-8 md:py-5 text-xs tracking-widest uppercase bg-white text-[var(--CL-primary-gray)]"
            >
              View Project
              <i className="ml-3 fa-solid fa-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
