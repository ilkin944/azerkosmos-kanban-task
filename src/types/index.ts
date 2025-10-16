export type CardItem = {
    id: number;
    name: string;
    description: string;
    priority: "high" | "medium" | "low";
    type: "done" | "in-progress" | "todo"
    createdAt: Date;
};