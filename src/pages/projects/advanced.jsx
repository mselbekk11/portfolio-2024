import Head from 'next/head';
import Navbar from '../../../components/Navbar';
import Image from 'next/image';
// import Link from 'next/link';
// import Button from '../../../components/Button';
import ButtonShootingStarBorder from '../../../components/ButtonShootingStarBorder';
import VideoSeven from '../../../components/VideoSeven';

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
        <h1>Advanced Ortho Lab</h1>
        <a href="https://www.advancedortholabsf.com/" target='_blank'>
        <ButtonShootingStarBorder />
        </a>
        </div>
        <div className='my-10 flex flex-col gap-44'>
          <div>
            <div className='flex w-full h-full bg-[#CCCCCC] flex-col items-center py-6 animate-slideFromDownAndFade [animation-delay:var(--animation-delay)]'>
              {/* <Image src='/splash-screen.png' width={500} height={500} alt='splash screen' /> */}
              <VideoSeven />
            </div>
            <p className='my-10 animate-slideFromDownAndFade [animation-delay:calc(var(--animation-delay)*2)]'>Advanced Ortho Lab is an orthodontic laboratory based in San Francisco. It has been in the family for 3 generations and they wanted a new brand identity and website, which I designed and built</p>
            <p className='my-10 animate-slideFromDownAndFade [animation-delay:calc(var(--animation-delay)*2)]'>For any of their clients to order dental appliances, they had to download a PDF, fill it out, scan back to their computer, and then email advanced. I streamilined this process, designing and building a form so that their clients can make a request directly from the website. </p>
            <div className='animate-slideFromDownAndFade [animation-delay:calc(var(--animation-delay)*3)]'>
            <h2 className='my-10'>Tech Stack</h2>
            <ul>
              <li className='mb-2'>Figma</li>
              <li className='mb-2'>HTML & CSS</li>
              <li className='mb-2'>React</li>
              <li className='mb-2'>Typescript</li>
              <li className='mb-2'>Next.js</li>
              <li className='mb-2'>Tailwind</li>
              <li className='mb-2'>Shadcn/ui</li>
              <li className='mb-2'>Cloudinary</li>
              <li className='mb-2'>Node.js</li>
              <li className='mb-2'>SupaBase</li>
              <li className='mb-2'>Mailgun</li>
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