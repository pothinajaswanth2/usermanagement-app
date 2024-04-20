// Frontend: components/Layout.js
import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <footer>Footer Content</footer>
    </div>
  );
};

export default Layout;
