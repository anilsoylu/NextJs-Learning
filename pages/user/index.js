import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import Meta from "../../components/Meta"
var slug = require("slug")

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

      <ul>
        {!!users &&
          users.map((user) => (
            <li key={user.id}>
              <Link href={`/user/${slug(user.name)}-${user.id}`}>
                {user.id} - {user.name}
              </Link>
            </li>
          ))}
      </ul>

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

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3000/api/users")
  const users = await res.json()

  return {
    props: { users },
  }
}
