// version 1: normal JS function
// export function AddButton() {
//   function handleClick() {
//     console.log("Added!");
//   }

//   return <button onClick={handleClick}>Add Thing</button>;
// }

export function ListForm() {
  const handleClick = () => {
    console.log("Handle Click List Form");
  };
  return (
    <form method="post" id="add-list-form">
      <input
        type="text"
        name="new-list"
        className="w-10/12 bg-slate-100 dark:bg-slate-500 dark:text-slate-300 border-2 border-solid border-slate-300 dark:border-slate-500 text-sm py-1 pl-2"
        placeholder="New list..."
      ></input>{" "}
      <button
        type="button"
        onClick={handleClick}
        className="border-1 border-slate-500 bg-slate-500 hover:bg-slate-400 rounded-full px-2 pt-0 pb-1 text-white"
      >
        +
      </button>
    </form>
  );
}
