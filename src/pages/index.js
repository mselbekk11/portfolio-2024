import Image from 'next/image';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import Navbar from '../../components/Navbar';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Morgan Selbekk</title>
        <meta
          name='description'
          content='Software Engineer living in San Francisco, with 8 years experience across Design, Development & Project Management'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='google-site-verification'
          content='F4b6hQsogl5U_1kOzY2E733Hw-chip8d6paonGtuTkE'
        />
      </Head>
      <main className='container home'>
        <div className='intro animate-slideFromDownAndFade'>
          <Image src='/morgan.png' alt='/' width={70} height={70} />
          <div className='me'>
            <h1 className='h1 mb-0.5'>Morgan Selbekk</h1>
            <p className='paragraph'>Software Engineer</p>
          </div>
        </div>
        <div className='mt-16 animate-slideFromDownAndFade [animation-delay:var(--animation-delay)]'>
          <h2 className='h2 mb-4'>About me</h2>
          <p className='paragraph mb-2'>
            I’m a developer living in San Francisco. I have 8 years experience
            working in Ecommerce & Blockchain across Design, Development &
            Project Management.
          </p>
          {/* <p className='paragraph'>
            The last 4 years have been spent building and running agencies
            specialising in the design and development of Ecommerce platforms,
            Content Management systems, NFT projects & Token staking web
            applications for clients such as{' '}
            <a href='https://www.google.com'>Versace</a>, <a>Clarins</a>,{' '}
            <a>Alkimi</a> & <a>JennyCo</a>
          </p> */}
        </div>
        <div className='mt-16 animate-slideFromDownAndFade [animation-delay:calc(var(--animation-delay)*2)]'>
          <h2 className='h2 mb-4'>Experience</h2>
          <ul className='mb-2'>
            {/* <li className='mb-2'>
              Alkimi - Head of Project Management & Web3 Integrations
            </li> */}
            <li className='mb-2'>Alkimi - Frontend Engineer</li>
            <li className='mb-2'>Zmags - Director of Global Design Services</li>
            <li className='mb-2'>Zmags - Solutions Engineer</li>
            <li className='mb-2'>Currys - Frontend Engineer</li>
          </ul>
        </div>
        <div className='mt-16 animate-slideFromDownAndFade [animation-delay:calc(var(--animation-delay)*3)]'>
          <h2 className='h2 mb-4'>Skills</h2>
          <p className='paragraph mb-2'>
            HTML | CSS | JavaScript | React | Typescript | Next.js | Tailwind |
            Shadcn/ui
          </p>
          <p className='paragraph mb-2'>
            Supabase | Prisma | MongoDB | Express | Node.js | Mongoose
          </p>
          <p className='paragraph mb-2'>
            Figma | Photoshop | Shopify | Wordpress
          </p>
        </div>
        <div className='mt-16 animate-slideFromDownAndFade [animation-delay:calc(var(--animation-delay)*4)]'>
          <h2 className='h2 mb-4'>Latest Projects</h2>
          <ul className='mb-2'>
            <li className='mb-2 flex items-center'>
              <Link href='/projects/splash-screen'>
                <span>SplashScreen - Ecommerce Store</span>
              </Link>
              <span className='inline-block'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='15'
                  height='15'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  class='lucide lucide-arrow-up-right'
                  className='inline-block'
                >
                  <path d='M7 7h10v10' />
                  <path d='M7 17 17 7' />
                </svg>
              </span>
            </li>
            <li className='mb-2 flex items-center'>
              <Link href='/projects/notes'>
                <span>Notes - Next.js App</span>
              </Link>
              <span className='inline-block'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='15'
                  height='15'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  class='lucide lucide-arrow-up-right'
                  className='inline-block'
                >
                  <path d='M7 7h10v10' />
                  <path d='M7 17 17 7' />
                </svg>
              </span>
            </li>
          </ul>
        </div>
        <div className='mt-16 animate-slideFromDownAndFade [animation-delay:calc(var(--animation-delay)*5)]'>
          <h2 className='h2 mb-4'>Connect</h2>
          <ul className='mb-2'>
            <li>
              <div className='flex items-center mb-2'>
                <span className='mr-4'>Twitter</span>
                <span>
                  {' '}
                  <a href='https://twitter.com/mselbekk1' target='_blank'>
                    @mselbekk1
                  </a>
                </span>
                <span>
                  {' '}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='15'
                    height='15'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    class='lucide lucide-arrow-up-right'
                    className='inline-block'
                  >
                    <path d='M7 7h10v10' />
                    <path d='M7 17 17 7' />
                  </svg>
                </span>
              </div>
            </li>

            <li>
              <div className='flex items-center mb-2'>
                <span className='mr-4'>Github</span>
                <span>
                  <a href='https://github.com/mselbekk11' target='_blank'>
                    @mselbekk11
                  </a>
                </span>
                <span>
                  {' '}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='15'
                    height='15'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    class='lucide lucide-arrow-up-right'
                    className='inline-block'
                  >
                    <path d='M7 7h10v10' />
                    <path d='M7 17 17 7' />
                  </svg>
                </span>
              </div>
            </li>

            <li>
              <div className='flex items-center mb-2'>
                <span className='mr-4'>LinkedIn</span>
                <span>
                  <a
                    href='https://www.linkedin.com/in/morgan-selbekk/'
                    target='_blank'
                  >
                    @morgan-selbekk
                  </a>
                </span>
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='15'
                    height='15'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    class='lucide lucide-arrow-up-right'
                    className='inline-block'
                  >
                    <path d='M7 7h10v10' />
                    <path d='M7 17 17 7' />
                  </svg>
                </span>
              </div>
            </li>

            <li>
              <div className='flex items-center mb-2'>
                <span className='mr-4'>Email</span>
                <span>
                  <a href='mailto:mselbekk11@gmail.com' target='_blank'>
                    mselbekk11@gmail.com
                  </a>
                </span>
                <span>
                  {' '}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='15'
                    height='15'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    class='lucide lucide-arrow-up-right'
                    className='inline-block'
                  >
                    <path d='M7 7h10v10' />
                    <path d='M7 17 17 7' />
                  </svg>
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div className='fixed'>
          <Navbar />
        </div>
      </main>
    </>
  );
}
