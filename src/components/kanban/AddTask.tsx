import { useState } from "react";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import type { CardItem } from "@/types";
import { useTasks } from "@/store/tasks";

export default function AddTask() {
  const addNewTask = useTasks((state: any) => state.addTask);
  const [newTaskItem, setNewTaskItem] = useState<CardItem>({
    id: new Date().getTime(),
    name: "",
    description: "",
    priority: "low",
    type: "todo",
    createdAt: new Date(),
  });
  const [showModal, setShowModal] = useState(false);
  
  const resetForm = () => {
    setNewTaskItem({
      id: new Date().getTime(),
      name: "",
      description: "",
      priority: "low",
      type: "todo",
      createdAt: new Date(),
    });
  };
  return (
    <>
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogTrigger>
          <Button variant={"default"}>
            <Plus /> Add Task
          </Button>
        </DialogTrigger>
        <DialogContent onCloseAutoFocus={resetForm}>
          <input
            value={newTaskItem.name}
            placeholder="Task Name"
            onChange={(e) =>
              setNewTaskItem({ ...newTaskItem, name: e.target.value })
            }
          />
          <textarea
            value={newTaskItem.description}
            placeholder="Task description"
            onChange={(e) =>
              setNewTaskItem({ ...newTaskItem, description: e.target.value })
            }
          />
          <select
            value={newTaskItem.priority}
            onChange={(e) =>
              setNewTaskItem({
                ...newTaskItem,
                priority: e.target.value as "high" | "medium" | "low",
              })
            }
          >
            <option value="high">HIGH</option>
            <option value="medium">medium</option>
            <option value="low">low</option>
          </select>
          <select
            value={newTaskItem.type}
            onChange={(e) =>
              setNewTaskItem({
                ...newTaskItem,
                type: e.target.value as "todo" | "in-progress" | "done",
              })
            }
          >
            <option value="todo">todo</option>
            <option value="in-progress">in progress</option>
            <option value="done">done</option>
          </select>
          <Button
            onClick={() => {
              addNewTask(newTaskItem);
              setShowModal(false);
              resetForm();
            }}
          >
            Add
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
