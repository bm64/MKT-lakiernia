import React from 'react';
import '../styles/index.css';

function Layout({children}) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}

export default Layout;
