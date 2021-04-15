import PropTypes from 'prop-types';
import { useRef } from 'react';
import { RefreshCw } from 'react-feather';
import Button from '@material-ui/core/Button'
import IconCached from '@material-ui/icons/Cached'

LoadMoreButton.propTypes = {
  disabled: PropTypes.bool,
  fetcher: PropTypes.func
};

LoadMoreButton.defaultProps = {
  disabled: false,
  fether: () => { }
};

export default function LoadMoreButton({ fetcher }) {

  const handleClick = (event: any) => {
    event.preventDefault();
    fetcher();
  }

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px 0px"
    }}>
      <Button 
        size="small" 
        variant="outlined" 
        color="primary"
        onClick={(event) => handleClick(event)}
      >
        <IconCached/>
        Más productos
      </Button>
    </div>
  );
};
