import AddNewTask from "../components/AddNewTask";
import AddNewTaskForm from "../components/AddNewTaskForm";
import NavDesktop from "../components/NavDesktop/NavDesktop";
import { newTask, UseAddNewTaskForm } from "../store";
import SingleTask from "../components/SingleTask"
export default function Homes() {
  const { initial } = UseAddNewTaskForm();
  const { tasks, addNew, removeTask } = newTask();
  return (
    <main className="w-full h-full flex justify-start">
      <NavDesktop />
      {initial && <AddNewTaskForm onAddTask={addNew} />}
      <div className="flex w-full p-[50px] flex-col gap-[20px] justify-start overflow-auto hide-scrollbar">
        <div className="w-full flex justify-between items-center">
          <p className="font-[600] text-[40px] text-[#25292C]">All</p>
          <AddNewTask />
        </div>
        <SingleTask tasks={tasks} removeTask={removeTask} />
      </div>
    </main>
  );
}
