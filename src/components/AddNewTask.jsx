import { FaPlus } from "react-icons/fa";
import { UseAddNewTaskForm } from "../store";

export default function AddNewTask() {
  const { showForm } = UseAddNewTaskForm();
  return (
    <button
      className="py-[12px] px-[16px] border-[#00B4D8] border-[1px] rounded-2xl flex justify-between items-center gap-[19px] hover:bg-[#00b4d815] cursor-pointer"
      onClick={showForm}
    >
      <p className="text-[#25292C] text-[16px] font-[500] ">Add Task</p>
      <FaPlus className="text-[#00B4D8] text-[16px]" />
    </button>
  );
}
