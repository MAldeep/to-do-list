import { create } from "zustand";
import { persist } from "zustand/middleware";

export const UseAddNewTaskForm = create((set) => ({
  initial: false,
  showForm: () => set((state) => ({ initial: !state.initial })),
}));
export const newTask = create(
  persist(
    (set) => ({
      tasks: [],
      addNew: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
      removeTask: (index) =>
        set((state) => ({
          tasks: state.tasks.filter((item, i) => i !== index),
        })),
    }),
    {
      name: "task-storage",
    }
  )
);

export const taskStatus = create(
  persist(
      (set, get) => ({
  checked: {},
  toggleTask: (index) =>
    set((state) => ({
      checked: {
        ...state.checked,
        [index]: !state.checked[index],
      },
    })),
  getCheckedTasks: () => {
    const { checked } = get();
    const { tasks } = newTask.getState();
    return tasks.filter((item, index) => checked[index]);
  },
})
  )
  ,{
  name : "check-state"
}
);
