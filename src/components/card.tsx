import { useState } from "react";

export function Card({
  background,
  borderColor,
  title,
  list,
  card,
  listCallback,
}: {
  background: string;
  borderColor: string;
  title: string;
  list: any;
  card: any;
  listCallback: any;
}) {
  const filteredList = list.filter((task: any) => {
    return task.board_id === 1 && task.status === card;
  });

  const [isToggleAdd, setToggleAdd] = useState(false);

  const showAddList = () => {
    setToggleAdd((isToggleAdd: boolean) => !isToggleAdd);
  };

  const [task, setTask] = useState("");

  const handleChange = (event: any) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const submittedTask = task;

    const newTaskList = {
      id: list.length + 1,
      board_id: 1,
      task: submittedTask,
      status: card,
    };
    listCallback([...list, newTaskList]);
    setTask("");
  };

  const removeTask = (id: any) => {
    const updatedTodos = list.filter((todo: any) => todo.id !== id);
    listCallback(updatedTodos);
  };
  const [movedList, setMovedList] = useState<number[]>([]);

  const addIntoMovedList = (id: number) => {
    if (movedList.includes(id)) {
      const updatedMovedList = movedList.filter((todo: any) => todo.id !== id);
      setMovedList(updatedMovedList);
    } else {
      setMovedList([...movedList, id]);
    }
  };
  const moveTask = (event: any) => {
    event.preventDefault();
    const newList = list.map((todo: any) => {
      if (movedList.includes(todo.id)) {
        todo.status = targetCard;
      }
      return todo;
    });
    listCallback(newList);
    setTargetCard("");
    setMovedList([]);
  };

  const [targetCard, setTargetCard] = useState("");

  const handleTargetCardChange = (event: any) => {
    setTargetCard(event.target.value);
  };

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
          {filteredList.map((todo: any) => (
            <li className="text-sm" key={todo.id}>
              <input
                type="checkbox"
                id={"check-" + todo.task.replace(/\s+/g, "-").toLowerCase()}
                name={todo.task.replace(/\s+/g, "-").toLowerCase()}
              ></input>{" "}
              <label
                onClick={() => addIntoMovedList(todo.id)}
                htmlFor={
                  "check-" + todo.task.replace(/\s+/g, "-").toLowerCase()
                }
              >
                {" "}
                <span className="pb-2 inline-block">{todo.task}</span>{" "}
              </label>
              <svg
                className="w-4 h-4 hover:w-6 hover:h-6 text-slate-500 dark:text-slate-400 inline-block"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
                onClick={() => removeTask(todo.id)}
              >
                <path
                  fill-rule="evenodd"
                  d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                  clip-rule="evenodd"
                />
              </svg>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={"text-xs pb-2 pr-2 border-b-2 border-dotted " + borderColor}
      >
        <form onSubmit={moveTask} method="post" id="move-form">
          <div className="text-right">
            <span className="inline dark:text-slate-400">
              Move selected to{" "}
            </span>
            <select
              value={targetCard}
              onChange={handleTargetCardChange}
              className="pl-2 py-1 mr-2 inline dark:text-slate-400 text-xs"
            >
              <option value="" defaultValue="">
                Choose
              </option>
              <option value="todo">Todo</option>
              <option value="progress">In Progress</option>
              <option value="done">Done</option>
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
        <button
          className="block w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-2 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 tracking-wider"
          type="button"
          onClick={showAddList}
          data-modal-toggle="default-modal"
        >
          {isToggleAdd ? "Hide Add Task Form" : "Add Task"}
        </button>
        {isToggleAdd === true && (
          <form
            onSubmit={handleSubmit}
            method="post"
            id="add-list-form"
            className="mt-2"
          >
            <input
              type="text"
              name="new-list"
              value={task}
              onChange={handleChange}
              className="w-10/12 bg-slate-100 text-slate-500 dark:bg-slate-500 dark:text-slate-300 border-2 border-solid border-slate-300 dark:border-slate-500 text-sm py-1 pl-2 rounded-lg"
              placeholder="New list..."
            />{" "}
            <button
              type="submit"
              className="border-1 border-slate-500 bg-slate-500 hover:bg-slate-400 rounded-full px-2 pt-0 pb-1 text-white"
            >
              +
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
