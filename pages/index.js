import Head from "next/head"
import styles from "../styles/Home.module.css"

export default function Home() {
  const number = 3
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="title">Home</h1>

      <style jsx>
        {`
          .title {
            display: ${number > 2 ? "block" : "none"};
            color: yellow;
          }
        `}
      </style>
    </div>
  )
}
