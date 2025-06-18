import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

// Form visibility store
export const useAddNewTaskForm = create((set) => ({
  initial: false,
  showForm: () => set((state) => ({ initial: !state.initial })),
}));

// Main task store
export const useTaskStore = create(
  persist(
    (set) => ({
      tasks: [],
      addNew: (task) =>
        set((state) => ({
          tasks: [...state.tasks, { ...task, id: uuidv4() }],
        })),
      removeTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
    }),
    {
      name: "task-storage",
    }
  )
);

// Task status store
export const useTaskStatusStore = create(
  persist(
    (set, get) => ({
      checkedTasks: {},
      toggleTask: (id) =>
        set((state) => ({
          checkedTasks: {
            ...state.checkedTasks,
            [id]: !state.checkedTasks[id],
          },
        })),
      getCheckedTasks: () => {
        const { checkedTasks } = get();
        const { tasks } = useTaskStore.getState();
        return tasks.filter((task) => checkedTasks[task.id]);
      },
    }),
    {
      name: "check-state",
    }
  )
);
