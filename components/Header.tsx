import React from 'react'
import Head from 'next/head.js';
import Omnibar from './navbars/Omnibar';

function Header() {
  return (
    <>
      <Head>
          <title>Cuatl</title>
          <meta name="description" content="Encuentra los mejores productos artesanales de México" />
      </Head>
      <Omnibar />
    </>
  )
}

export default Header
