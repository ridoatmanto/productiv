import { boards } from "../inits/boards";

const storageKey = "boards";

function getAllBoards() {
  if (!localStorage.getItem(storageKey)) {
    saveBoards(boards);
  }
  if (localStorage.getItem(storageKey) !== null) {
    return JSON.parse(localStorage.getItem(storageKey) || "");
  } else {
    return [];
  }
}

function saveBoards(boards: any) {
  localStorage.setItem(storageKey, JSON.stringify(boards));
}

// export function getBoardById(boardId) {
//   return getAllBoards().find((board) => {
//     return board.id === boardId;
//   });
// }

// export function addBoard(newBoard) {
//   let currentBoards = getAllBoards();
//   const result = currentBoards.push(newBoard);
//   saveBoards(result);
// }

// export function removeBoard(boardId) {
//   let boards = getAllBoards();
//   const result = boards.filter((board) => {
//     return board.id !== boardId;
//   });
//   saveBoards(result);

//   return result;
// }

// export function updateBoardName(boardId, name) {
//   const result = getAllBoards().map((board) => {
//     if (board.id === boardId) {
//       board.name = name;
//     }
//   });
//   saveBoards(result);
// }

export {
  // functionA,
  // functionB
  getAllBoards,
};
