export function ListForm({ isEdit, value }: { isEdit: any; value: any }) {
  const handleClick = () => {
    console.log("Handle Click List Form");
  };

  let props = {
    type: "text",
    name: "new-list",
    className:
      "w-10/12 bg-slate-100 dark:bg-slate-500 dark:text-slate-300 border-2 border-solid border-slate-300 dark:border-slate-500 text-sm py-1 pl-2",
    placeholder: "New list...",
  };

  if (isEdit === true) {
    console.log("IS EDIT value", value);
    (props as any).value = value;
  }

  return (
    <form method="post" id="add-list-form">
      <input {...props} />{" "}
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
