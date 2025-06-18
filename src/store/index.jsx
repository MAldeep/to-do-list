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

export const taskStatus = create((set) => ({
  initial: false,
  checkTask: () => set((state) => ({ initial: !state.initial })),
}));
