import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { Box, Camera, LogOut, MapPin } from 'react-feather';

import { getDepartments } from '@/actions/fetch-departments';
import AuthContext from '@/context/AuthContext';
import { initializeApolloClient } from '@/lib/apollo-client';
import useViewport from '@/utils/use-viewport';
import CircleAvatar from '@/components/avatars/CircleAvatar';

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
        overflow-y-scroll
        w-full
      `,
      heading: {
        container: `
          bg-bse
          m-6
          py-6
          rounded-xl
          shadow
        `,
        photo: {
          container: `
            flex
            flex-nowrap
            flex-row
            items-center
            justify-center
            relative
            w-full
          `,
          cameraButton: `
            absolute
            bg-accent
            flex
            flex-nowrap
            flex-row
            h-12
            items-center
            justify-center
            right-4
            rounded-full
            shadow
            text-bse
            w-12
          `
        },
        username: `
          font-display
          font-bold
          py-6
          text-2xl
          text-center
        `
      },
      menu: {
        container: `
          m-6
        `,
        item: {
          container: `
            bg-accent
            flex
            flex-nowrap
            flex-row
            font-bold
            items-center
            my-6
            rounded-lg
            shadow
            text-bse
            w-full
          `,
          icon: `
            flex
            flex-nowrap
            flex-row
            items-center
            justify-center
            h-16
            w-16
          `
        }
      },
      logoutButton: {
        container: `
          flex
          flex-nowrap
          flex-row
          font-bold
          items-center
          m-6
        `,
        icon: `
          flex
          flex-nowrap
          flex-row
          font-bold
          h-16
          items-center
          justify-center
          p-2
          rounded-lg
          rotate-180
          transform
          w-16
        `
      }
    },
    generic: {
      link: `
        text-accent
      `
    }
  }
};

export default function UserProfilePage({ departments, referer }) {
  const { user, useSession, isUserLoggedIn, logout } = useContext(AuthContext);
  const router = useRouter();
  const viewport = useViewport();


  const closeSession = (event: any) => {
    event.preventDefault();
    logout();
  };

  const uploadPhoto = (event: any) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (!isUserLoggedIn()) router.push('/auth');
  }, []);

  useSession();

  return (
    <div className={styles.tailwind.pageContainer}>

      {
        user &&
        <div className={styles.tailwind.mainContent.container}>
          <div className={styles.tailwind.mainContent.heading.container}>
            <div className={styles.tailwind.mainContent.heading.photo.container}>
              <CircleAvatar avatar={user?.avatar} size="32" />
              <a
                className={styles.tailwind.mainContent.heading.photo.cameraButton}
                onClick={(event) => uploadPhoto(event)}
              >
                <Camera />
              </a>
            </div>
            <h1 className={styles.tailwind.mainContent.heading.username}>
              {user?.username}
            </h1>
          </div>

          <div className={styles.tailwind.mainContent.menu.container}>
            <Link href="/user/orders">
              <a className={styles.tailwind.mainContent.menu.item.container}>
                <span className={styles.tailwind.mainContent.menu.item.icon}>
                  <Box />
                </span>
                <span>Mis compras</span>
              </a>
            </Link>

            <Link href="/user/address">
              <a className={styles.tailwind.mainContent.menu.item.container}>
                <span className={styles.tailwind.mainContent.menu.item.icon}>
                  <MapPin />
                </span>
                <span>Mis direcciones</span>
              </a>
            </Link>
          </div>

          <Link href="/">
            <a
              className={styles.tailwind.mainContent.logoutButton.container}
              onClick={(event) => closeSession(event)}
            >
              <span className={styles.tailwind.mainContent.logoutButton.icon}>
                <LogOut />
              </span>
              <span>Cerrar sesión</span>
            </a>
          </Link>
        </div>
      }
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const apolloClient = initializeApolloClient();
  const departments = await getDepartments(apolloClient);

  return { props: { departments, referer: req.headers.referer || '/' } };
};
