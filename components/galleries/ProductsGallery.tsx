import Link from 'next/link';
import PropTypes from 'prop-types';

import ProductCard from '@/components/cards/ProductCard';
import IProduct from '@/models/IProduct';

ProductsGallery.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object)
};

ProductsGallery.defaultProps = {
  products: []
};

const classes = {
  container: `
    gap-7
    grid
    grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
  `
};

export default function ProductsGallery({ products }) {
  return (
    <div className={classes.container}>
      {
        products.map((product: IProduct) => (
          <Link key={product.id} href={`/products/${product.slug}`}>
            <a><ProductCard product={product} /></a>
          </Link>
        ))
      }
    </div>
  );
};
