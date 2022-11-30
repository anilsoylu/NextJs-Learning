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
      <div style={{ position: "relative" }}>
        <Image
          src="https://images.unsplash.com/photo-1669745356031-230d593866b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
          width={300}
          height={300}
          objectFit="cover"
        />
      </div>

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
