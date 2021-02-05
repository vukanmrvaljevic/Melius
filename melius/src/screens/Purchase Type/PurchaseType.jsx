import React from 'react';
import './PurchaseType.css';

class PurchaseType extends React.Component {
  
    redirectToTarget = () => {
        this.props.history.push(`/set-up-tasks`)
      }
     render() {
         return (
             <form>
                  <h1>Purchase Type</h1>
               <div className="Products">
                   <label>Products</label>
                   <span>
                       <input type="text" name="Products" />
                   </span>
               </div>
               <div className="Services">
                       <label>Services</label>
                   <span>
                       <input type="text" name="Services" />
                   </span>
               </div>
               <div className="Others">
                   <label>Others</label>
                   <span>
                       <input type="text" name="Others" />
                   </span>
               </div>
               <br></br>
           <button onClick={this.redirectToTarget}>Redirect</button>
         </form>
       )
     }
   }
export default PurchaseType