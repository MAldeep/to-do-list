import { NavLink } from "react-router-dom";
import "./NavDesktop.css";

export default function NavDesktop() {
  return (
    <nav className="w-[325px] h-full flex flex-col gap-[21px] border-r-[2px]  border-l-[#6C757D80] justify-start items-start pl-[30px] pt-[50px]">
      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        All
      </NavLink>
      <NavLink
        to="/todo"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        To-do
      </NavLink>
      <NavLink
        to="/completed"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Completed
      </NavLink>
    </nav>
  );
}
