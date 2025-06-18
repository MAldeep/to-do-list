import { Link } from "react-router-dom";


export default function NavLink({className , classNameActive}) {
  return (
    <>
      <Link className={className}>All</Link>
      <Link className={className}>To-do</Link>
      <Link className={className}>Completed</Link>
    </>
  )
}
