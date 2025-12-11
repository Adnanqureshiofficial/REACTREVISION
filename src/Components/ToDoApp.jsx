import { useContext, useEffect, useRef } from "react";
import { ToDoContext } from "./ToDoProvider";

const ToDoApp = () => {
  const { toDoList, dispatch } = useContext(ToDoContext);
  const toDoTask = useRef(null);

  const addToList = (e) => {
    e.preventDefault();

    dispatch({ type: "Add_To_List", payload: toDoTask.current.value });
    console.log(toDoTask.current.value);
  };

  const deleteItem = (index) => {
    dispatch({ type: "Delete_Task", payload: index });
    console.log("deleteItem reached");
  };
  return (
    <>
      <div className="min-w-full  bg-gray-400 text-white">
        <h2 className="rounded-sm p-1 text-2xl text-center font-bold bg-red-600">
          My ToDo App
        </h2>
        {/* Add to todo list */}
        <section className="text-center p-2">
          <form onSubmit={addToList}>
            <input
              type="text"
              ref={toDoTask}
              className="rounded-sm w-[50%] p-2 outline-none text-black bg-white focus:border-blue-600 hover:border-blue-800 border-2"
            />
            <button
              type="submit"
              className="rounded-sm p-2 bg-white mx-2  text-black"
            >
              Add to List
            </button>
          </form>
        </section>

        <section className="text-center bg-black p-2">
          {toDoList.listItems.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white text-black border-2 border-blue-700 flex  h-full rounded-sm w-[50%] "
              >
                <p className="text-2xl bg-blue-400 p-2 px-4 ">
                  {item.taskNumber}
                </p>{" "}
                <p className="bg-blue-300 text-xl pl-2 text-center  w-full ">
                  {item.taskDescription}
                </p>{" "}
                <button
                  onClick={() => deleteItem(index)}
                  className="text-xl items-center justify-center bg-blue-400 p-2 px-4"
                >
                  Delete{" "}
                </button>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default ToDoApp;
