import type { CardItem } from '@/types'
import { create } from 'zustand'

const loadTasks = (): CardItem[] => {
    const saved = localStorage.getItem('kanban-tasks');
    if (saved) {
        return JSON.parse(saved).map((task: any) => ({
            ...task,
            createdAt: new Date(task.createdAt)
        }));
    }
    return [];
};

const saveTasks = (tasks: CardItem[]) => {
    localStorage.setItem('kanban-tasks', JSON.stringify(tasks));
};

export const useTasks = create((set) => ({
    tasks: loadTasks(),
    addTask: (newTask: CardItem) => set((state: { tasks: CardItem[] }) => {
        const newTasks = [...state.tasks, newTask];
        saveTasks(newTasks);
        return { tasks: newTasks };
    }),
    updateTask: (payload: { id: number, data: CardItem }) => set((state: { tasks: CardItem[] }) => {
        const newTasks = state.tasks.map(item => item.id === payload.id ? payload.data : item);
        saveTasks(newTasks);
        return { tasks: newTasks };
    }),
    deleteTask: (id: number) => set((state: { tasks: CardItem[]}) => {
        const newTasks = state.tasks.filter(item => item.id !== id);
        saveTasks(newTasks);
        return { tasks: newTasks };
    }),
    moveTask: (id: number, newType: "todo" | "in-progress" | "done") => set((state: { tasks: CardItem[] }) => {
        const newTasks = state.tasks.map(item => item.id === id ? { ...item, type: newType } : item);
        saveTasks(newTasks);
        return { tasks: newTasks };
    }),
}))

