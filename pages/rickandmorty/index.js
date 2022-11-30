import { useRouter } from "next/router"
import React from "react"
import Meta from "../../components/Meta"
var slug = require("slug")

function Character({ characters }) {
  const router = useRouter()
  const number = 3

  return (
    <div className="container">
      <Meta
        title="Rick & Morty"
        description="Burası Rick & Morty api kullanılan sayfadır.."
      />
      <h1 className="title">Rick & Morty</h1>
      {!!characters &&
        characters.results.map((character) => (
          <h4
            key={character.id}
            onClick={() =>
              router.push(
                `rickandmorty/${slug(character.name)}-${character.id}`
              )
            }
          >
            {character.id} - {character.name}
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

export default Character

export async function getStaticProps() {
  const res = await fetch("https://rickandmortyapi.com/api/character")
  const characters = await res.json()

  return {
    props: {
      characters,
    },
  }
}
