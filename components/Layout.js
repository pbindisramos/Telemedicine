import React from 'react';
import Head from 'next/head';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>TELEMEDICINA APP</title>
        <link
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css'
          rel='stylesheet'
          integrity='sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl'
          crossOrigin='anonymous'
        ></link>
        <script
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js'
          integrity='sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0'
          crossOrigin='anonymous'
        ></script>
      </Head>

      <div className='bg-gray-100 min-h-screen'>
        <div className='container mx-auto'>
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
