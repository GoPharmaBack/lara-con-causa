import Head from 'next/head';
import Image from 'next/image';
import About from 'src/components/about/About';
import Navbar from '../components/nav/Navbar';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lara con Causa</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.contenedor}>
          <Image
            src='/larizatinoco.png'
            alt='lara Logo'
            width={350}
            height={477}
            className={styles.personajeLara}
          />

          <h1 className={styles.title}>
            <span>Soy</span> Lariza Tinoco Valdez,
            <span>mis amigos me llaman</span> “LARA”.
          </h1>
        </div>

     
      </main>
      <About />
      <footer className={styles.footer}>
        <span className={styles.logo}>
          <Image src='/lara.svg' alt='Vercel Logo' width={72} height={16} />
        </span>
      </footer>
    </div>
  );
}
