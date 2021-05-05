import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { ChevronDown } from 'react-feather';

import colors from '@/data/colors.json';
import {FormControl, InputLabel, Select, MenuItem} from '@material-ui/core'

VariantSelector.propTypes = {
  state: PropTypes.array,
  variants: PropTypes.array
};

VariantSelector.defaultProps = {
  state: [],
  variants: []
};

const classes = {
  container: `
    cursor-pointer
    overflow-hidden
    relative

    rounded
    shadow
  `,
  defaultItem: `
    md:bg-inactive
    md:px-4
    md:py-2
    md:text-secondary
    p-2
  `,
  item: {
    container: `
      flex
      flex-row
      hover:bg-accent
      hover:text-bse
      items-center
      justify-start
      md:px-4
      md:py-2
      p-2
    `,
    colorSwatch: `
      border-2
      border-bse
      h-7
      md:mr-4
      mr-2
      rounded-full
      w-7
    `,
    description: `
      text-sm
      uppercase
    `
  }
};

export default function VariantSelector({ state, variants }) {
  const [selectedVariant, setSelectedVariant] = state;
  const [visible, setVisible] = useState(false);
  const dropdownIcon = useRef(null);

  const animate = (): void => {
    dropdownIcon.current.classList.toggle('animate-flipHorizontalBottom');
    setVisible(!visible);
  };

  const handleChange = (event) => {
    setSelectedVariant(event.target.value);
  };

  return (
    <FormControl variant="filled" fullWidth>
      <InputLabel id="selectVariantLabel">VARIANTES</InputLabel>
      <Select
        labelId="selectVariantLabel"
        id="selectVariant"
        value={selectedVariant}
        onChange={handleChange}
        label="VARIANTES"
      >
        {
          variants.filter((variant) => variant.stock > 0).map((variant) => (
            <MenuItem key={variant.id} value={variant}>{variant.color}, {variant.size}, {variant.pattern}</MenuItem>
          ))
        }
        
      </Select>
    </FormControl>
  );
};

