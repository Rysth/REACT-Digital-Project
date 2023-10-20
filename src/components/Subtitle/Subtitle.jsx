import PropTypes from 'prop-types';

function Subtitle({ title }) {
  return (
    <h2 className="text-3xl text-[var(--CL-primary-light)] md:text-4xl lg:text-5xl text-center md:text-left font-light">
      {title}
    </h2>
  );
}

Subtitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Subtitle;
