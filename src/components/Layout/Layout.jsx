import { Navigation } from 'components/Navigation/Navigation';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <heder>
        <Navigation />
      </heder>
      <main>
        <Outlet />
      </main>
    </>
  );
};
