import PropTypes from 'prop-types';
import { useState } from 'react';

import isTouchEnabled from '@/utils/detect-touch-device';
import formatPrice from '@/utils/format-price';
import getMediaSource from '@/utils/get-media-source';

ProductCard.propTypes = {
  product: PropTypes.object
};

ProductCard.defaultProps = {
  product: null
};

const classes = {
  container: `
    h-40
    md:h-72
    overflow-hidden
    relative
    lg:h-96
    lg:rounded-xl
    rounded-lg
    shadow
  `,

  image: `
    min-h-full
    min-w-full
    object-cover
  `,

  offer: {
    container: `
      absolute
      bg-accent
      bg-opacity-90
      h-1/4
      right-0
      top-0
      w-full
      z-10
    `,
    label: `
      absolute
      font-bold
      md:right-1
      md:text-base
      md:text-bse
      md:top-3
      md:rotate-35
      lg:right-2
      lg:text-lg
      lg:top-4
      right-0
      rotate-33
      top-2
      text-bse
      text-xs
      transform
    `
  },

  product: {
    container: `
      absolute
      bottom-0
      font-bold
      font-display
      md:p-3
      md:text-lg
      lg:py-4
      lg:px-6
      lg:text-2xl
      px-2
      py-1
      text-bse
      z-10
    `
  }
};

const styles = {
  offer: { clipPath: 'polygon(54% 0, 100% 100%, 100% 0)' }
};

export default function ProductCard({ product }) {
  const [isHover, setIsHover] = useState(false);

  const animateOnHover = (event: any) => {
    if (isTouchEnabled()) {
      event.currentTarget.classList.toggle('animate-scaleUpCenter');
      event.currentTarget.classList.toggle('animate-scaleDownCenter');

      setIsHover(!isHover);
    }
  };

  return (
    <div
      className={classes.container}
      onMouseEnter={animateOnHover}
      onMouseLeave={animateOnHover}
    >
      <img
        src={getMediaSource(product.cover)}
        alt={product.cover.alternativeText}
        className={classes.image}
      />

      {product.offers.length !== 0 &&
        <div className={classes.offer.container} style={styles.offer}>
          <span className={classes.offer.label}>¡Oferta!</span>
        </div>
      }

      <div className={classes.product.container}>
        <p>{product.name}</p>
        <p>{formatPrice('MXN', product.price)}</p>
      </div>
    </div>
  );
};
