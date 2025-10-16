import type { CardItem } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import TaskItem from "./TaskItem";
import { useTasks } from "@/store/tasks";

export default function DoneTasks() {
  const tasks = useTasks((state: any) => state.tasks);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Done Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        {tasks
          .filter((item: CardItem) => item.type === "done")
          .map((ele: CardItem) => (
            <TaskItem item={ele} />
          ))}
      </CardContent>
    </Card>
  );
}
