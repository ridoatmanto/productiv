import { Card } from "../components/card.tsx";
import { tasks } from "../data/tasks.tsx";

import { useState } from "react";

export default function App() {
  const storageKey = "tasks";

  const saveTasks = (newTasks: any) => {
    localStorage.setItem(storageKey, JSON.stringify(newTasks));
  };

  const getAllTasks = (tasks: any) => {
    if (!localStorage.getItem(storageKey)) {
      saveTasks(tasks);
    }

    if (localStorage.getItem(storageKey) !== null) {
      return JSON.parse(localStorage.getItem(storageKey) || "");
    } else {
      return [];
    }
  };

  getAllTasks(tasks);

  const taskFromStorage = JSON.parse(localStorage.getItem(storageKey) || "");
  const [taskList, setTaskList] = useState(taskFromStorage);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:mx-0">
        <div className="mr-0 lg:mr-4 mb-4">
          <Card
            color="stone-500"
            title="Todo List"
            tasks={taskList}
            status="todo"
            listCallback={setTaskList}
          />
        </div>
        <div className="mr-0 lg:mr-4 mb-4">
          <Card
            color="cyan-500"
            title="In Progress"
            tasks={taskList}
            status="progress"
            listCallback={setTaskList}
          />
        </div>

        <div className="mr-0 mb-4">
          <Card
            color="green-500"
            title="Done"
            tasks={taskList}
            status="done"
            listCallback={setTaskList}
          />
        </div>
      </div>
    </div>
  );
}
