import '@/styles/base.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';


const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>InfinityChat</title>
      </Head>

      <main className={`${inter.variable} bg-black-gradient`}>
        <Component {...pageProps} />
        <ToastContainer />
      </main>
    </>
  );
}

export default MyApp;
