import Head from 'next/head';
import Navbar from '../../../components/Navbar';
import Image from 'next/image';
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
        <h1>JennyCo</h1>
        <a href="https://www.jennyco.io/" target='_blank'>
        <ButtonShootingStarBorder />
        </a>
        </div>
        <div className='my-10 flex flex-col gap-44'>
          <div>
            <div className='flex w-full h-full bg-[#915BDA] flex-col items-center py-6 animate-slideFromDownAndFade [animation-delay:var(--animation-delay)]'>
              <Image src='/jco.png' width={500} height={500} alt='JennyCo' />
              {/* <video src="https://res.cloudinary.com/dtjasyr7k/video/upload/v1706134779/Morgans_video_3_xqq85d.mp4" autoPlay muted loop></video> */}
            </div>
            <p className='my-10 animate-slideFromDownAndFade [animation-delay:calc(var(--animation-delay)*2)]'>JennyCo is the world&#39;s first cryptographically secured AI-driven healthcare data marketplace. JennyCo wanted to create an NFT series to help raise capital and also generate user health data for their app. When someone minted an NFT they would receive both a DNA test kit as well as $JCO tokens. Once the DNA test was submitted by the user, JennyCo would upload this data to their app. Everytime the user&#39;s data was used, they would be compensated with $JCO tokens.</p>
            <p className='my-10 animate-slideFromDownAndFade [animation-delay:calc(var(--animation-delay)*2)]'>I was both the Project Manager and Front-end developer for this project, working alongside 1 Full-stack developer, 1 Blockchain developer and 1 UI/UX designer. JennyCo sold 919 NFTs making $180,000</p>
            <div className='animate-slideFromDownAndFade [animation-delay:calc(var(--animation-delay)*3)]'>
            <h2 className='my-10'>Tech Stack</h2>
            <ul>
            <li className='mb-2'>HTML & CSS</li>
              <li className='mb-2'>React</li>
              <li className='mb-2'>Next.js</li>
              <li className='mb-2'>Taliwind</li>
              <li className='mb-2'>Redux & Redux Toolkit</li>
              <li className='mb-2'>Node.js</li>
              <li className='mb-2'>Express.js</li>
              <li className='mb-2'>Mongoose</li>
              <li className='mb-2'>MongoDB</li>
              <li className='mb-2'>Etherium Blockchain</li>
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