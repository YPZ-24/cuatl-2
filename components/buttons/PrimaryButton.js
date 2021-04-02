import PropTypes from 'prop-types';

const PrimaryButton = ({ children, handler }) => {
  const animate = () => {
    handler();
  };

  return (
    <button
      type="button"
      onClick={animate}
      className="flex flex-row flex-nowrap items-center justify-center font-bold px-4 py-3 rounded-lg bg-accent text-base shadow hover:bg-inactive hover:text-primary"
    >
      {children}
    </button>
  );
};

PrimaryButton.propTypes = {
  handler: PropTypes.func
};

PrimaryButton.defaultProps = {
  handler: () => { }
};

export default PrimaryButton;
