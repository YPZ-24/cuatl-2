import cuatlLogo from '@/assets/images/logo.svg';
import facebookLogo from '@/assets/images/facebook_circle.png';
import instagramLogo from '@/assets/images/instagram_square.png';

const classes = {
  container: `
    hidden
    md:bg-bse
    md:block
    md:bottom-0
    md:p-12
    md:shadow
    md:w-full
  `,

  image: `
    max-h-full
    max-w-full
  `,

  social: {
    container: `
      flex
      flex-row
      items-center
      justify-between
      w-full
    `,
    logo: `
      h-12
    `,
    links: {
      container: `
        flex
        flex-row
        h-full
        items-center
      `,
      item: `
        animate-heartbeat
        h-9
        ml-3
      `
    }
  },

  legals: {
    container: `
      border-secondary
      border-t-2
      flex
      flex-row
      items-center
      justify-between
      mt-5
      pt-3
      w-full
    `,
    copyrights: `
      font-bold
      text-secondary
      text-xs
      uppercase
    `,
    links: {
      container: `
        flex
        flex-row
      `,
      anchor: `
        flex
        flex-row
        items-center
        ml-4
        text-secondary
        underline
      `,
      label: `
        font-bold
        mr-1
        text-xs
        uppercase
      `
    }
  }
};

export default function Footer() {
  return (
    <footer className={classes.container}>
      <div className={classes.social.container}>
        <div className={classes.social.logo}>
          <img src={cuatlLogo} alt="Logo" className={classes.image} />
        </div>

        <div className={classes.social.links.container}>
          <p>Síguenos en redes sociales:</p>

          <a
            href="https://www.facebook.com/home.php?ref=wizard"
            className={classes.social.links.item}
          >
            <img src={facebookLogo} alt="Facebook" className={classes.image} />
          </a>

          <a
            href="https://www.instagram.com/invites/contact/?i=1j4cwlrxxpy1o&utm_content=kkrt0xk"
            className={classes.social.links.item}
          >
            <img src={instagramLogo} alt="Instagram" className={classes.image} />
          </a>
        </div>
      </div>

      <div className={classes.legals.container}>
        <small className={classes.legals.copyrights}>
          © 2020 por Cuatl. Todos los derechos reservados.
        </small>
        <div className={classes.legals.links.container}>
          <a href="" className={classes.legals.links.anchor}>
            <small className={classes.legals.links.label}>
              Acerca de nosotros
            </small>
          </a>
          <a href="" className={classes.legals.links.anchor}>
            <small className={classes.legals.links.label}>
              Política de privacidad
            </small>
          </a>
        </div>
      </div>
    </footer>
  );
};
