import { useState } from 'react'

function App() {
  const [color, setcolor] = useState('olive');
  return (
    <div
      className='w-screen	 h-screen duration-200'
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-3 rounded-3xl'>
          <button onClick={() => { setcolor('red') }} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "red" }}>RED</button>
          <button onClick={() => { setcolor('green') }} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "green" }}>Green</button>
          <button onClick={() => { setcolor('blue') }} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "blue" }}>Blue</button>
          <button onClick={() => { setcolor('orange') }} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "orange" }}>Orange</button>
          <button onClick={() => { setcolor('olive') }} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "olive" }}>Olive</button>
        </div>
      </div>
    </div>
  )
}

export default App
