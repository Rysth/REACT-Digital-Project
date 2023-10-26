import Subtitle from '../../components/Subtitle/Subtitle';
import Banner from '../../assets/images/projects/project_5.jpg';

function ContactSection() {
  return (
    <div>
      <div className="container max-w-screen-xl p-4 mx-auto text-[var(--CL-primary-gray)] animate__animated animate__fadeIn animate__slow my-10 md:my-20">
        <Subtitle title="Contact Us" />
        <div className="grid lg:grid-cols-[40%_1fr] my-10 gap-7">
          <form className="grid gap-3" method="post">
            <fieldset className="border-0 outline-0">
              <label htmlFor="name">
                <input
                  required
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="w-full px-6 py-4 bg-[var(--CL-neutral-light)]"
                />
              </label>
            </fieldset>
            <fieldset className="border-0 outline-0">
              <label htmlFor="phone_number">
                <input
                  required
                  type="tel"
                  name="phone_number"
                  id="phone_number"
                  placeholder="Phone Number"
                  className="w-full px-6 py-4 bg-[var(--CL-neutral-light)]"
                />
              </label>
            </fieldset>
            <fieldset className="border-0 outline-0">
              <label htmlFor="email">
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-full px-6 py-4 bg-[var(--CL-neutral-light)]"
                />
              </label>
            </fieldset>
            <fieldset className="border-0 outline-0">
              <label htmlFor="interest">
                <input
                  required
                  type="text"
                  name="interest"
                  id="interest"
                  placeholder="Interested In"
                  className="w-full px-6 py-4 bg-[var(--CL-neutral-light)]"
                />
              </label>
            </fieldset>
            <fieldset className="border-0 outline-0">
              <label htmlFor="message">
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  className="w-full px-6 py-4 bg-[var(--CL-neutral-light)] min-h-[180px] max-h-[180px] min-w-full resize-none"
                />
              </label>
            </fieldset>
            <fieldset className="flex justify-end border-0 outline-0 md:justify-start">
              <button
                type="submit"
                className="p-4 md:px-8 md:py-5 text-xs tracking-widest uppercase flex items-center gap-3 justify-center text-white bg-[var(--CL-primary-gray)]  md:hover:translate-x-5 transition w-full md:w-max"
              >
                Send Email
                <i className="fa-solid fa-arrow-right" />
              </button>
            </fieldset>
          </form>
          <picture className="col-start-1 col-end-2 row-start-1 row-end-2 max-h-60 lg:max-h-full lg:row-start-1 lg:col-start-2">
            <img src={Banner} alt="" className="object-cover w-full h-full" />
          </picture>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
