import Head from 'next/head';
import Navbar from '../../../components/Navbar';
import Image from 'next/image';
// import Link from 'next/link';
// import Button from '../../../components/Button';
import ButtonShootingStarBorder from '../../../components/ButtonShootingStarBorder';
import VideoTwo from '../../../components/VideoTwo';

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
        <h1>Alkimi Labs</h1>
        <a href="https://labs.alkimi.org/" target='_blank'>
        <ButtonShootingStarBorder />
        </a>
        </div>
        <div className='my-10 flex flex-col gap-44'>
          <div>
            <div className='flex w-full h-full bg-[#686974] flex-col items-center py-6 animate-slideFromDownAndFade [animation-delay:var(--animation-delay)]'>
              <VideoTwo />
            </div>
            <p className='my-10 animate-slideFromDownAndFade [animation-delay:calc(var(--animation-delay)*2)]'>Alkimi Labs is a token staking platform & node management system. Alkimi is a decentralized advertising exchange that floats on its own crypto currency - The $ADS token. The Alkimi community are incentivized to stake their $ADS tokens in exchange for token rewards. In 2023 Alkimi Labs hosted 6 staking pools, each one holding ~$10,000,000 worth of Alkimi Tokens. This allowed Alkimi to lock up tokens, decrease supply on the market and push up the price of the $ADS token.</p>
            <p className='my-10 animate-slideFromDownAndFade [animation-delay:calc(var(--animation-delay)*2)]'>I lead a team of 5 as a Project Manager, consisting of 1 front-end developer, 1 full-stack developer, 1 blockchain developer and 1 UI/UX designer.  I designed the first iteration, which was then improved over the last year. </p>
            <div className='animate-slideFromDownAndFade [animation-delay:calc(var(--animation-delay)*3)]'>
            <h2 className='my-10'>Tech Stack</h2>
            <ul>
              <li className='mb-2'>HTML & CSS</li>
              <li className='mb-2'>React</li>
              <li className='mb-2'>Next.js</li>
              <li className='mb-2'>Redux & Redux Toolkit</li>
              <li className='mb-2'>Node.js</li>
              <li className='mb-2'>AWS</li>
              <li className='mb-2'>Etherium Blockchain</li>
              <li className='mb-2'>ERC-1155 Smart Contract</li>
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