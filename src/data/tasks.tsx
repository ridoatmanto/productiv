import { RandomId } from "../utils/random-id";
const currentDate = new Date();

export const tasks = [
  {
    id: RandomId(),
    task: "Check File on Github",
    status: "todo",
    created_at: currentDate,
  },
  {
    id: RandomId(),
    task: "Write Daily Task",
    status: "todo",
    created_at: currentDate,
  },
  {
    id: RandomId(),
    task: "Set last 5 priority",
    status: "todo",
    created_at: currentDate,
  },
  {
    id: RandomId(),
    task: "Do first priority",
    status: "progress",
    created_at: currentDate,
  },
  {
    id: RandomId(),
    task: "Confirm last task",
    status: "progress",
    created_at: currentDate,
  },
  {
    id: RandomId(),
    task: "Set done finished project",
    status: "done",
    created_at: currentDate,
  },
  {
    id: RandomId(),
    task: "Confirm existing resource available",
    status: "done",
    created_at: currentDate,
  },
];
