import PropTypes from 'prop-types';

OutlineButton.propTypes = {
  label: PropTypes.string
};

OutlineButton.defaultProps = {
  label: 'Outline button'
};

const classes = `
  border-2
  border-accent
  flex
  flex-row
  flex-nowrap
  font-bold
  hover:bg-accent
  hover:text-bse
  items-center
  justify-center
  p-2
  rounded-lg
  text-accent
  transition-all
`;

export default function OutlineButton({ label }) {
  return (
    <div className={classes}>{label}</div>
  );
};
