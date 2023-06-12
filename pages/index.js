import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Main from '../components/main'
import Oursubs from '../components/oursubs'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>


<div dir='rtl' className=' text-white'>

<Navbar/>

<Main/>

<Oursubs/>

</div>



    
    </div>
  )
}
