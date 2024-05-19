export function Card({
  background,
  borderColor,
  title,
  list,
  isDone,
}: {
  background: string;
  borderColor: string;
  title: string;
  list: any;
  isDone: boolean;
}) {
  const strikeThrough = isDone === true ? "line-through" : "";
  return (
    <div
      className={`w-full rounded-lg lg:mb-0 border-2 ${borderColor} bg-slate-50 dark:bg-slate-700`}
    >
      <h2
        className={
          "py-1 mb-2 text-white text-lg text-center tracking-wider " +
          background
        }
      >
        {title}
      </h2>
      <div className="text-slate-500 px-2 dark:text-slate-400 border-b-1 border-dashed border-slate-100 dark:border-slate-50">
        <ul className="mb-2">
          {Object.keys(list).map((key) => {
            const item = list[key];
            return (
              <li className={"text-sm " + strikeThrough} key={list[key].id}>
                <input
                  type="checkbox"
                  id={
                    "check-" + list[key].task.replace(/\s+/g, "-").toLowerCase()
                  }
                  name={list[key].task.replace(/\s+/g, "-").toLowerCase()}
                ></input>{" "}
                <label
                  htmlFor={
                    "check-" + item.task.replace(/\s+/g, "-").toLowerCase()
                  }
                >
                  {" "}
                  {item.task}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className={"text-xs pb-2 pr-2 border-b-2 border-dotted " + borderColor}
      >
        <form method="post" id="move-form">
          <div className="text-right">
            <span className="inline dark:text-slate-400">
              Move selected to{" "}
            </span>
            <select className="pl-2 py-1 mr-2 inline dark:text-slate-400">
              <option>Choose</option>
              <option>In Progress</option>
              <option>Done</option>
            </select>
            <button
              type="submit"
              className="inline bg-slate-500 hover:bg-slate-400 text-slate-100 py-1 px-2"
            >
              Move
            </button>
          </div>
        </form>
      </div>
      <div className="py-2 px-2">
        <form method="post" id="add-list-form">
          <input
            type="text"
            name="new-list"
            className="w-10/12 bg-slate-100 dark:bg-slate-500 dark:text-slate-300 border-2 border-solid border-slate-300 dark:border-slate-500 text-sm py-1 pl-2"
            placeholder="New list..."
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
