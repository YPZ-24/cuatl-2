import PropTypes from 'prop-types';
import { useState } from 'react';
import { Plus } from 'react-feather';
import { Minus } from 'react-feather';

const QuantitySelector = ({ stock }) => {
  const [quantity, setQuantity] = useState(1);

  const decrement = (event) => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increment = (event) => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div>
      <div className="flex flex-row">
        <button
          className="h-9 w-9 rounded-l-md bg-inactive text-accent hover:text-primary flex flex-row items-center justify-center"
          onClick={(event) => decrement(event)}
        >
          <Minus size="18" />
        </button>
        <input
          id="quantity"
          name="quantity"
          readOnly
          type="number"
          value={quantity}
          style={{appearance: 'textfield'}}
          className="w-20 bg-inactive text-center"
        />
        <button
          className="h-9 w-9 rounded-r-md bg-inactive text-accent hover:text-primary flex flex-row items-center justify-center"
          onClick={(event) => increment(event)}
        >
          <Plus size="18" />
        </button>
      </div>
    </div>
  );
};

QuantitySelector.propTypes = {
  stock: PropTypes.number
};

QuantitySelector.defaultProps = {
  stock: 1
};

export default QuantitySelector;
