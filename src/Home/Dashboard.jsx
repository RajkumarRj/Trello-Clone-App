import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Board from "../component/Board/Board";

import {
  fetchBoardList,
  updateLocalStorageBoards,
} from "../localstorage/LocalStorage";
import CustomInput from "../component/CustomInput/CustomInput";

const Dashboard = () => {
  const [boards, setBoards] = useState([]);
  const [targetCard, setTargetCard] = useState({
    boardId: 0,
    cardId: 0,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const storedBoards = fetchBoardList();
    setBoards(storedBoards);
  };

  const addboardHandler = (name) => {
    const newBoard = {
      id: Date.now() + Math.random() * 2,
      title: name,
      cards: [],
    };
    const updatedBoards = [...boards, newBoard];
    setBoards(updatedBoards);
    updateLocalStorageBoards(updatedBoards);
  };

  const removeBoard = (boardId) => {
    const updatedBoards = boards.filter((item) => item.id !== boardId);
    setBoards(updatedBoards);
    updateLocalStorageBoards(updatedBoards);
  };

  const addCardHandler = (boardId, title) => {
    const updatedBoards = boards.map((board) => {
      if (board.id === boardId) {
        return {
          ...board,
          cards: [
            ...board.cards,
            {
              id: Date.now() + Math.random() * 2,
              title,
              labels: [],
              date: "",
              desc: "",
              tasks: [],
            },
          ],
        };
      }
      return board;
    });
    setBoards(updatedBoards);
    updateLocalStorageBoards(updatedBoards);
  };

  const removeCard = (boardId, cardId) => {
    const updatedBoards = boards.map((board) => {
      if (board.id === boardId) {
        return {
          ...board,
          cards: board.cards.filter((card) => card.id !== cardId),
        };
      }
      return board;
    });
    setBoards(updatedBoards);
    updateLocalStorageBoards(updatedBoards);
  };

  const updateCard = (boardId, cardId, updatedCard) => {
    const updatedBoards = boards.map((board) => {
      if (board.id === boardId) {
        return {
          ...board,
          cards: board.cards.map((card) =>
            card.id === cardId ? updatedCard : card
          ),
        };
      }
      return board;
    });
    setBoards(updatedBoards);
    updateLocalStorageBoards(updatedBoards);
  };

  const onDragEnd = (boardId, cardId) => {
    const sourceBoardIndex = boards.findIndex((item) => item.id === boardId);
    const sourceCardIndex = boards[sourceBoardIndex]?.cards?.findIndex(
      (item) => item.id === cardId
    );
    const targetBoardIndex = boards.findIndex(
      (item) => item.id === targetCard.boardId
    );

    if (sourceBoardIndex < 0 || sourceCardIndex < 0 || targetBoardIndex < 0)
      return;

    const updatedBoards = [...boards];
    const [movedCard] = updatedBoards[sourceBoardIndex].cards.splice(
      sourceCardIndex,
      1
    );
    updatedBoards[targetBoardIndex].cards.push(movedCard);

    setBoards(updatedBoards);
    updateLocalStorageBoards(updatedBoards);

    setTargetCard({
      boardId: 0,
      cardId: 0,
    });
  };

  const onDragEnter = (boardId, cardId) => {
    if (targetCard.cardId === cardId) return;

    setTargetCard({
      boardId: boardId,
      cardId: cardId,
    });
  };

  return (
    <div className="app">
      <div className="app-nav">
        <h1>Trello Board</h1>
      </div>
      <div className="app-boards-container">
        <div className="app-boards">
          {boards.map((item) => (
            <Board
              key={item.id}
              board={item}
              addCard={addCardHandler}
              removeBoard={() => removeBoard(item.id)}
              removeCard={removeCard}
              updateCard={updateCard}
              onDragEnd={onDragEnd}
              onDragEnter={onDragEnter}
            />
          ))}

          <div className="app-boards-last">
            <CustomInput
              displayClass="app-boards-add-board"
              editClass="app-boards-add-board-edit"
              placeholder="Enter Board Name"
              text="Add Board"
              buttonText="Add Board"
              onSubmit={addboardHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
