import type { NextPage } from 'next';
import React from 'react';
import Outliner from '../components/Outliner';
import Landing from '../components/Landing';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>浙江大学求是潮</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta charSet='utf-8' />
      </Head>
      <Navbar />
      <Outliner />
      <Landing />
      <Footer />
    </>
  );
};

export default Home;
