import { countSelector, increment, decrement, reset } from "../store/count";
import { useSelector, useDispatch } from "react-redux";

export const Counter = () => {
  const count = useSelector(countSelector);
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
      <h3>{count}</h3>
    </>
  );
};
