import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import AddTask from "./AddTask";
import DoneTasks from "./DoneTasks";
import InProgressTasks from "./InProgressTasks";
import TodoTasks from "./TodoTasks";
import { useTasks } from "@/store/tasks";
import type { CardItem } from "@/types";

export default function MainBoard() {
  const [priorityFilter, setPriorityFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("default");
  const moveTask = useTasks((state: any) => state.moveTask);

  const handleDrop = (e: React.DragEvent, newType: "todo" | "in-progress" | "done") => {
    e.preventDefault();
    const taskId = parseInt(e.dataTransfer.getData("taskId"));
    moveTask(taskId, newType);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <Card>
        <CardHeader>Task Board</CardHeader>
        <CardDescription>
          <div className="w-full ">
            <h4>Manage your tasks...</h4>
            <div className="w-full flex items-center justify-between mt-4">
              <div>
                <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="All Priorities" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Priorities</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default</SelectItem>
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="created">Created</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <AddTask/>
            </div>
          </div>
        </CardDescription>
        <CardContent>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div onDrop={(e) => handleDrop(e, "todo")} onDragOver={handleDragOver}>
              <TodoTasks priorityFilter={priorityFilter} sortBy={sortBy} />
            </div>
            <div onDrop={(e) => handleDrop(e, "in-progress")} onDragOver={handleDragOver}>
              <InProgressTasks priorityFilter={priorityFilter} sortBy={sortBy} />
            </div>
            <div onDrop={(e) => handleDrop(e, "done")} onDragOver={handleDragOver}>
              <DoneTasks priorityFilter={priorityFilter} sortBy={sortBy} />
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
