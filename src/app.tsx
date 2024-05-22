import { Board } from "./components/board.tsx";
import { Card } from "./components/card.tsx";
// import { SayHello } from "./utils/hello.tsx";
import * as tableBoards from "./tables/table-boards.tsx";
import * as tableTasks from "./tables/table-tasks.tsx";

// import { AddButton } from "./ui/button.tsx";

export default function Productiv() {
  // console.log(SayHello("Rido"));
  const boards = tableBoards.getAllBoards();
  const tasks = tableTasks.getAllTasks();
  const todo = tasks.filter((task: any) => {
    return task.board_id === 1 && task.status === "todo";
  });

  const progress = tasks.filter((task: any) => {
    return task.board_id === 1 && task.status === "progress";
  });

  const done = tasks.filter((task: any) => {
    return task.board_id === 1 && task.status === "done";
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 lg:mx-0">
      <div className="mr-0 lg:mr-2 mb-4">
        <Board list={boards} />
      </div>

      <div className="mr-0 lg:mr-2 mb-4">
        <Card
          background="bg-stone-500"
          borderColor="border-stone-500"
          title="Todo List"
          list={todo}
          isDone={false}
        />
      </div>

      <div className="mr-0 lg:mr-2 mb-4">
        <Card
          background="bg-cyan-500"
          borderColor="border-cyan-500"
          title="In Progress"
          list={progress}
          isDone={false}
        />
      </div>

      <div className="mr-0 lg:mr-2 mb-4">
        <Card
          background="bg-green-500"
          borderColor="border-green-500"
          title="Done"
          list={done}
          isDone={true}
        />
      </div>
    </div>
  );
}
