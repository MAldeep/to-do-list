import { MdDelete } from "react-icons/md";
import {  taskStatus } from "../store";
import { FaCheckCircle, FaRegCheckCircle } from "react-icons/fa";
import NavDesktop from "../components/NavDesktop/NavDesktop";

export default function Completed() {
  const { getCheckedTasks, checked, toggleTask } = taskStatus();
  const checkedTasks = getCheckedTasks();
  return (
    <div className="w-full h-full flex justify-start">
      <NavDesktop/>
      <ul className="flex w-full p-[50px] flex-col gap-[20px] justify-start overflow-auto hide-scrollbar">
        <h1 className="font-[500] text-[#25292C] text-[40px]">Completed</h1>
        {checkedTasks.map((task, index) => (
          <li
            key={index}
            className="w-full flex justify-between items-center p-[20px] border-[0.5px] border-[#BBD0FF] rounded-2xl shadow"
          >
            <p className="font-[500] text-[18px] text-[#25292C]">{task}</p>
            <div className="flex items-center gap-[15px]">
              {checked[index] ? (
                <FaCheckCircle
                  onClick={() => toggleTask(index)}
                  className="text-[30px] text-[#00B4D8]"
                />
              ) : (
                <FaRegCheckCircle
                  onClick={() => toggleTask(index)}
                  className="text-[30px] text-[#00B4D8]"
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
