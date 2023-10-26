import Subtitle from '../../components/Subtitle/Subtitle';

function ContactSection() {
  return (
    <div>
      <div className="container max-w-screen-xl p-4 mx-auto text-[var(--CL-primary-gray)]">
        <Subtitle title="Contact Us" />
        <div className="grid lg:grid-cols-[40%_1fr]">
          <form className="grid gap-3 my-10">
            <fieldset className="border-0 outline-0">
              <label htmlFor="name">
                <input
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
