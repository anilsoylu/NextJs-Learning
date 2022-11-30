import { useRouter } from "next/router"
import React from "react"
import Meta from "../../components/Meta"

function User({ users }) {
  const router = useRouter()
  const number = 3

  return (
    <div className="container">
      <Meta
        title="Kullanıcılar"
        description="Burası kullanıcılar sayfasıdır.."
      />
      <h1 className="title">User</h1>
      {!!users &&
        users.map((user) => (
          <h4 key={user.id} onClick={() => router.push(`user/${user.id}`)}>
            {user.id} - {user.name}
          </h4>
        ))}

      <style jsx>
        {`
          .title {
            display: ${number > 2 ? "block" : "none"};
            color: yellow;
          }
          h4 {
            cursor: pointer;
          }
          h4:hover {
            color: red;
          }
        `}
      </style>
    </div>
  )
}

export default User

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/users")
  const users = await res.json()

  return {
    props: {
      users,
    },
  }
}
