import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Trash } from "lucide-react";
import { Button } from "../ui/button";
import type { CardItem } from "@/types";
import { useTasks } from "@/store/tasks";

export default function DeleteTask({ item }: { item: CardItem }) {
  const deleteNewTask = useTasks((state: any) => state.deleteTask);
  const [showModal, setShowModal] = useState(false);
  return (
    <Dialog open={showModal} onOpenChange={setShowModal}>
      <DialogTrigger>
        <Button variant={"default"}>
          <Trash />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <p>Are you sure to delete {item.name} todo?</p>
        <Button
          onClick={() => {
            setShowModal(false);
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            deleteNewTask(item.id);
            setShowModal(false);
          }}
        >
          Delete
        </Button>
      </DialogContent>
    </Dialog>
  );
}
