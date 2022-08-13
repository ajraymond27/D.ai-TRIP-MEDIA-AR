import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>D.ai TRIP MEDIA</title>
        <meta name="description" content="bringing digital art to reality" />
      </Head>

      <main className={styles.main}>
        <a href='https://www.daitripmedia.com/'>
          <h1>D.ai TRIP MEDIA</h1>
          <p>scan garment for AR experiences</p>
        </a>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
