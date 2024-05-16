import { Card } from "./card.tsx";

export default function Productiv() {
  return (
    <div className="h-screen w-screen lg:max-w-4xl">
      <h1 className="text-3xl font-bold ml-4 lg:ml-2 tracking-wider">
        <a
          className="text-[#213547] hover:underline"
          href="https://productiv.ridoatmanto.com"
        >
          <img
            className="logo inline -mt-2 mr-2"
            src={"./productiv.svg"}
            alt="Productive Logo"
            width="36"
            height="36"
          />
          Productiv
        </a>
      </h1>
      <p className="text-md italic mb-4 ml-4 lg:ml-2 text-slate-500">
        Your best productivity companion.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-3 mx-4 lg:mx-0">
        <Card
          background="bg-stone-500"
          borderColor="border-stone-500"
          title="Todo List"
          list={["Create React", "Update TailwindCSS"]}
          isDone={false}
        />
        <Card
          background="bg-cyan-500"
          borderColor="border-cyan-500"
          title="In Progress"
          list={["Create HTML", "Add TailwindCSS"]}
          isDone={false}
        />
        <Card
          background="bg-green-500"
          borderColor="border-green-500"
          title="Done"
          list={["Create Sub Domain", "Create Github Repository"]}
          isDone={true}
        />
      </div>
      <footer className="text-slate-500 text-xs text-center border-t-2 border-dashed py-2 mt-2 lg:mt-8">
        Copyright &copy; 2024 <a href="https://ridoatmanto.com">Rido Atmanto</a>
      </footer>
    </div>
  );
}
