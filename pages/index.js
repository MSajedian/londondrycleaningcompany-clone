import Head from 'next/head';
import { useState } from 'react';
import Feedback from '../components/Feedback';
import GoogleReviews from '../components/GoogleReviews';
import HowItWorks from '../components/HowItWorks';
import LoveServices from '../components/LoveServices';
import MainCarousel from '../components/MainCarousel';
import Resources from '../components/Resources';
import SpecialistServices from '../components/SpecialistServices';
import StrongWithYou from '../components/StrongWithYou';

export default function Home() {

  return (
    <>
      <Head>
        <title>Website | Home</title>
        <meta name="keywords" content="websiteName" />
      </Head>

      {/********* MainCarousel *********/}
      <MainCarousel />

      {/********* SPECIALIST DRY CLEANING SERVICES *********/}
      <SpecialistServices />

      {/********* SERVICES YOU WILL LOVE *********/}
      <LoveServices />

      {/********* HOW IT WORKS *********/}
      <HowItWorks />

      {/********* WE ARE STRONG WITH YOU *********/}
      <StrongWithYou />

      {/********* Feedback *********/}
      <Feedback />

      {/********* GOOGLE REVIEW *********/}
      <GoogleReviews />

      {/********* Resources *********/}
      <Resources />

    </>
  )
}