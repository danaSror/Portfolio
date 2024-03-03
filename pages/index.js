import Head from 'next/head'
import Navigation from './components/Navigation';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import { Analytics } from "@vercel/analytics/react"

export default function Home() {

  return (
    <>
      <Head>
        <title>Dana Sror Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <Analytics/>
        <Navigation/>
        <About/>
        <Portfolio/>
        <Contact/>
      </main>
      </>
  );
}

