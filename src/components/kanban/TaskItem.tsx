import { Pen, Trash } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import type { CardItem } from "@/types";
import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";

export default function TaskItem({ item }: { item: CardItem }) {
  return (
    <>
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>{item.name}</CardTitle>
          <CardAction>
            <EditTask item={item}/>
            <DeleteTask item={item}/>
          </CardAction>
        </CardHeader>
        <CardContent>
          <p>{item.description}</p>
        </CardContent>
        <CardFooter>
          <div className="w-full flex items-center justify-between">
            <Badge
              variant={
                item.priority === "high"
                  ? "destructive"
                  : item.priority === "medium"
                  ? "secondary"
                  : "default"
              }
            >
              {item.priority}
            </Badge>

            <span>
              {item.createdAt.toLocaleDateString("az-AZ", {
                month: "short",
                day: "2-digit",
                year: "2-digit",
              })}
            </span>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
