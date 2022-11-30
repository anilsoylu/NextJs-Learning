import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Meta from "../../components/Meta"

function CharacterItem({ charData }) {
  //const router = useRouter()

  return (
    <div className="container">
      <Meta title={charData.name} />
      <h1>{charData.name}</h1>

      <figure className="position-relative w-25 h-50 d-inline-block">
        <Image
          src={charData.image}
          alt={charData.name}
          width={300}
          height={300}
        />
      </figure>
    </div>
  )
}

export default CharacterItem

export const getServerSideProps = async (context) => {
  const contextId = context.query.slug.toString().split("-")[2]
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${contextId}`
  )
  const charData = await res.json()

  return {
    props: {
      charData,
    },
  }
}
