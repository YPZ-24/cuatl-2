import Document, { Html, Head, Main, NextScript } from 'next/document';

import background from '@/assets/images/background.svg';

const style = {
  classes: `
    bg-left-top
    bg-repeat
    font-sans
    text-primary
  `,
  styles: {
    backgroundImage: `url('${background}')`
  }
};

class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Source+Sans+Pro:wght@400;700&display=swap" rel="stylesheet" />
        </Head>

        <body className={style.classes} style={style.styles}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
};

export default CustomDocument;
