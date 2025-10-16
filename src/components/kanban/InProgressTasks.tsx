import type { CardItem } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import TaskItem from "./TaskItem";
import { useTasks } from "@/store/tasks";

export default function InProgressTasks() {
  const tasks = useTasks((state: any) => state.tasks);
  return (
    <Card>
      <CardHeader>
        <CardTitle>In Progress Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        {tasks
          .filter((item: CardItem) => item.type === "in-progress")
          .map((ele: CardItem) => (
            <TaskItem item={ele} />
          ))}
      </CardContent>
    </Card>
  );
}
