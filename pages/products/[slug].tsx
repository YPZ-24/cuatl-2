import { useState } from 'react';
import { getDepartments } from '@/actions/fetch-departments';
import { getProductBySlug } from "@/actions/fetch-products";
import AddToBagButton from '@/components/buttons/AddToBagButton';
import Carousel from '@/components/carousels/Carousel';
import QuantitySelector from '@/components/controls/QuantitySelector';
import VariantSelector from '@/components/controls/VariantSelector';
import OffersSelector from '@/components/controls/OffersSelector';
import { initializeApolloClient } from "@/lib/apollo-client";
import IVariant from '@/models/IVariant';
import IOffer from '@/models/IOffer';
import formatPrice from '@/utils/format-price';
import {Grid, Card, Typography, CardContent, CardHeader} from '@material-ui/core'


export default function ProductDetailsPage({ departments, product, referer }) {
  const [selectedVariant, setSelectedVariant] = useState<IVariant>(null);
  const [selectedOffers, setSelectedOffers] = useState<IOffer[]>([]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="h4">{formatPrice('MXN', product.price)}</Typography>
                <Typography variant="subtitle1" gutterBottom>{product.description}</Typography>
              </Grid>
              {
                product.variants.length !== 0 ?
                  <Grid item xs={12}>
                    <VariantSelector
                      state={[selectedVariant, setSelectedVariant]}
                      variants={product.variants}
                    />
                  </Grid>
                  :null
              }
              {
                product.offers.length !== 0 ?
                  <Grid item xs={12}>
                    <Typography variant="body2">OFERTAS</Typography>
                    <OffersSelector
                        offers={product.offers}
                        state={[selectedOffers, setSelectedOffers]}
                    />
                  </Grid>
                : null
              }
              {
                selectedVariant ?
                  <Grid item xs={12}>
                    <Typography variant="body2">CANTIDAD</Typography>
                    <QuantitySelector stock={selectedVariant.stock} />
                    <Typography variant="caption">¡{selectedVariant.stock} disponibles!</Typography>
                  </Grid>
                :null
              }
              {
                (product && selectedVariant) ?
                  <Grid item xs={12}>
                    <AddToBagButton order={{
                        offers: selectedOffers,
                        product,
                        variant: selectedVariant
                      }} 
                    />
                  </Grid>
                :null  
              }
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Carousel media={product.media} />
      </Grid>
    </Grid>
  );
};

export const getServerSideProps = async ({ params, req }) => {
  const apolloClient = initializeApolloClient();
  const departments = await getDepartments(apolloClient);
  const product = await getProductBySlug(apolloClient, params.slug);

  return { props: { departments, product, referer: req.headers.referer || '/' } }
};
