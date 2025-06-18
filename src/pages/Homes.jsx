import AddNewTask from "../components/AddNewTask";
import AddNewTaskForm from "../components/AddNewTaskForm";
import NavDesktop from "../components/NavDesktop/NavDesktop";
import SingleTask from "../components/SingleTask";
import { useAddNewTaskForm, useTaskStore } from "../store";

export default function Home() {
  const { initial } = useAddNewTaskForm();
  const { tasks, addNew, removeTask } = useTaskStore();

  const handleAddTask = (taskTitle) => {
    addNew({ title: taskTitle }); // ID will be automatically added in the store
  };

  return (
    <main className="w-full h-full flex justify-start">
      <NavDesktop />
      {initial && <AddNewTaskForm onAddTask={handleAddTask} />}
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
