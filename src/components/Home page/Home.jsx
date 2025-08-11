import React from "react";
import CodeBlock from "../CodeBlock/CodeBlock";
import profilePic from "../../assets/pic.jpg";

export default function Home() {
  const codeString = `
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Santosh"));
  `;

  return (
    <div>
      <h1>Welcome to Santosh Blog!</h1>
      <CodeBlock codeString={codeString} />
      <div className="flex items-center mt-4 bg-white text-black p-4 rounded-lg shadow-md">
        <img
          src={profilePic}
          className="w-16 h-16 rounded-full"
          alt="Santosh"
        />
        <p className="ml-4">Tech enthusiast, coder, and blogger!</p>
      </div>
    </div>
  );
}
