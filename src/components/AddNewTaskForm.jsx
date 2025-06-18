import { useRef } from "react";
import { useAddNewTaskForm } from "../store";

export default function AddNewTaskForm({ onAddTask }) {
  const taskInput = useRef();
  const { showForm } = useAddNewTaskForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskTitle = taskInput.current.value.trim();

    if (taskTitle) {
      // Just pass the title - the store will handle ID generation
      onAddTask(taskTitle);
      taskInput.current.value = "";
    }
    showForm();
  };

  return (
    <div className="w-full h-full flex justify-center items-center bg-[#00000033] absolute z-20">
      <form
        onSubmit={handleSubmit}
        className="bg-[#FFFFFC] w-[50%] h-[300px] p-[35px] rounded-3xl shadow-2xl flex flex-col justify-start"
      >
        <h1 className="text-[25px] font-[600] text-[#25292C] mb-[15px]">
          Add New Task
        </h1>
        <input
          type="text"
          className="w-full outline-0 border-[1px] border-[#BBD0FF] py-[10px] pl-[16px] rounded-2xl text-[16px] text-[#6C757D80]"
          placeholder="Type New Task Here"
          ref={taskInput}
          autoFocus
        />
        <div className="btns flex items-center gap-[16px] self-end mt-[80px]">
          <button
            type="button"
            onClick={showForm}
            className="py-[12px] px-[40px] border-[1px] border-[#8D99AE] rounded-2xl text-[22px] text-[#003049] font-[500] cursor-pointer hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="py-[12px] px-[40px] bg-[#00B4D8] rounded-2xl text-[22px] text-[#F8F9FA] font-[500] cursor-pointer hover:bg-[#0093B8] transition-colors"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}
