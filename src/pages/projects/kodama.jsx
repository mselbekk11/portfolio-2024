import Head from 'next/head';
import Navbar from '../../../components/Navbar';
import Image from 'next/image';
// import Link from 'next/link';
// import Button from '../../../components/Button';
import ButtonShootingStarBorder from '../../../components/ButtonShootingStarBorder';
import VideoSix from '../../../components/VideoSix';

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
        <h1>Kodama</h1>
        <a href="https://www.kodamanft.io/" target='_blank'>
        <ButtonShootingStarBorder />
        </a>
        </div>
        <div className='my-10 flex flex-col gap-44'>
          <div>
            <div className='flex w-full h-full bg-[#242429] flex-col items-center py-6 animate-slideFromDownAndFade [animation-delay:var(--animation-delay)]'>
              <VideoSix />
            </div>
            <p className='my-10 animate-slideFromDownAndFade [animation-delay:calc(var(--animation-delay)*2)]'>Kodama is a family friendly NFT series that is also a software company. Their Vesting SaaS we helped create allows NFT projects to drip feed their NFTs to their community once minted, to have more control on stabalising the NFT floor price after the mint date. I was the Project Manager on Kodama leading 1 front-end developer, 1 blockchain developer & 1 UX/UI designer. We were responsible for the branding, and design and build of both the minting site & vesting software</p>
            <div className='animate-slideFromDownAndFade [animation-delay:calc(var(--animation-delay)*3)]'>
            <h2 className='my-10'>Tech Stack</h2>
            <ul>
              <li className='mb-2'>HTML & CSS</li>
              <li className='mb-2'>React</li>
              <li className='mb-2'>Typescript</li>
              <li className='mb-2'>Next.js</li>
              <li className='mb-2'>Tailwind</li>
              <li className='mb-2'>Magic Eden</li>
              <li className='mb-2'>Solana Smart Contract</li>
              <li className='mb-2'>Ghost CMS</li>

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