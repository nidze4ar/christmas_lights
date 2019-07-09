import React, {Component, Fragment} from 'react'
import './index.css'
import Lights from './Lights';

class App extends Component {

  state={   
    col1: '',
    col2: '',
    col3: '',
    col4: '',
    col5: '',
    interval: 100, 
    size: 12,
    lights: 20,
  }
  
  setLights = (e) => {
    const {_siz, _tim, _lig} = this.refs;
    e.preventDefault();
    this.setState({
      interval: +_tim.value,
      size: _siz.value,
      lights: +_lig.value
    })
  }

  randomLighting = () => {
    const getRndmNumbr = () => {
      return Math.round(Math.random() * 255)
    }
    const getRndmClr = () => {
      return `rgb(${getRndmNumbr()}, ${getRndmNumbr()}, ${getRndmNumbr()})`
    }
    this.setState({
      col1: getRndmClr(),
      col2: getRndmClr(),
      col3: getRndmClr(),
      col4: getRndmClr(),
      col5: getRndmClr(),
    })    
  }

  starting = () => {
    const {interval} = this.state;   
      setInterval(()=>this.randomLighting(), interval)    
  }

   render(){     
     const {col1, col2, col3, col4, col5, interval, size, lights} = this.state;
     return(
       <Fragment>
         <h1 style={{color: col1, textAlign: 'center'}}>HAPPY NEW YEAR 20NN!</h1>
      <div class="grid">
    <div class="grid-item cristmasLights">
     <ul>
      {[...Array(lights)].map((index)=>
      <Lights key={index} col1={col1} col2={col2} col3={col3}
              col4={col4} col5={col5} size={size} />             
             )}
     </ul>
    </div>
    <div class="grid-item controls">
      <form onSubmit={this.setLights} class="gridform">
        <input ref='_tim' type="range" id="start" name="volume"
            min="50" max="500" step="50" />
         <label for="volume"> Timers</label>
        <input ref='_siz' type="range" id="cowbell" name="cowbell" 
            min="7" max="21" step="3"/>
           <label for="cowbell"> Size</label>
       <input ref='_lig' type="range" id="lights" name="lights" 
            min="50" max="500" step="50"/>
          <label for="lights"> lights</label>
        <button>SET</button>
        <button onClick={this.starting}>GO</button>
    </form> 
   </div>
    <div class="grid-item display">
     <p>Response interval: {interval}</p>
      <p>Lights amount: {lights}</p>
      <p>Lights sells size : {size}</p>
   </div>
  </div>
  </Fragment>
     )
  }
}

export default App 

