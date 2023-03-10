import React from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';

import GlobalStyles from '../../styles/GlobalStyles';
import { LayoutWrapper, HomeWrapper } from './styles';
import { LeftSidebar, MusicPlayer, RightSidebar } from '../index';

const Layout = ({ children }) => {
  const { isActive, activeSong } = useSelector((state) => state.musicPlayer);

  return (
    <LayoutWrapper>
      <GlobalStyles />
      <Head>Lyriks</Head>
      <HomeWrapper>
        <LeftSidebar />
        {children}
        <RightSidebar />
        {activeSong?.length && isActive && <MusicPlayer />}
      </HomeWrapper>
    </LayoutWrapper>
  );
};

export default Layout;
