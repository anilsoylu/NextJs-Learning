import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

function UserItem() {
  const [user, setUser] = useState()
  const router = useRouter()

  const { id } = router.query

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json()
        setUser(!!data && data.find((u) => u.id === Number(id)))
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [id])

  return (
    <div className="container">
      <Head>
        <title>{user?.name}</title>
        <meta name="description" content={user?.name} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>User Item</h1>

      <p>
        <b>Full Name : </b> {user?.name}
      </p>

      <p>
        <b>Email : </b> {user?.email}
      </p>

      <p>
        <b>Address : </b> {user?.address.street}
      </p>
    </div>
  )
}

export default UserItem
