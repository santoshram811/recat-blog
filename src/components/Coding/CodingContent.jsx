import React from "react";
import CodeBlock from "../CodeBlock/CodeBlock";

const CodingContent = () => {
  return (
    <div className="space-y-8 p-4 ">
      {/* 1 */}
      <h2>1️⃣ What is React and why use it? ⚛️</h2>
      <p className="text-gray-900 dark:text-gray-200 !opacity-100">
        React is a JavaScript library for building{" "}
        <strong>user interfaces</strong>. It’s component-based, efficient, and
        declarative.
      </p>

      {/* 2 */}
      <h2>2️⃣ Explain the Virtual DOM 🌐</h2>
      <p>
        The Virtual DOM is a lightweight copy of the real DOM. React compares
        the new Virtual DOM with the previous one (diffing) and updates only
        changed parts in the real DOM (reconciliation).
      </p>

      {/* 3 */}
      <h2>3️⃣ Difference between Functional and Class Components 🆚</h2>
      <CodeBlock
        codeString={`// Functional Component
function Hello() {
  return <h1>Hello World</h1>;
}

// Class Component
class HelloClass extends React.Component {
  render() {
    return <h1>Hello World</h1>;
  }
}`}
      />

      {/* 4 */}
      <h2>4️⃣ What are React Hooks? 🪝</h2>
      <CodeBlock
        codeString={`import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`}
      />

      {/* 5 */}
      <h2>5️⃣ Explain useEffect Hook ⏳</h2>
      <CodeBlock
        codeString={`import React, { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCount(c => c + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  return <h1>{count}</h1>;
}`}
      />

      {/* 6 */}
      <h2>6️⃣ What is JSX? 📝</h2>
      <p>
        JSX is a JavaScript XML syntax extension that allows writing HTML-like
        code inside JavaScript.
      </p>

      {/* 7 */}
      <h2>7️⃣ How does state differ from props? 📦</h2>
      <ul>
        <li>
          <strong>State:</strong> Managed inside a component, mutable.
        </li>
        <li>
          <strong>Props:</strong> Passed from parent, read-only.
        </li>
      </ul>

      {/* 8 */}
      <h2>8️⃣ Explain useMemo 🧠</h2>
      <CodeBlock
        codeString={`import React, { useMemo } from "react";

function ExpensiveCalc({ num }) {
  const result = useMemo(() => {
    console.log("Calculating...");
    return num * 2;
  }, [num]);

  return <h1>{result}</h1>;
}`}
      />

      {/* 9 */}
      <h2>9️⃣ What is useCallback? 🔄</h2>
      <CodeBlock
        codeString={`import React, { useState, useCallback } from "react";

function Parent() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount(c => c + 1), []);
  return <Child onClick={increment} />;
}

function Child({ onClick }) {
  return <button onClick={onClick}>Increment</button>;
}`}
      />

      {/* 10 */}
      <h2>🔟 What is React.memo? 📌</h2>
      <CodeBlock
        codeString={`const Child = React.memo(({ value }) => {
  console.log("Rendered");
  return <h1>{value}</h1>;
});`}
      />

      {/* 11 */}
      <h2>1️⃣1️⃣ What is code splitting in React? 📦</h2>
      <CodeBlock
        codeString={`const OtherComponent = React.lazy(() => import('./OtherComponent'));`}
      />

      {/* 12 */}
      <h2>1️⃣2️⃣ What is Context API? 🌍</h2>
      <CodeBlock
        codeString={`const MyContext = React.createContext();
<MyContext.Provider value={data}>
  <Child />
</MyContext.Provider>`}
      />

      {/* 13 */}
      <h2>1️⃣3️⃣ What is Redux? 🛠️</h2>
      <p>Redux is a state management library for predictable state updates.</p>

      {/* 14 */}
      <h2>1️⃣4️⃣ Explain React lifecycle methods 📅</h2>
      <ul>
        <li>componentDidMount</li>
        <li>componentDidUpdate</li>
        <li>componentWillUnmount</li>
      </ul>

      {/* 15 */}
      <h2>1️⃣5️⃣ What is key prop in React lists? 🔑</h2>
      <p>Key helps React identify elements and optimize re-rendering.</p>

      {/* 16 */}
      <h2>1️⃣6️⃣ How do you handle forms in React? 📝</h2>
      <CodeBlock
        codeString={`function Form() {
  const [name, setName] = useState("");
  return (
    <form>
      <input value={name} onChange={e => setName(e.target.value)} />
    </form>
  );
}`}
      />

      {/* 17 */}
      <h2>1️⃣7️⃣ Controlled vs Uncontrolled Components 🎛️</h2>
      <ul>
        <li>
          <strong>Controlled:</strong> React manages input state.
        </li>
        <li>
          <strong>Uncontrolled:</strong> DOM manages input state via ref.
        </li>
      </ul>

      {/* 18 */}
      <h2>1️⃣8️⃣ What are fragments? 🧩</h2>
      <p>
        &lt;React.Fragment&gt; lets you return multiple elements without extra
        DOM nodes.
      </p>

      {/* 19 */}
      <h2>1️⃣9️⃣ Explain error boundaries 🚧</h2>
      <p>
        Error boundaries catch JavaScript errors in child components and display
        a fallback UI.
      </p>

      {/* 20 */}
      <h2>2️⃣0️⃣ What is hydration in React? 💧</h2>
      <p>
        Hydration is attaching event listeners to HTML generated by the server
        (SSR).
      </p>
    </div>
  );
};

export default CodingContent;
