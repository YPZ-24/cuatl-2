import { useEffect, useState } from 'react';
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

const classes = {
  container: `
    h-screen
    max-w-screen
    relative
  `,

  carousel: `
    bg-base
    h-4/6
    md:absolute
    md:h-full
    md:right-12
    md:rounded-lg
    md:w-1/2
    overflow-hidden
  `,

  details: `
    h-11/12
    overflow-y-scroll
    pb-20
    w-full
  `,

  information: {
    container: `
      bg-bse
      mt-6
      md:w-2/5
      md:absolute
      md:m-12
      md:p-12
      md:bg-base
      md:shadow
      md:rounded-2xl
      md:z-10
      md:overflow-y-scroll
      p-7
      rounded-t-3xl
      max-w-full
    `,
    section: `
      mb-7
      w-full
    `,
    header: {
      title: `
        font-bold
        font-display
        mb-2
        text-2xl
      `
    },
    title: `
      font-bold
      mb-2
    `
  },

  addButton: `
    flex
    flex-row
    justify-end
    mt-12
  `
};

export default function ProductDetailsPage({ departments, product, referer }) {
  const [selectedVariant, setSelectedVariant] = useState<IVariant>(null);
  const [selectedOffers, setSelectedOffers] = useState<IOffer[]>([]);
  const [viewportWidth, setViewportWidth] = useState<number>(0);

  useEffect(() => {
    setViewportWidth(window.innerWidth);
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.details}>
        <div className={classes.carousel}>
          <Carousel media={product.media} />
        </div>

        <div className={classes.information.container}>
          <div className={classes.information.section}>
            <p className={classes.information.header.title}>{product.name}</p>
            <p className="mb-6">{formatPrice('MXN', product.price)}</p>
            <p>{product.description}</p>
          </div>

          {
            product.variants.length !== 0 &&
            <div className={classes.information.section}>
              <p className={classes.information.title}>Variante</p>
              <VariantSelector
                state={[selectedVariant, setSelectedVariant]}
                variants={product.variants}
              />
            </div>
          }

          {
            product.offers.length !== 0 &&
            <div className={classes.information.section}>
              <p className={classes.information.title}>Ofertas</p>
              <OffersSelector
                offers={product.offers}
                state={[selectedOffers, setSelectedOffers]}
              />
            </div>
          }

          {
            selectedVariant &&
            <div className={classes.information.section}>
              <p className={classes.information.title}>Cantidad</p>
              <div className="flex flex-row items-center">
                <QuantitySelector stock={selectedVariant.stock} />
                <small className="ml-4 text-sm text-neutral">
                  ¡{selectedVariant.stock} disponibles!
                </small>
              </div>
            </div>
          }

          {
            (product && selectedVariant) &&
            <div className={classes.addButton}>
              <AddToBagButton order={{
                offers: selectedOffers,
                product,
                variant: selectedVariant
              }} />
            </div>
          }
        </div>
      </div>
    </div >
  );
};

export const getServerSideProps = async ({ params, req }) => {
  const apolloClient = initializeApolloClient();
  const departments = await getDepartments(apolloClient);
  const product = await getProductBySlug(apolloClient, params.slug);

  return { props: { departments, product, referer: req.headers.referer || '/' } }
};
