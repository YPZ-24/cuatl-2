import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { getDepartments } from '@/actions/fetch-departments';
import googleLogoImage from '@/assets/images/google.svg';
import { AUTH_GOOGLE_URL } from '@/config/globals';
import AuthContext from '@/context/AuthContext';
import { initializeApolloClient } from '@/lib/apollo-client';
import { CardContent, Card, Typography, Grid } from '@material-ui/core';

const styles = {
  tailwind: {
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
      google: `
        bg-inactive
      `
    }
  }
};

export default function AuthenticationPage({ departments }) {
  const { useSession, isUserLoggedIn } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (isUserLoggedIn()) router.push('/');
  }, []);

  useSession();

  return (
      <Grid container spacing={1}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px"
        }}
      >
        <Grid item xs={12} sm={10} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" align="center">¡Bienvenido!</Typography>
              <Typography variant="body1" align="center">Ingresa y disfruta una gran experiencia</Typography>
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
                  <Typography variant="button" align="center">Ingresa con Google</Typography>
                </a>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApolloClient();
  const departments = await getDepartments(apolloClient);

  return { props: { departments } };
};
