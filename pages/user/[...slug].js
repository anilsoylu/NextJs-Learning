import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Meta from "../../components/Meta"
var slug = require("slug")

function UserItem({ userData }) {
  return (
    <div className="container">
      <Meta title={userData?.name} description={userData?.email} />

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
  const contextId = context.query.slug.toString().split("-")[2]
  const res = await fetch(`http://localhost:3000/api/users/${contextId}`)
  const userData = await res.json()

  return {
    props: {
      userData,
    },
  }
}
