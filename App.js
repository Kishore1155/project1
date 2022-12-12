// import logo from './logo.svg';
// import { render } from '@testing-library/react';
import React ,{Component} from 'react';
import './App.css';

// function App() {
//   return (
//    <>

//      <h1>Hello world</h1>
//    </>
   
//   );
// }
// function App1() {
//   return (
//    <>

//      <h1>Hello world </h1>
//    </>
   
//   );
// }

// export { App ,App1};

class Counter extends Component
{
  state ={
    count:0,
  };
  handleIncrement = () => {
    this.setState({count:this.state.count + 1})
  }
  handleDecrement = () => {
    this.setState({count:this.state.count - 1})
  }

  check=()=>{
    if(this.state.count===3)
    {
      throw new Error('crashed!!!');
    }
  }
render()
{

  return(
    
    <header>
    <div>
      <this.check />
      <button onClick={this.handleIncrement}>Increment</button>
      <span>{this.state.count}</span>
      <button onClick={this.handleDecrement}>Decrement</button>

   
     </div>
    </header>
  )
}

};

export default Counter;