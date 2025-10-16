import type { CardItem } from "@/types";

export const tasks: CardItem[] = [
    {
        id: 1,
        name: 'Task 1',
        description: "Task description goes here",
        priority: "high",
        type:"done",
        createdAt: new Date()
    },
    {
        id: 2,
        name: 'Task 2',
        description: "Task description goes here",
        priority: "low",
        type:"in-progress",
        createdAt: new Date()
    },
    {
        id: 3,
        name: 'Task 3',
        description: "Task description goes here",
        priority: "medium",
        type:"todo",
        createdAt: new Date()
    },
    {
        id: 4,
        name: 'Task 4',
        description: "Task description goes here",
        priority: "high",
        type:"todo",
        createdAt: new Date()
    },
    {
        id: 5,
        name: 'Task 5',
        description: "Task description goes here",
        priority: "medium",
        type:"done",
        createdAt: new Date()
    }
]