import type { CardItem } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import TaskItem from "./TaskItem";
import { useTasks } from "@/store/tasks";

interface TodoTasksProps {
  priorityFilter: string;
  sortBy: string;
}

export default function TodoTasks({ priorityFilter, sortBy }: TodoTasksProps) {
  const tasks = useTasks((state:any) => state.tasks);
  
  const filteredAndSortedTasks = tasks
    .filter((item: CardItem) => item.type === "todo")
    .filter((item: CardItem) => priorityFilter === "all" || item.priority === priorityFilter)
    .sort((a: CardItem, b: CardItem) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "created") return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      return 0;
    });

  return (
    <Card className="border border-dashed bg-slate-50 min-h-[200px]">
      <CardHeader>
        <CardTitle>Todo</CardTitle>
      </CardHeader>
      <CardContent className="min-h-[150px]">
        {filteredAndSortedTasks.map((ele:CardItem) => (
          <TaskItem key={ele.id} item={ele} />
        ))}
      </CardContent>
    </Card>
  );
}
