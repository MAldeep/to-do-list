import { FaCheckCircle, FaRegCheckCircle } from "react-icons/fa";
import { taskStatus } from "../store";
import { MdDelete } from "react-icons/md";

export default function SingleTask({ tasks , removeTask }) {
  const { initial, checkTask } = taskStatus();
  return (
    <ul className="flex flex-col gap-[20px]">
      {tasks.map((task, index) => (
        <li
          key={index}
          className="w-full flex justify-between items-center p-[20px] border-[0.5px] border-[#BBD0FF] rounded-2xl shadow"
        >
          <p className="font-[500] text-[18px] text-[#25292C]">{task}</p>
          <div className="flex items-center gap-[15px]">
            <MdDelete className="text-[30px] text-red-600" onClick={() => removeTask(index)}/>
            {initial ? (
              <FaCheckCircle
                onClick={checkTask}
                className="text-[30px] text-[#00B4D8]"
              />
            ) : (
              <FaRegCheckCircle
                onClick={checkTask}
                className="text-[30px] text-[#00B4D8]"
              />
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
