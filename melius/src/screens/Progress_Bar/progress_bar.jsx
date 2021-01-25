import React from 'react';
import './progress_bar.css';

class progress_bar extends React.Component {
    state = {
      progress:  50    
    };
  
    handleIncrement = () => {
      if (this.state.progress !== 100) {
            this.setState(prevState => ({progress: prevState.progress + 1}), 
              () => console.log(this.state.progress));
      }
      else alert("oops, you hit the max value!")
    }
    
    handleDecrement = () => {
      if (this.state.progress !== 0) {
           this.setState(prevState => ({progress: prevState.progress - 1}), 
              () => console.log(this.state.progress));
      }
      else alert("oops, you hit the min value!")
    }
  
    render() {
      const test = this.state.progress + "%";
      var style = { width: test }
  
      return (
        <div className="flex-container">
          <div className="progress" data-label={`${test} completed`}>
            <span className="value" style={style}></span>
          </div>
          <br/>
          <div>
             <button className="button" onClick={this.handleDecrement}>-</button>
            <button className="button" onClick={this.handleIncrement}>+</button>
          </div>
          
       </div>
      )
    }
} 
  
export default progress_bar