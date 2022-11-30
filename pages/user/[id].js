import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

function UserItem({ userData }) {
  //const [user, setUser] = useState()
  // const router = useRouter()

  // const { id } = router.query

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const res = await fetch("https://jsonplaceholder.typicode.com/users")
  //       const data = await res.json()
  //       setUser(!!userData && userData.find((u) => u.id === Number(id)))
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   getData()
  // }, [id, userData])

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

export const getServerSideProps = async (context) => {
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
