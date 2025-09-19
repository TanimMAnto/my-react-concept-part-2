import Counter from "./Counter";
import './App.css'
import User from "./User";
import Batsman from "./Batsman";

function App() {
  function handleClick(){
    alert("clicked me")
  }


  return (
    <>
     <h1>Vite+React</h1>
     <Batsman></Batsman>
     <User></User>
     <Counter></Counter>


     <button onClick={handleClick}>Click me</button>
     <button>Click me</button>
    </>
  )
}

export default App
