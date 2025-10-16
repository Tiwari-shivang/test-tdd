import { useState } from 'react';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState(false);

  const handleCalculate = () => {
    if (input.trim() === '') {
    setError(true);
    return;
  }
  setError(false);

  let sum = 0;
  let num: number | null = null;

  for (let i = 0; i < input.length; i++) {
    const ch = input[i];
    const code = ch.charCodeAt(0);
    // ye baby ascii code hai kyuki hame string me se number nikalne hai
    // ascii me 0-9 ke beech ke code 48-57 hote hai
    if (code >= 48 && code <= 57) {
      const digit = code - 48;
      num = (num === null ? 0 : num) * 10 + digit;
    } else {
      if (num !== null) {
        sum += num;
        num = null;
      }
    }
  }

  if (num !== null) {
    sum += num;
  }
  setResult(sum);

  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#fff', color: '#aaa' }}>
      <img
        src='https://images.unsplash.com/photo-1594352161389-11756265d1b5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        width={600}
        height={400}
      />

      <h2>String Calculator</h2>

      <h1 style={{ fontSize: '20px' }}>Enter numbers</h1>

      <textarea
        style={{ margin: '10px 0', color: '#aaa' }}
        placeholder='Enter numbers'
        data-testid='input-field'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {error && <p style={{ color: 'red' }}>Error: Invalid input</p>}
      <div
        onClick={handleCalculate}
        data-testid='Calculate'
        style={{
          padding: '10px',
          backgroundColor: '#008cba',
          color: '#fff',
          border: 'none',
        }}>
        Calculate
      </div>

      {result !== null && <p style={{ color: 'green' }}>Result: {result}</p>}

      <div role='alert'>
        <p>Make sure you enter numbers correctly!</p>
      </div>
    </div>
  );
};

export default App;
