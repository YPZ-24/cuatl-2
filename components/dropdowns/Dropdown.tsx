import PropTypes from 'prop-types';
import { useRef } from 'react';
import { ChevronDown } from 'react-feather';

Dropdown.propTypes = {
  label: PropTypes.string
};

Dropdown.defaultProps = {
  label: 'Dropdown'
};

const classes = {
  container: `
    flex
    flex-row
    flex-nowrap
    font-bold
    items-center
  `,
};

export default function Dropdown({ children = '', label, onClick }) {
  const arrowIcon = useRef(null);

  const animate = () => {
    arrowIcon.current.classList.toggle('animate-flipHorizontalBottom');
    onClick();
  };

  return (
    <>
      <a onClick={animate} className={classes.container}>
        <span className="mr-1">{label}</span>
        <span ref={arrowIcon}><ChevronDown size="18" /></span>
      </a>
      {children}
    </>
  );
};
