import { useTaskStatusStore } from "../store";
import { FaCheckCircle, FaRegCheckCircle } from "react-icons/fa";
import NavDesktop from "../components/NavDesktop/NavDesktop";

export default function Completed() {
  const { getCheckedTasks, checkedTasks, toggleTask } = useTaskStatusStore();
  const completedTasks = getCheckedTasks();

  return (
    <div className="w-full h-full flex justify-start">
      <NavDesktop />
      <ul className="flex w-full p-[50px] flex-col gap-[20px] justify-start overflow-auto hide-scrollbar">
        <h1 className="font-[500] text-[#25292C] text-[40px]">Completed</h1>
        {completedTasks.map((task) => (
          <li
            key={task.id}
            className="w-full flex justify-between items-center p-[20px] border-[0.5px] border-[#BBD0FF] rounded-2xl shadow"
          >
            <p className="font-[500] text-[18px] text-[#25292C]">
              {task.title}
            </p>
            <div className="flex items-center gap-[15px]">
              {checkedTasks[task.id] ? (
                <FaCheckCircle
                  onClick={() => toggleTask(task.id)}
                  className="text-[30px] text-[#00B4D8] cursor-pointer"
                />
              ) : (
                <FaRegCheckCircle
                  onClick={() => toggleTask(task.id)}
                  className="text-[30px] text-[#00B4D8] cursor-pointer"
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
