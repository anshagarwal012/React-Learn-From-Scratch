import './App.css'
import Card from './components/card'

function App() {
  let myobj = {
    name: 'Ansh',
    age: 22
  }

  let newArray = [1, 2, 3, 4]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind</h1>
      <Card name="Ansh" btnText="click me" obj={myobj} arr={newArray} />
      <Card name="Ansh 1" obj={myobj} arr={newArray} />
    </>
  )
}

export default App
