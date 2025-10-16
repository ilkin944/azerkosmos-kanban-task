import { tasks } from '@/common/data'
import type { CardItem } from '@/types'
import { create } from 'zustand'

export const useTasks = create((set) => ({
    tasks: tasks,
    addTask: (newTask: CardItem) => set((state: { tasks: CardItem[] }) => ({ tasks: state.tasks.push(newTask) })),
    updateTask: (payload: { id: number, data: CardItem }) => set((state: { tasks: CardItem[] }) => ({
        tasks: state.tasks.map(item => item.id === payload.id ? item = payload.data : item)
    })),
    deleteTask: (id: number) => set((state: { tasks: CardItem[]}) => ({
        tasks: state.tasks.filter(item => item.id !== id)
    })),
}))
