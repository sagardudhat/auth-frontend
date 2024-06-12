'use client';

import React from 'react';

import { Provider as ReduxProvider } from 'react-redux';

import { store } from '@/src/app/store';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';

export default function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider store={store}>
      <Header />
      {children}
      <Footer />
    </ReduxProvider>
  );
}
