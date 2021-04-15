import Link from 'next/link';
import PropTypes from 'prop-types';
import ProductCard from '@/components/cards/ProductCard';
import IProduct from '@/models/IProduct';
import {Grid} from '@material-ui/core'

ProductsGallery.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object)
};

ProductsGallery.defaultProps = {
  products: []
};

export default function ProductsGallery({ products }) {
  return (
    <Grid container spacing={2}>
      {
        products.map((product: IProduct) => (
          <Grid item xs={12} sm={4} md={3} lg={2} key={`prod-${product.id}`} >
            <Link href={`/products/${product.slug}`}>
              <a><ProductCard product={product} /></a>
            </Link>
          </Grid>
        ))
      }
    </Grid>
  );
};
