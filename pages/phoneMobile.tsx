import type { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';

import PhoneNavbar from '../components/PhoneNavbar';
import Download from '../components/PhoneDownload'
import MobileInfo from '../components/PhoneMobileInfo'
import PhoneFooter from '../components/PhoneFooter'
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>浙江大学求是潮</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta charSet='utf-8' />
      </Head>
      <PhoneNavbar />
      <Download />
      <MobileInfo />
      <PhoneFooter />
    </>
  );
};

export default Home;
