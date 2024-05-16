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
    <div className={"w-full rounded-lg mb-4 lg:mb-0 border-2 " + borderColor}>
      <div
        className={
          "border-b-2 pt-2 pb-1 px-2 text-center text-white " + background
        }
      >
        <h2 className="text-lg tracking-wider">{title}</h2>
      </div>
      <div className="py-2 px-2 text-slate-500 dark:text-slate-400">
        <ul>
          {list.map((item: any, i: any) => (
            <li
              className={"text-sm " + strikeThrough}
              key={item.split(" ")[0] + "-" + i}
            >
              <input
                type="checkbox"
                id={"check-" + item.replace(/\s+/g, "-").toLowerCase()}
                name={item.replace(/\s+/g, "-").toLowerCase()}
              ></input>{" "}
              <label
                htmlFor={"check-" + item.replace(/\s+/g, "-").toLowerCase()}
              >
                {" "}
                {item}
              </label>
            </li>
          ))}
        </ul>
        <div className=" w-full text-xs float-right mt-4 pb-2 mb-2 border-b-2 border-dashed">
          <form method="post" id="move-form">
            <span className="float-right">
              Move selected to{" "}
              <select className="pl-2 py-2 mr-2">
                <option>Choose</option>
                <option>In Progress</option>
                <option>Done</option>
              </select>
              <button
                type="submit"
                className="border-1 border-slate-500 bg-slate-300 hover:bg-slate-400 text-white"
              >
                Move
              </button>
            </span>
          </form>
        </div>
      </div>
      <div className="py-2 px-2">
        <form method="post" id="add-list-form">
          <input
            type="text"
            name="new-list"
            className="w-10/12 text-sm py-1 border-1 border-slate-100 bg-slate-100 pl-2"
            placeholder="New list..."
          ></input>{" "}
          <button
            type="submit"
            className="border-1 border-slate-500 bg-slate-300 hover:bg-slate-400 rounded-full px-2 py-0"
          >
            +
          </button>
        </form>
      </div>
    </div>
  );
}
