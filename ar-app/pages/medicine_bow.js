import Head from 'next/head'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>D.ai TRIP MEDIA</title>
        <meta name="description" content="bringing digital art to reality" />
        <script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
        <script src="../../../dist/aframe-master.js"></script>
      </Head>

      <body>
        <a-scene>
            <a-sky src="ar-app/public/medicine_bow.JPG" rotation="0 -130 0"></a-sky>
        </a-scene>
      </body>
    </div>
  )
}
