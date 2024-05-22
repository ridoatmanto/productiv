// version 1: normal JS function
// export function AddButton() {
//   function handleClick() {
//     console.log("Added!");
//   }

//   return <button onClick={handleClick}>Add Thing</button>;
// }

// version 2: functional programming
// export function AddButton() {
//   const handleClick = () => {
//     console.log("Added!");
//   }

//   return <button onClick={handleClick}>Add Thing</button>;
// }

// version 3 : Set as internal component and call it it the same file.

/*
// export function CustomButton(buttonType: any, label: any) {
export function CustomButton(props: any) {
  // const handleClick = () => {
  //   console.log("Handle Click");
  // };
  return (
    <button
      // type={buttonType}
      type="submit"
      className="border-1 border-slate-500 bg-slate-500 hover:bg-slate-400 rounded-full px-2 pt-0 pb-1 text-white"
    >
      {props.label}
    </button>
  );
}*/

export function Button({
  type,
  label,
}: // handleClick,
{
  type: any;
  label: any;
  // handleClick: any;
}) {
  const handleClick = () => {
    console.log("Handle Click");
  };
  return (
    <button
      type={type}
      onClick={handleClick}
      className="border-1 border-slate-500 bg-slate-500 hover:bg-slate-400 rounded-full px-2 pt-0 pb-1 text-white"
    >
      {label}
    </button>
  );
}
