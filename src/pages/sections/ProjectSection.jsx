import Subtitle from '../../components/Subtitle/Subtitle';
import Project1 from '../../assets/images/projects/project_1.jpg';
import Project2 from '../../assets/images/projects/project_2.jpg';
import Project3 from '../../assets/images/projects/project_3.jpg';
import Project4 from '../../assets/images/projects/project_4.jpg';
import Project5 from '../../assets/images/projects/project_5.jpg';

function ProjectSection() {
  return (
    <div className="mt-10">
      <div className="container max-w-screen-xl p-4 mx-auto animate__animated animate__fadeIn animate__slow">
        <Subtitle title="Our Projects" />
        <div className="grid gap-5 mt-10">
          <div className="flex flex-col sm:flex-row lg:gap-5">
            <img
              src={Project1}
              alt=""
              className="flex-grow sm:w-1/2 max-h-[255px] object-cover"
            />
            <img
              src={Project2}
              alt=""
              className="sm:w-1/2 max-h-[255px] object-cover"
            />
          </div>
          <div className="flex flex-row lg:gap-5">
            <img
              src={Project4}
              alt=""
              className="w-2/5 sm:w-1/4 max-h-[255px] object-cover"
            />
            <img
              src={Project5}
              alt=""
              className="w-1/5 sm:w-3/6 max-h-[255px] object-cover"
            />
            <img
              src={Project3}
              alt=""
              className="w-2/5 sm:w-1/4 max-h-[255px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
