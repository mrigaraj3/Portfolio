import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Welcome</h1>
      <p>I am Mriganabh Rajkonwar,</p>
      <p>A Computer Science student passionate about web development and problem-solving</p>
      <p>With experience in HTML, CSS, JavaScript, and React</p>
      <p>And a strong foundation in Data Structures, DBMS, and Algorithms.</p>

      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
    </div>
  );
}

export default Home;