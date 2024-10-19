import Head from 'next/head';
import Header from '../components/Header';
import About from '../components/About';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="A Next.js project with custom components" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Using the Header Component */}
      <Header />

      <main>
        {/* About Component */}
        <About />
      </main>
    </div>
  );
}

