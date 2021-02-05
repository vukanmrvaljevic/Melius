import React from 'react';
import './SetUpTasks.css';

class SetUpTasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = { values: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      redirectToTarget = () => {
            this.props.history.push(`/progress_bar`)
          }
    
      createUI(){
         return this.state.values.map((el, i) => 
            //  <div key={i}>
            //     <input type="text" value={el||''} onChange={this.handleChange.bind(this, i)} />
            //     <input type='button' value='remove' onClick={this.removeClick.bind(this, i)}/>
            //  </div>      
            <div className="Task1" key={i}>
            {/* <label>Task: 1</label> */}
               <span>
                     <input type="text" value={el||''} onChange={this.handleChange.bind(this, i)} />
                     <input type='button' value='remove' onClick={this.removeClick.bind(this, i)}/>
               </span>
           </div> 
         )
      }
    
      handleChange(i, event) {
         let values = [...this.state.values];
         values[i] = event.target.value;
         this.setState({ values });
      }
      
      addClick(){
        this.setState(prevState => ({ values: [...prevState.values, '']}))
      }
      
      removeClick(i){
         let values = [...this.state.values];
         values.splice(i,1);
         this.setState({ values });
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.values.join(', '));
        event.preventDefault();
      }
    
      render() {
        return (
            <form onSubmit={this.handleSubmit}>
                 <h1>Setup Your Tasks</h1>
                {this.createUI()}    
                <input type='button' value='add more' onClick={this.addClick.bind(this)} />
                <br></br>  
              <button onClick={this.redirectToTarget}>Redirect</button>
          </form>
        );
      }
   }
export default SetUpTasks