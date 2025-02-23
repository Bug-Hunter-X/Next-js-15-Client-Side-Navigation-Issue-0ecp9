```javascript
// pages/index.js
import { useEffect, useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs on every render, including client-side navigation
    console.log('Component rendered. Count:', count);
  });

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```