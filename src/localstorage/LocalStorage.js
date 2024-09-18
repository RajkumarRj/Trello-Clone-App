const LocalStorageKeyName = "Trello-Boards";

export function fetchBoardList() {
  const storedData = localStorage.getItem(LocalStorageKeyName);
  return storedData ? JSON.parse(storedData) : [];
}

export function updateLocalStorageBoards(boards) {
  localStorage.setItem(LocalStorageKeyName, JSON.stringify(boards));
}
