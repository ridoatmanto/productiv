import { Card } from "./components/card.tsx";
import { initTaskList } from "./inits/tasks.tsx";

import { useState } from "react";

export default function Productiv() {
  const [taskList, setTaskList] = useState(initTaskList);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:mx-0">
        <div className="mr-0 lg:mr-4 mb-4">
          <Card
            background="bg-stone-500"
            borderColor="border-stone-500"
            title="Todo List"
            list={taskList}
            card="todo"
            listCallback={setTaskList}
          />
        </div>

        <div className="mr-0 lg:mr-4 mb-4">
          <Card
            background="bg-cyan-500"
            borderColor="border-cyan-500"
            title="In Progress"
            list={taskList}
            card="progress"
            listCallback={setTaskList}
          />
        </div>

        <div className="mr-0 mb-4">
          <Card
            background="bg-green-500"
            borderColor="border-green-500"
            title="Done"
            list={taskList}
            card="done"
            listCallback={setTaskList}
          />
        </div>
      </div>
    </div>
  );
}
