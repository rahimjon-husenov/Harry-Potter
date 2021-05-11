import React from 'react'
import Data from './components/Data'
import Todo from './components/Todo'
import Style from './style.css'
import Navbar from './components/Navbar'

function App() {

    return (
    <div>  
      <Navbar />
      <div className="App">
      {Data.map(el => {
        return (
        <Todo 
          id={el._id}
          image={el.image}
          name={el.name}
          price={el.price } />
        )
      }
      )
      }
      </div>
    </div>  
    )
  }

export default App
