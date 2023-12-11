import { useState } from 'react'
import Button from "./components/button/button.jsx";

function App() {
  const [count1, setCount2] = useState(0)

  return (
    <>
      <div>
          This is my 1st component<br/>
        <Button/>
      </div>

    </>
  )
}

export default App
