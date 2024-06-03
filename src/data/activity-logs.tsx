const currentDate = new Date();
import { RandomId } from "../utils/random-id";

export type Log = {
  taskId: string;
  task: string;
  status: string;
  created_at: Date;
};

export const activityLogs: Log[] = [
  {
    taskId: RandomId(),
    task: "Init data task",
    status: "done",
    created_at: currentDate,
  },
];
