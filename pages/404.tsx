import { GetServerSideProps } from 'next';
import { useContext } from 'react';

import pageNotFoundImage from '@/assets/images/page_not_found.svg';
import AuthContext from '@/context/AuthContext';

const classes = {
  container: `
    h-screen
    max-w-screen
    md:py-36
    lg:py-12
    p-12
    text-center
  `,

  image: `
    m-auto
    max-w-full
    md:w-1/2
  `,

  link: `
    bg-accent
    cursor-pointer
    flex
    flex-nowrap
    flex-row
    font-bold
    items-center
    justify-center
    lg:hover:bg-inactive
    lg:hover:text-primary
    m-auto
    mt-6
    md:mt-12
    w-max
    p-3
    rounded-lg
    shadow
    text-bse
  `,

  message: `
    font-bold
    font-display
    text-xl
    md:text-3xl
    mt-6
    mb-3
  `,

  page: `
  md:w-1/2 md:h-1/2 md:mx-auto md:mt-16 md:text-center
  `
};

export default function Custom404() {
  const { useSession } = useContext(AuthContext);

  useSession();

  return (
    <div className={classes.container}>
      <img
        src={pageNotFoundImage}
        alt="Página no encontrada"
        className={classes.image}
      />

      <h1 className={classes.message}>¡Disculpa la molestia!</h1>
      <p>Tenemos un problema, pero ya estamos trabajando para resolverlo.</p>

      <a href="/" className={classes.link}>Regresar a inicio</a>
    </div>
  );
};
