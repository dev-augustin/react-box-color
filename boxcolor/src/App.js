import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      color:'green',
      counterClick:0,
      isColor:true
    }
    //this.onChange=this.onChange.bind(this);
  }
  colorChange(){
    if(this.state.isColor)
      this.setState(
      {
        color:'yellow', 
        counterClick: this.state.counterClick+1
      }
    )
    else 
    this.setState(
      {
        color:'orange', 
        counterClick: this.state.counterClick+1
      }
    )
    console.log("click counter: ", this.state.counterClick)
  }
  // colorChange(){
  //   this.setState(
  //     {
  //       color:'yellow', 
  //       counterClick: this.state.counterClick+1
  //     }
  //   )
  //   console.log("click counter: ", this.state.counterClick)
  // }
  render()
  {
    return (
    <div> 
      <h2>BoxColor Change</h2>
      <div className="App" 
        style=
        {{backgroundColor: this.state.color}} onClick={()=>this.colorChange()}
        >
      <p id='countText'>Count= {this.state.counterClick}</p>
      </div>  
      {/* <h3>Count= </h3> */}
    </div>
  );
}
}

export default App;



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

