import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { capitalize } from '@notebook/shared/utils/string.extension';
import AppLayout from './router/AppLayout';
import NativeButton from './components/shared/NativeButton';

export function App() {
  const [count, setCount] = useState(0);
  const [wellcomeMessage, setWelcomeMessage] = useState('')

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(`/api/hello?name=${capitalize("world")}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setWelcomeMessage(data.message);
    };
    fetchApi();
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{wellcomeMessage}</h1>
      <div className="card">
        <NativeButton onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </NativeButton>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <AppLayout />
    </>
  )
}

export default App
