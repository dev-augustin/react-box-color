import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      color:'green'
    }
  }
  changeColor(){
    this.setState(
      {
        color:'yellow'
      }
    )
  }
  render()
  {
    return (
    <div> 
      <div className="App" 
        style=
        {{backgroundColor: this.state.color}} onClick={this.changeColor}
        >
      
      <p>Count= </p>
      </div>  
     
      {/* <h3>Count= </h3> */}
    </div>
   
  );
}
}

export default App;

//export default class App extends Component{//
// class App extends Component{
//   constructor(props){
//     super(props);
//     this.state={
//       color: "green",
//       //clickCounter:0
//     }
//     this.onChange=this.onChange.bind(this);
//   }  

// onChange = (e) => {
//   this.setState({
//      color:'orange',
//      //clickCounter: this.setState.clickCounter++
//   })
//   console.log("click counter==>", this.state.clickCounter)
// } 

//   render(){
//     return(
//       <div className="App">
//         <h1> Box Color Change</h1>
//         <div className= 'colorBox' 
//         style={{backgroundColor:this.state.color}}
//         onClick={this.onChange}
//         >
//           <p>
//             Click here
//           </p>
//         </div>
//       </div>
//     );
//   }
// }  





// export default App;

