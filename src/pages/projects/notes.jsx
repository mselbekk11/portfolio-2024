import Head from 'next/head';
import Navbar from '../../../components/Navbar';
import Image from 'next/image';
// import Link from 'next/link';
// import Button from '../../../components/Button';
import ButtonShootingStarBorder from '../../../components/ButtonShootingStarBorder';
import VideoFive from '../../../components/VideoFive';

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
        <h1>Notes</h1>
        <a href="https://www.notesapp.cc/" target='_blank'>
        <ButtonShootingStarBorder />
        </a>
        </div>
        <div className='my-10 flex flex-col gap-44'>
          <div>
            <div className='flex w-full h-full bg-[#CCCCCC] flex-col items-center py-6 animate-slideFromDownAndFade [animation-delay:var(--animation-delay)]'>
              <VideoFive />
            </div>
            <p className='my-10 animate-slideFromDownAndFade [animation-delay:calc(var(--animation-delay)*2)]'>Notes is a full-stack Next.js application which allows users to easily create notes. Users can create, update and delete notes as they please. Users can also change the theme of the application to suit their preferences. Notes uses Stripe for its subscription services, which users can enjoy for only $5 a month. </p>
            <div className='animate-slideFromDownAndFade [animation-delay:calc(var(--animation-delay)*3)]'>
            <h2 className='my-10'>Tech Stack</h2>
            <ul>
              <li className='mb-2'>HTML & CSS</li>
              <li className='mb-2'>React</li>
              <li className='mb-2'>Typescript</li>
              <li className='mb-2'>Next.js</li>
              <li className='mb-2'>Tailwind</li>
              <li className='mb-2'>Shadcn/ui</li>
              <li className='mb-2'>SupaBase</li>
              <li className='mb-2'>Prisma</li>
              <li className='mb-2'>Stripe API</li>
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