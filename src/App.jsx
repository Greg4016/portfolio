import { useState } from 'react'
import Card from './Card'
import smachineimg from './imgs/state-machine.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-slate-500 h-screen flex justify-center items-center flex-wrap'>
        <Card title={"State Machine [WIP]"} sub={'HTML, CSS, JS'} href={"https://greg4016.github.io/state-machine/"} img={smachineimg}></Card>
        <Card name={"proj1"}></Card>
        <Card name={"proj1"}></Card>
        <Card name={"proj1"}></Card>
      </div>
    </>
  )
}

export default App
