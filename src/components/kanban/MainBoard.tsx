import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import { Label } from "../ui/label";
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
import type { CardItem } from "@/types";
import { tasks } from "@/common/data";

export default function MainBoard() {
  return (
    <>
      <Card>
        <CardHeader>Task Board</CardHeader>
        <CardDescription>
          <div className="w-full ">
            <h4>Manage your tasks...</h4>
            <div className="w-full flex items-center justify-between mt-4">
              {/* <Label htmlFor="email">Your email address</Label> */}
              <div>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="All Priorities" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="created">Created</SelectItem>
                    <SelectItem value="default">Default</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <AddTask/>
            </div>
          </div>
        </CardDescription>
        <CardContent>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <TodoTasks  />
            {/* <InProgressTasks  /> */}
            {/* <DoneTasks  /> */}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
