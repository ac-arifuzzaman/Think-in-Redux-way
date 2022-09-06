import { added } from "../actions";

const updatedStatus = (todoId, currentStatus) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        completed: !currentStatus,
      }),
      headers: {
        "Content-type": "application/json; carset=UTF-8",
      },
    });
    const todo = await response.json();

    dispatch(added(todo.text));
  };
};

export default updatedStatus;
