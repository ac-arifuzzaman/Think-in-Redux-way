import { loaded } from "../actions";

const fetchTdos = async (dispatch) => {
  const response = await fetch("http://localhost:9000/todos");
  const todos = await response.json();

  dispatch(loaded(todos));
};

export default fetchTdos;
