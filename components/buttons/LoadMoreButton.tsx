import PropTypes from 'prop-types';
import { useRef } from 'react';
import { RefreshCw } from 'react-feather';

LoadMoreButton.propTypes = {
  disabled: PropTypes.bool,
  fetcher: PropTypes.func
};

LoadMoreButton.defaultProps = {
  disabled: false,
  fether: () => { }
};

const classes = {
  default: `
    cursor-pointer
    flex
    flex-nowrap
    flex-row
    font-bold
    items-center
    justify-center
    p-3
    rounded-lg
  `,

  disabled: `
    bg-inactive
    shadow-inner
    text-secondary
  `,

  enabled: `
    bg-accent
    lg:hover:bg-inactive
    lg:hover:text-primary
    text-bse
    shadow
  `
};

export default function LoadMoreButton({ disabled, fetcher }) {
  const refreshIcon = useRef(null);

  const loadMore = (event: any) => {
    event.preventDefault();

    if (!disabled) {
      refreshIcon.current.classList.toggle('animate-rotateCenter');

      //: create an small effect of delay before loading more products
      setTimeout(() => {
        fetcher();
        refreshIcon.current.classList.toggle('animate-rotateCenter');
      }, 1500);
    }
  };

  return (
    <a
      onClick={(event) => loadMore(event)}
      className={`${classes.default} ${disabled ? classes.disabled : classes.enabled}`}
    >
      <span ref={refreshIcon} className="mr-2"><RefreshCw size="18" /></span>
      {
        disabled
          ? <span>No hay más productos</span>
          : <span>Más productos</span>
      }
    </a>
  );
};
