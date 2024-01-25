import Head from 'next/head';
import Navbar from '../../../components/Navbar';
// import Image from 'next/image';
// import Link from 'next/link';
// import Button from '../../../components/Button';
import ButtonShootingStarBorder from '../../../components/ButtonShootingStarBorder';

const splashPage = () => {
  return (
    <>
      <Head>
        <title>Morgan Selbekk</title>
        <meta name='description' content='Software Engineer living in San Francisco, with 8 years experience across Design, Development & Project Management' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='container'>
        <div className='flex justify-between items-center animate-slideFromDownAndFade'>
        <h1>Alex The Alkimist</h1>
        <a href="https://www.alexthealkimist.com/" target='_blank'>
        <ButtonShootingStarBorder />
        </a>
        </div>
        <div className='my-10 flex flex-col gap-44'>
          <div>
            <div className='flex w-full h-full bg-[#9FD5FF] flex-col items-center py-6 animate-slideFromDownAndFade [animation-delay:var(--animation-delay)]'>
              {/* <Image src='/ata.png' width={500} height={500} alt='Alex The Alkimist' /> */}
              <video src="https://res.cloudinary.com/dtjasyr7k/video/upload/v1706135013/Morgans_video_4_yal98v.mp4" autoPlay muted loop></video>
            </div>
            <p className='my-10 animate-slideFromDownAndFade [animation-delay:calc(var(--animation-delay)*2)]'>Alex the Alkimist is an NFT project designed to raise capital for Alkimi Exchange. For every 10,000 $ADS tokens you staked in their staking pool you were eligible to draw an Alex the Alkimist NFT. The collection consisted of 5 different rarities. The more rare your NFT, the more token rewards you were eligible to collect at the end of the staking pool.</p>
            <p className='my-10 animate-slideFromDownAndFade [animation-delay:calc(var(--animation-delay)*2)]'>We also distributed various element NFTs that when combined with your original Alex The Alkimist, it would mutate your NFT (similar to how the mutant apes were created)</p>
            <p className='my-10 animate-slideFromDownAndFade [animation-delay:calc(var(--animation-delay)*2)]'>I was the Project Manager, Designer and Front-end developer on this project. I outsourced both the NFT artwork and blockchain development to contractors.</p>
            <div className='animate-slideFromDownAndFade [animation-delay:calc(var(--animation-delay)*3)]'>
            <h2 className='my-10'>Tech Stack</h2>
            <ul>
            <li className='mb-2'>HTML & CSS</li>
              <li className='mb-2'>React</li>
              <li className='mb-2'>Bootstrap</li>
              <li className='mb-2'>Polygon Blockchain</li>
              <li className='mb-2'>ERC-721 Smart Contract</li>
            </ul>
            </div>
          </div>
          

        </div>
        <div className='fixed'>
          <Navbar />
        </div>
      </main>
    </>
  )
}

export default splashPage