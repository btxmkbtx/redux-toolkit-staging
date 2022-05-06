import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, sub, subAsync } from "./store/modules/counter";

function App() {
  const [num, setNum] = useState(0);
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);

  const onChangeNum = (e) => {
    setNum(e.target.value);
  };

  return (
    <div className="App">
      <h1>当前总和:{count}</h1>
      <div>
        <h3>没有payload的action</h3>
        <button
          onClick={() => {
            dispatch(add());
          }}
        >
          固定+1
        </button>
      </div>
      <div>
        <h3>有payload的action</h3>
        <input
          type="text"
          onChange={(e) => onChangeNum(e)}
          style={{ width: "20px" }}
          maxLength="2"
        />
        <button
          onClick={() => {
            dispatch(sub(num));
          }}
        >
          减法
        </button>
        <button
          onClick={() => {
            dispatch(subAsync(num, 1000));
          }}
        >
          异步减法
        </button>
      </div>
    </div>
  );
}

export default App;
