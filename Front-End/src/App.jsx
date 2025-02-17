import React from 'react'
import Name from './Components/Name'
import Paraent from './Components/Paraent'
import Profile from './Components/Profile'
function App() {
  return (
    <div>
      <h1>this is App.jsx</h1>
      <Name/>
      <Paraent/>
      <ChildComponent message= "hi"/>
      <Profile name="Abdul Samad" age={23}/>



      
    </div>
  )
}

export default App;

 
   function ChildComponent({message}) {
   return (
     <div>
       <h2>{message}</h2>
     </div>
   )
 }
 