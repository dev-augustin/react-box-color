import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      color:'green',
      counterClick:0
    }
  }

colorChange(){
  //  Reference:
  // https://reactjs.org/docs/faq-state.html Important: read `state` instead of `this.state` when updating.
  this.setState((state) => {
  return( {
    color:(state.color==='yellow')?'green':'yellow',
    counterClick: state.counterClick++});
    }); 
 


  //   if (this.state.color==='green'){
  //     this.setState(
  //       {color:'yellow',
  //        counterClick: this.state.counterClick+1}
  // )
  //   }
  //   else{
  //     this.setState({color:'green',counterClick: this.state.counterClick+1
  //   })
  //   }
   console.log(this.state.color)
   console.log("click counter: ", this.state.counterClick)
  }

  

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




