import Subtitle from '../../components/Subtitle/Subtitle';

function MissionSection() {
  return (
    <div>
      <div className="container max-w-screen-xl p-4 mx-auto my-10 animate__animated animate__fadeIn animate__slow md:my-20">
        <Subtitle title="Main Focus/Mission Statement" />
        <div className="flex flex-col sm:flex-row md:justify-between text-[var(--CL-primary-gray)] mt-10 gap-5">
          <div className="flex items-center gap-3">
            <p className="text-6xl font-black md:text-8xl lg:text-[12rem] text-[var(--CL-primary-extra-light)]">
              1
            </p>
            <p className="text-xs md:text-base  max-w-[375px] lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur, lectus et facilisis placerat.
            </p>
          </div>
          <div className="flex items-center gap-3 md:gap-7">
            <p className="text-6xl font-black md:text-8xl lg:text-[12rem] text-[var(--CL-primary-extra-light)]">
              2
            </p>
            <p className="text-xs md:text-base max-w-[375px] lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur, lectus et facilisis placerat, magna mauris porttitor
              tortor, a auctor est felis ut nisl.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissionSection;
