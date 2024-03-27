import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <Component {...pageProps} />
      <Script src='https://scripts.simpleanalyticscdn.com/latest.js' />
      <Analytics />
      <SpeedInsights />
    </ThemeProvider>
  );
}
