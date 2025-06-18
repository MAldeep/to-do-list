import { Link } from "react-router-dom";


export default function NavDesktop() {
  return (
    <nav className="w-[325px] h-full flex flex-col gap-[21px] border-r-[2px]  border-l-[#6C757D80] justify-start items-start pl-[30px] pt-[32px]">
      <Link className="bg-[#F8F9FACC] w-full pl-[16px] py-[13px] rounded-bl-2xl rounded-tl-2xl text-[#1576D6] font-[500] text-[20px]">All</Link>
      <Link className="w-full font-[500] pl-[16px] text-[#25292C] text-[20px]">To-Do</Link>
      <Link className="w-full font-[500] pl-[16px] text-[#25292C] text-[20px]">Completed</Link>
    </nav>
  )
}
