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
        <h1>Splash Screen</h1>
        <a href="https://www.splashscreen.io/" target='_blank'>
        <ButtonShootingStarBorder />
        </a>
        </div>
        <div className='my-10 flex flex-col gap-44'>
          <div>
            <div className='flex w-full h-full bg-[#242429] flex-col items-center py-6 animate-slideFromDownAndFade [animation-delay:var(--animation-delay)]'>
              {/* <Image src='/splash-screen.png' width={500} height={500} alt='splash screen' /> */}
              {/* <video src="https://res.cloudinary.com/dtjasyr7k/video/upload/v1706133522/Morgans_video_1_iputoa.mp4" autoPlay muted loop></video> */}
              <video autoPlay muted loop playsinline>
                <source src='https://res.cloudinary.com/dtjasyr7k/video/upload/v1706133522/Morgans_video_1_iputoa.mp4' type='video/mp4'/>
              </video>
            </div>
            <p className='my-10 animate-slideFromDownAndFade [animation-delay:calc(var(--animation-delay)*2)]'>Splash Screen is an open source MERN stack Ecommerce application. Users can buy various desktop and mobile wallpapers through a PayPal integration. Splash Screen also has an admin portal, where accounts and orders can be maintained by the store admin as well as have the ability to reconfigure the products listed on the shop front.</p>
            <div className='animate-slideFromDownAndFade [animation-delay:calc(var(--animation-delay)*3)]'>
            <h2 className='my-10'>Tech Stack</h2>
            <ul>
              <li className='mb-2'>HTML & CSS</li>
              <li className='mb-2'>React</li>
              <li className='mb-2'>React Bootstrap UI library</li>
              <li className='mb-2'>Redux & Redux Toolkit</li>
              <li className='mb-2'>Authentication with JWT & HTTP-Only cookies</li>
              <li className='mb-2'>PayPal</li>
              <li className='mb-2'>Multer & Cloudinary</li>
              <li className='mb-2'>Node.js</li>
              <li className='mb-2'>Express.js</li>
              <li className='mb-2'>Mongoose</li>
              <li className='mb-2'>MongoDB</li>
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