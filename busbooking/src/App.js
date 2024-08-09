import Form from "./components/Form";
import "./App.css";
import { useEffect, useState } from "react";
import Wrapper from "./components/Wrapper";
const ChildCompoent = React.lazy(() => import("./OtherComponent"));

function App() {
  const [state, setstate] = useState(false);
  const [count, setCount] = useState(0);
  const [text, setText] = useState();
  const handleData = (data) => {
    console.log(data);
  };

  useEffect(() => {
    setstate(true);
    console.log("useEffect hook is called");
  }, [state]); //on state change i.e. updating phase

  const expensiveComputation = useMemo(() => {
    console.log("Running expensive computation");
    return count * 2;
  }, [count]);

  return (
    <div className="App">
      <div>
        <p>Count: {count}</p>
        <p>Expensive Computation Result: {expensiveComputation}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <React.Suspense fallback="<p>Loading...">
        <ChildCompoent
          message={"Hello from parent"}
          sendDataToParent={handleData}
        />
      </React.Suspense>
      <Form />
      <Wrapper>
        <h1>Hello, world!</h1>
        <p>This is a paragraph inside the wrapper.</p>
      </Wrapper>
    </div>
  );
}

export default App;
