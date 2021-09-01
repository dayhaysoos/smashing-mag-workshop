import React from 'react';
import Header from './header';
import CheckoutModal from './checkout-modal';
import SkipLink from './skip-link';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <>
      <SkipLink />
      <Header />
      <div
        style={{
          margin: `0 auto`,
        }}>
        <main>{children}</main>
        <Footer />
      </div>
      <CheckoutModal />
    </>
  );
};

export default Layout;
