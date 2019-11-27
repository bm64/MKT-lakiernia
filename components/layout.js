import React from 'react'
import Head from 'next/head'
import '../styles/index.css'

function Layout({ children }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {children}
    </>
  )
}

export default Layout
