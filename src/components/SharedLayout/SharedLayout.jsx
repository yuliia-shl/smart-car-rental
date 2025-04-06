import React, { Suspense } from 'react';
import AppBar from '../AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Toaster position="top-center" reverseOrder={false} />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
