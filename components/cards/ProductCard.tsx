import PropTypes from 'prop-types';
import formatPrice from '@/utils/format-price';
import getMediaSource from '@/utils/get-media-source';
import {Card, CardContent, Typography, CardMedia, CardActionArea} from '@material-ui/core'

ProductCard.propTypes = {
  product: PropTypes.object
};

ProductCard.defaultProps = {
  product: null
};

export default function ProductCard({ product }) {

  return (
    <>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="al"
            height="140"
            image={getMediaSource(product.cover)}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography align="center" gutterBottom variant="h5" component="h2">
              {formatPrice('MXN', product.price)}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {product.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

/*
  {product.offers.length !== 0 &&
            <div className={classes.offer.container} style={styles.offer}>
              <span className={classes.offer.label}>¡Oferta!</span>
            </div>
          }

          <div className={classes.product.container}>
            <p></p>
            <p></p>
          </div>

*/
