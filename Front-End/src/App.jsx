import React from 'react'
import Name from './Componenta/Name'
import Paraent from './Componenta/Paraent'
import Profile from './Componenta/Profile'
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
 