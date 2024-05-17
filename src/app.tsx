import { Board } from "./components/board.tsx";
import { Card } from "./components/card.tsx";
import { SayHello } from "./utils/hello.tsx";

export default function Productiv() {
  console.log(SayHello("Rido"));
  console.log(localStorage);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 lg:mx-0">
      <div className="mr-2">
        <Board
          list={[
            "Working",
            "Personal Development",
            "Brand Project",
            "Weekly List",
            "Long plan",
            "Create mini app",
          ]}
        />
      </div>
      <div className="py-2 px-2">
        <Card
          background="bg-stone-500"
          borderColor="border-stone-500"
          title="Todo List"
          list={["Create React", "Update TailwindCSS", "Push newest code"]}
          isDone={false}
        />
      </div>

      <div className="py-2 px-2">
        <Card
          background="bg-cyan-500"
          borderColor="border-cyan-500"
          title="In Progress"
          list={["Create HTML", "Add TailwindCSS"]}
          isDone={false}
        />
      </div>

      <div className="py-2 pl-2 px-2">
        <Card
          background="bg-green-500"
          borderColor="border-green-500"
          title="Done"
          list={["Create Sub Domain", "Create Github Repository"]}
          isDone={true}
        />
      </div>
    </div>
  );
}
