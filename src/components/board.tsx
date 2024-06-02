import { TitleCase } from "../utils/title-case";
// import { ListForm } from "../ui/list-form";

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
              <a href="#" className="inline-block pb-2">
                {TitleCase(item.board)}
              </a>{" "}
              <svg
                className="w-4 h-4 hover:w-6 hover:h-6 text-slate-500 dark:text-slate-400 inline-block"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                  clip-rule="evenodd"
                />
              </svg>
            </li>
          ))}
        </ol>
      </div>
      <div className="px-2">{/* <ListForm isEdit={false} value="" /> */}</div>
    </div>
  );
}
