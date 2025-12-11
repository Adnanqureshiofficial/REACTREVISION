import { useReducer } from "react";



export const toDoReducer = (state, action) => {       
    
    switch (action.type) {
        case "Add_To_List":
            const newTask = action.payload;
            console.log("add to list reached")
            return {
                ...state,
                numberOfItems: state.numberOfItems + 1,
                listItems: [...state.listItems, 
                    {taskNumber: state.listItems.length+1,
                    taskDescription: newTask,
                    }] 
            }
            
        case "Delete_Task": {
  // 1. Remove the item
  const updatedList = state.listItems.filter(
    (item, index) => index !== action.payload
  );

  // 2. Reassign taskNumber for every task
  const reIndexedList = updatedList.map((item, index) => ({
    ...item,
    taskNumber: index + 1, // new serial number
  }));

  return {
    ...state,
    listItems: reIndexedList,
    numberOfItems: reIndexedList.length
  };
}
           
        default:
            return state;

    } 

}