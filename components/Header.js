import Link from "next/link"
import { useRouter } from "next/router"

function Header() {
  const router = useRouter()

  return (
    <div className="p-3 mb-3 border-bottom bg-dark">
      <div className="container d-flex flex-wrap">
        <ul className="nav me-auto">
          <li>
            <Link
              href="/"
              className={
                router.pathname == "/"
                  ? "nav-link px-2 link-secondary"
                  : "nav-link px-2 text-white"
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={
                router.pathname == "/about"
                  ? "nav-link px-2 link-secondary"
                  : "nav-link px-2 text-white"
              }
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/product"
              className={
                router.pathname == "/product"
                  ? "nav-link px-2 link-secondary"
                  : "nav-link px-2 text-white"
              }
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              href="/user"
              className={
                router.pathname == "/user"
                  ? "nav-link px-2 link-secondary"
                  : "nav-link px-2 text-white"
              }
            >
              User
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
