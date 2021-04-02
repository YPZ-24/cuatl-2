import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { ChevronDown } from 'react-feather';

import colors from '@/data/colors.json';

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

  return (
    <div onClick={animate} className={classes.container}>
      <ul>
        {
          !selectedVariant
            ?
            <li className={classes.defaultItem}>
              Selecciona
            </li>
            :
            <li className={classes.item.container}>
              <div style={{
                backgroundColor: colors[selectedVariant.color.trim().toLowerCase()]
              }}
                className={classes.item.colorSwatch}
              ></div>

              <small className={classes.item.description}>
                {selectedVariant.color}, {selectedVariant.size}, {selectedVariant.pattern}
              </small>
            </li>
        }

        {
          visible &&
          variants.filter((variant) => variant.stock > 0).map((variant) => (
            <li
              key={variant.id}
              className={classes.item.container + 'bg-inactive'}
              onClick={() => setSelectedVariant(variant)}
            >
              <div
                className={classes.item.colorSwatch}
                style={{ backgroundColor: colors[variant.color.trim().toLowerCase()] }}
              ></div>

              <small className={classes.item.description}>
                {variant.color}, {variant.size}, {variant.pattern}
              </small>
            </li>
          ))
        }
      </ul>


      <span ref={dropdownIcon} className="absolute right-4 top-2">
        <ChevronDown />
      </span>

    </div>
  );
};

