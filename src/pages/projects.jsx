import React from 'react'
import Head from 'next/head';
import Navbar from '../../components/Navbar';
// import Image from 'next/image';
import Link from 'next/link';
import VideoOne from '../../components/VideoOne';
import VideoTwo from '../../components/VideoTwo';
import VideoThree from '../../components/VideoThree';
import VideoFour from '../../components/VideoFour';
import VideoFive from '../../components/VideoFive';
import VideoSix from '../../components/VideoSix';
import VideoSeven from '../../components/VideoSeven';

const projects = () => {


  return (
    <>
      <Head>
        <title>Morgan Selbekk</title>
        <meta name='description' content='Software Engineer living in San Francisco, with 8 years experience across Design, Development & Project Management' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='container'>
        <h1 className='animate-slideFromDownAndFade'>Selected Projects</h1>
        <div className='my-10 flex flex-col gap-40'>

          <div className='animate-slideFromDownAndFade [animation-delay:var(--animation-delay)]'>
            <Link href="/projects/advanced">
            <div className='flex w-full h-full bg-[#CCCCCC] flex-col items-center py-6'>
              <VideoSeven />
            </div>
            </Link>
            <h2 className='my-6'>Advanced Ortho Lab</h2>
            <p>Full-Stack custom website for an Orthodontic Lab using Next.js, Supabase & Mailgun</p>
          </div>

          <div className='animate-slideFromDownAndFade [animation-delay:calc(var(--animation-delay)*2)]'>
            <Link href="/projects/splash-screen">
            <div className='flex w-full h-full bg-[#242429] flex-col items-center py-6'>
              <VideoOne />
            </div>
            </Link>
            <h2 className='my-6'>Splash Screen</h2>
            <p>Full-Stack Ecommerce MERN application with PayPal payment integration</p>
          </div>

          <div className='animate-slideFromDownAndFade [animation-delay:calc(var(--animation-delay)*3)]'>
          <Link href="/projects/alkimi-labs">
            <div className='flex w-full h-full bg-[#686974] flex-col items-center py-6'>
            <VideoTwo />
            </div>
            </Link>
            <h2 className='my-6'>Alkimi Labs</h2>
            <p>Token Staking App, currently holding $10,000,000 worth of community members $ADS tokens</p>
          </div>

          <div className='animate-slideFromDownAndFade [animation-delay:calc(var(--animation-delay)*4)]'>
          <Link href="/projects/jennyco">
            <div className='flex w-full h-full bg-[#915BDA] flex-col items-center py-6'>
            <VideoThree />
            </div>
            </Link>
            <h2 className='my-6'>JennyCo</h2>
            <p>NFT minting site where users receive a DNA test and token rewards for their data once they mint a JennyCo NFT</p>
          </div>

          <div className='animate-slideFromDownAndFade [animation-delay:calc(var(--animation-delay)*6)]'>
          <Link href="/projects/kodama">
            <div className='flex w-full h-full bg-[#242429] flex-col items-center py-6'>
            <VideoSix />
            </div>
            </Link>
            <h2 className='my-6'>Kodama</h2>
            <p>NFT Minting Site and Vesting Software. Kodama allows NFT projects to drip feed their NFTs to their community to stabalize the floor price at launch.</p>
          </div>

          <div className='animate-slideFromDownAndFade [animation-delay:calc(var(--animation-delay)*7)]'>
          <Link href="/projects/alex-the-alkimist">
            <div className='flex w-full h-full bg-[#9FD5FF] flex-col items-center py-6'>
            <VideoFour />
            </div>
            </Link>
            <h2 className='my-6'>Alex The Alkimist</h2>
            <p>NFT Minting site where users can mint an Alex the Alkimist NFT, earn token rewards, and then play a game using their NFT.</p>
          </div>

          <div className='animate-slideFromDownAndFade [animation-delay:calc(var(--animation-delay)*7)]'>
          <Link href="/projects/notes">
            <div className='flex w-full h-full bg-[#CCCCCC] flex-col items-center py-6'>
            <VideoFive />
            </div>
            </Link>
            <h2 className='my-6'>Notes</h2>
            <p>Full-Stack Next.js, Supabase & Prisma application with stripe payment integration</p>
          </div>

        </div>
        <div className='fixed'>
          <Navbar />
        </div>
      </main>
    </>
  )
}

export default projects