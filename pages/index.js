import Head from 'next/head';
import { IoAppsSharp } from 'react-icons/io5';
import { FaSearch, FaMicrophone } from 'react-icons/fa';

import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <span>Gmail</span>
        <span>Imagens</span>

        <IoAppsSharp size={18} />

        <img src="/images/user.png" alt="User"/>
      </header>

      <main className={styles.content}>
        <img className={styles.logoImage} src="/images/logo.png" alt="Google"/>

        <div className={styles.searchInput}>
          <FaSearch size={20} color="#999" />

          <input type="text"/>

          <FaMicrophone size={20} color="#999" />
        </div>

        <div className={styles.buttonsContainer}>
          <button>Pesquisa Google</button>
          <button>Estou com sorte</button>
        </div>
      </main>
    </div>
  )
}
