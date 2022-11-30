import Head from "next/head"

function Meta({ title, description }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

Meta.defaultProps = {
  title: "User List Web Site",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores id sequi repudiandae beatae hic praesentium ea, tempore voluptate facilis saepe labore error expedita non impedit cupiditate! Culpa eaque earum labore!",
}

export default Meta
