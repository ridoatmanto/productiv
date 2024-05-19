import { tasks } from "../inits/tasks";

const storageKey = "tasks";

function getAllTasks() {
  if (!localStorage.getItem(storageKey)) {
    saveTasks(tasks);
  }

  if (localStorage.getItem(storageKey) !== null) {
    return JSON.parse(localStorage.getItem(storageKey) || "");
  } else {
    return [];
  }
}

function saveTasks(tasks: any) {
  localStorage.setItem(storageKey, JSON.stringify(tasks));
}

export { getAllTasks };
