import { Link } from "react-router-dom"

export const Landing = () => {
  return (
    <>
        <h1>Landing page will be here</h1>
        <Link to="/InputDisplay">
            <button>Generate your Image!</button>
        </Link>
    </>
  )
}
