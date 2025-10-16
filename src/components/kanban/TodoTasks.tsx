import type { CardItem } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import TaskItem from "./TaskItem";
import { useTasks } from "@/store/tasks";

export default function TodoTasks() {
  const tasks = useTasks((state:any) => state.tasks);
  return (
    <Card className="border border-dashed bg-slate-50">
      <CardHeader>
        <CardTitle>Todo</CardTitle>
      </CardHeader>
      <CardContent>
        {tasks
          .filter((item:CardItem) => item.type === "todo")
          .map((ele:CardItem) => (
            <TaskItem key={ele.id} item={ele} />
          ))}
      </CardContent>
    </Card>
  );
}
