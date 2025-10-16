import { useState } from "react";
import { Button } from "../ui/button";
import { Pen, } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
import type { CardItem } from "@/types";
import { useTasks } from "@/store/tasks";

export default function EditTask({ item }: { item: CardItem }) {
  const editNewTask = useTasks((state: any) => state.updateTask);
  const [newTaskItem, setNewTaskItem] = useState<CardItem>(item);
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogTrigger>
          <Button variant={"default"}>
            <Pen />
          </Button>
        </DialogTrigger>
        <DialogContent>
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
              editNewTask({ id: item.id, data: newTaskItem });
              setShowModal(false);
            }}
          >
            edit
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
