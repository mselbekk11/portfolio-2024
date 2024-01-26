import React from 'react'
import Head from 'next/head';
import Navbar from '../../components/Navbar';
// import Image from 'next/image';
import Link from 'next/link';
import VideoOne from '../../components/VideoOne';
import VideoTwo from '../../components/VideoTwo';
import VideoThree from '../../components/VideoThree';
import VideoFour from '../../components/VideoFour';

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
            <Link href="/projects/splash-screen">
            <div className='flex w-full h-full bg-[#242429] flex-col items-center py-6'>
              {/* <Image src='/splash-screen.png' width={500} height={500} alt='splash screen' /> */}
              <VideoOne />
            </div>
            </Link>
            <h2 className='my-6'>Splash Screen</h2>
            <p>Full-Stack Ecommerce MERN application with PayPal payment integration</p>
          </div>

          <div className='animate-slideFromDownAndFade [animation-delay:calc(var(--animation-delay)*2)]'>
          <Link href="/projects/alkimi-labs">
            <div className='flex w-full h-full bg-[#686974] flex-col items-center py-6'>
            {/* <Image src='/labs.png' width={500} height={500} alt='Alkimi Labs' /> */}
            <VideoTwo />
            </div>
            </Link>
            <h2 className='my-6'>Alkimi Labs</h2>
            <p>Token Staking App, currently holding $10,000,000 worth of community members $ADS tokens</p>
          </div>

          <div className='animate-slideFromDownAndFade [animation-delay:calc(var(--animation-delay)*3)]'>
          <Link href="/projects/jennyco">
            <div className='flex w-full h-full bg-[#915BDA] flex-col items-center py-6'>
            {/* <Image src='/jco.png' width={500} height={500} alt='JennyCo' /> */}
            <VideoThree />
            </div>
            </Link>
            <h2 className='my-6'>JennyCo</h2>
            <p>NFT minting site where users receive a DNA test and token rewards for their data once they mint a JennyCo NFT</p>
          </div>

          <div className='animate-slideFromDownAndFade [animation-delay:calc(var(--animation-delay)*4)]'>
          <Link href="/projects/alex-the-alkimist">
            <div className='flex w-full h-full bg-[#9FD5FF] flex-col items-center py-6'>
            {/* <Image src='/ata.png' width={500} height={500} alt='Alex The Alkimist' /> */}
            <VideoFour />
            </div>
            </Link>
            <h2 className='my-6'>Alex The Alkimist</h2>
            <p>NFT Minting site where users can mint an Alex the Alkimist NFT, earn token rewards, and then play a game using their NFT.</p>
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