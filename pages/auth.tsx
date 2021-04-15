import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

import { getDepartments } from '@/actions/fetch-departments';
import facebookLogoImage from '@/assets/images/facebook.svg';
import googleLogoImage from '@/assets/images/google.svg';
import { AUTH_FACEBOOK_URL, AUTH_GOOGLE_URL } from '@/config/globals';
import AuthContext from '@/context/AuthContext';
import { initializeApolloClient } from '@/lib/apollo-client';
import useViewport from '@/utils/use-viewport';

import Omnibar from '@/components/navbars/Omnibar';
import Tabbar, { TAB_PAGES } from '@/components/navbars/Tabbar';

const styles = {
  tailwind: {
    pageContainer: `
      flex
      flex-col
      flex-nowrap
      h-screen
      overflow-hidden
      w-screen
    `,
    mainContent: {
      container: `
        flex-1
        mb-24
        md:mb-auto
        md:overflow-visible
        overflow-y-scroll
        w-full
      `,
      loginForm: {
        container: `
          bg-bse
          flex
          flex-col
          flex-nowrap
          items-center
          m-6
          md:mx-auto
          md:my-16
          md:w-1/2
          lg:w-1/3
          p-6
          rounded-xl
          text-center
          shadow
        `,
        title: `
          font-bold
          font-display
          m-6
          text-3xl
        `,
        group: `
          my-6
          w-full
        `,
        button: {
          container: `
            flex
            flex-nowrap
            flex-row
            font-bold
            h-16
            items-center
            justify-center
            md:mx-auto
            md:w-60
            mt-6
            rounded-lg
            shadow
            w-full
          `,
          icon: {
            container: `
              flex
              flex-nowrap
              flex-row
              h-16
              items-center
              justify-center
              w-16
            `,
            image: `
              h-6
              w-6
            `
          }
        }
      }
    },
    generic: {
      facebook: `
        bg-facebook
        text-bse
      `,
      google: `
        bg-inactive
      `
    }
  }
};

export default function AuthenticationPage({ departments }) {
  const { useSession, isUserLoggedIn } = useContext(AuthContext);
  const router = useRouter();
  const viewport = useViewport();

  useEffect(() => {
    if (isUserLoggedIn()) router.push('/');
  }, []);

  useSession();

  return (
    <div className={styles.tailwind.pageContainer}>

      <div className={styles.tailwind.mainContent.container}>
        <div className={styles.tailwind.mainContent.loginForm.container}>
          <h1 className={styles.tailwind.mainContent.loginForm.title}>
            ¡Bienvenido!
          </h1>

          <p>¡Ingresa y disfruta de una gran experiencia!</p>

          <div className={styles.tailwind.mainContent.loginForm.group}>
            <a
              href={AUTH_FACEBOOK_URL}
              className={
                styles.tailwind.mainContent.loginForm.button.container +
                styles.tailwind.generic.facebook
              }
            >
              <span
                className={styles.tailwind.mainContent.loginForm.button.icon.container}
              >
                <img
                  src={facebookLogoImage}
                  className={styles.tailwind.mainContent.loginForm.button.icon.image}
                />
              </span>
              <span>Ingresa con Facebook</span>
            </a>
            <a
              href={AUTH_GOOGLE_URL}
              className={
                styles.tailwind.mainContent.loginForm.button.container +
                styles.tailwind.generic.google
              }
            >
              <span
                className={styles.tailwind.mainContent.loginForm.button.icon.container}
              >
                <img
                  src={googleLogoImage}
                  className={styles.tailwind.mainContent.loginForm.button.icon.image}
                />
              </span>
              <span>Ingresa con Google</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApolloClient();
  const departments = await getDepartments(apolloClient);

  return { props: { departments } };
};
