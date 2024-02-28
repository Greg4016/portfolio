import Card from './Card'
import smachineimg from './imgs/state-machine.png'

function App() {

  return (
    <>
      <div id='header' className='bg-slate-700 h-screen'></div>
      <div id='cards' className='bg-slate-500 h-fit flex justify-center items-center flex-wrap'>
        <Card id='card1' title={"State Machine [WIP]"} sub={'HTML, CSS, JS'} href={"https://greg4016.github.io/state-machine/"} img={smachineimg}></Card>
        <Card id='card2' name={"proj1"}></Card>
        <Card id='card3' name={"proj1"}></Card>
        <Card id='card4' name={"proj1"}></Card>
      </div>
    </>
  )
}

export default App
