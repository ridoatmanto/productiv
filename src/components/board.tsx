import { TitleCase } from "../utils/title-case";

export function Board({ list }: { list: any }) {
  return (
    <div className="w-full rounded-lg mb-4 lg:mb-0">
      <h2
        className={
          "ml-2 mb-2 text-slate-500 dark:text-slate-100 text-lg tracking-wider "
        }
      >
        Your Boards
      </h2>
      <div className="text-slate-500 px-2 dark:text-slate-400 border-b-1 border-dashed border-slate-100 dark:border-slate-50">
        <ol className="mb-2 list-decimal list-inside">
          {list.map((item: any, i: any) => (
            <li
              className={"text-sm " + ((i + 1) % 5 === 0 ? "mb-2" : "")}
              key={item.board.split(" ")[0] + "-" + i}
            >
              <a href="#">{TitleCase(item.board)}</a> X edit
            </li>
          ))}
        </ol>
      </div>
      <div className="py-2 px-2">
        <form method="post" id="add-list-form">
          <input
            type="text"
            name="new-list"
            className="w-10/12 bg-slate-100 dark:bg-slate-500 dark:text-slate-300 border-2 border-solid border-slate-300 dark:border-slate-500 text-sm py-1 pl-2"
            placeholder="New Board..."
          ></input>{" "}
          <button
            type="submit"
            className="border-1 border-slate-500 bg-slate-500 hover:bg-slate-400 rounded-full px-2 pt-0 pb-1 text-white"
          >
            +
          </button>
        </form>
      </div>
    </div>
  );
}
