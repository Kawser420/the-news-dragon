import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-center">
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
        </a>
      </div>
      <h1 className="text-3xl font-bold text-center my-4">Vite + React</h1>
      <div className="card p-4 bg-white rounded-lg shadow-md text-center">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          count is {count}
        </button>
        <p className="mt-4">
          Edit <code className="bg-gray-100 p-1 rounded">src/App.tsx</code> and
          save to test HMR
        </p>
      </div>
      <p className="read-the-docs text-center text-gray-500 mt-4">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
