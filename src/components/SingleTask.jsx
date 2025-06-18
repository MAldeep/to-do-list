import { FaCheckCircle, FaRegCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useTaskStatusStore } from "../store";

export default function SingleTask({ tasks, removeTask }) {
  const { checkedTasks, toggleTask } = useTaskStatusStore();

  return (
    <ul className="flex flex-col gap-[20px]">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="w-full flex justify-between items-center p-[20px] border-[0.5px] border-[#BBD0FF] rounded-2xl shadow"
        >
          <p className="font-[500] text-[18px] text-[#25292C]">
            {task.title || task}{" "}
            {/* Fallback for string tasks during transition */}
          </p>
          <div className="flex items-center gap-[15px]">
            <MdDelete
              className="text-[30px] text-red-600 cursor-pointer hover:text-red-700 transition-colors"
              onClick={() => removeTask(task.id)}
              aria-label="Delete task"
            />
            {checkedTasks[task.id] ? (
              <FaCheckCircle
                onClick={() => toggleTask(task.id)}
                className="text-[30px] text-[#00B4D8] cursor-pointer hover:text-[#0083A8] transition-colors"
                aria-label="Mark task incomplete"
              />
            ) : (
              <FaRegCheckCircle
                onClick={() => toggleTask(task.id)}
                className="text-[30px] text-[#00B4D8] cursor-pointer hover:text-[#0083A8] transition-colors"
                aria-label="Mark task complete"
              />
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
