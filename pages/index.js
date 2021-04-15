import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ScoreEntry from '../components/scoreEntry/score_entry'
import players from '../data/players'
import BottomNav from '../components/bottom_navigation/bottom_nav'
import Header from '../components/header/header_menu'
export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Header/>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to a page
        </h1>
        <div>
          {
            players.map((player) => <ScoreEntry key={player.id} {...player} />)
          }
        </div>
        <BottomNav/>
      </main>

    </div>
  )
}

