import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

function UserItem({ userData }) {
  const router = useRouter()

  return (
    <div className="container">
      <Head>
        <title>{userData?.name}</title>
        <meta name="description" content={userData?.name} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>User Item</h1>

      <p>
        <b>Full Name : </b> {userData?.name}
      </p>

      <p>
        <b>Email : </b> {userData?.email}
      </p>

      <p>
        <b>Address : </b> {userData?.address.street}
      </p>
    </div>
  )
}

export default UserItem

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.params.id}`
  )
  const userData = await res.json()

  return {
    props: {
      userData,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/`)
  const users = await res.json()

  const ids = users.map((user) => user.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  }
}
