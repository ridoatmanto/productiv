// import { getImageUrl } from "./utils.tsx";

// interface Person {
//   name: string;
//   imageId: string;
// }

// function Avatar({ person, size }: { person: Person; size: any }) {
//   return (
//     <img
//       className="avatar"
//       src={getImageUrl(person)}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }

export default function Productiv() {
  return (
    // <Avatar person={{ name: "Lin Lanying", imageId: "1bX5QH6" }} size={100} />
    // <div className="h-screen">
    <div>
      <h1 className="text-xl font-bold ml-2 tracking-wider">
        <a
          className="text-[#213547] hover:underline"
          href="https://productiv.ridoatmanto.com"
        >
          <img
            className="logo inline -mt-2"
            src={"./productiv.svg"}
            alt="Productive Logo"
            width="25"
            height="25"
          />
          Productiv
        </a>
      </h1>
      <p className="text-sm italic mb-4 ml-2">
        Your best productivity companion.
      </p>
      <div className="grid grid-cols-3 gap-3">
        <div className="border-2 border-stone-500 rounded-lg">
          <div className="bg-stone-500 border-b-2 border-stone-500 pt-2 px-2 text-center text-white">
            <h2 className="text-lg">Todo List</h2>
          </div>
          <div className="py-2 px-2">
            <ul>
              <li className="text-sm">
                <input
                  type="checkbox"
                  id="check-create-react"
                  name="create-react"
                ></input>{" "}
                <label htmlFor="check-create-react">Create React</label>
              </li>
              <li className="text-sm">
                <input
                  type="checkbox"
                  id="check-update-tailwind"
                  name="create-tailwind"
                ></input>{" "}
                <label htmlFor="check-update-tailwind">
                  Update TailwindCSS
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-2 border-cyan-500 rounded-lg">
          <div className="bg-cyan-500 border-b-2 border-cyan-500 pt-1 px-2 text-center text-white">
            <h2 className="text-lg">In Progress</h2>
          </div>
          <div className="py-2 px-2">
            <ul>
              <li className="text-sm">
                <input
                  type="checkbox"
                  id="check-create-html"
                  name="create-html"
                ></input>{" "}
                <label htmlFor="check-create-html">Create HTML</label>
              </li>
              <li className="text-sm">
                <input
                  type="checkbox"
                  id="check-add-tailwind"
                  name="create-html"
                ></input>{" "}
                <label htmlFor="check-add-tailwind">Add TailwindCSS</label>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-2 border-green-500 rounded-lg">
          <div className="bg-green-500 border-b-2 border-green-500 pt-1 px-2 text-center text-white">
            <h2 className="text-lg">Done</h2>
          </div>
          <div className="py-2 px-2">
            <ul>
              <li className="text-sm">
                <input
                  type="checkbox"
                  id="check-create-sub-domain"
                  name="create-sub-domain"
                ></input>{" "}
                <label
                  htmlFor="check-create-sub-domain"
                  className="line-through"
                >
                  Create Sub Domain
                </label>
              </li>
              <li className="text-sm">
                <input
                  type="checkbox"
                  id="check-create-repo"
                  name="create-repo"
                ></input>{" "}
                <label htmlFor="check-create-repo" className="line-through">
                  Create Github Repository
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <footer className="text-xs text-center border-t-2 border-dashed py-2 mt-8">
        Copyright &copy; 2024 <a href="https://ridoatmanto.com">Rido Atmanto</a>
      </footer>
    </div>
  );
}
