import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import Meta from "../components/Meta"
import styles from "../styles/Home.module.css"

export default function Home({ users }) {
  const router = useRouter()
  const number = 3
  return (
    <div className={styles.container}>
      <Meta title="Anasayfa" description="Anasayfaya hoşgeldiniz." />
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
