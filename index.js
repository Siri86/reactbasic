import React from 'react';
import ReactDOM from 'react-dom';
import Edureka from './Header';
//render we do it after functional component here /* without this opening and closing tag of Edureka(which is a component name locally) I did not get output. We can use any other name in place of Edureka. It is specific to this file only not Header.js */
const Component1 = () => {
      return (
        <React.Fragment>
 
          <Edureka>  </Edureka>
          <h1> My first Component</h1>
          <div> 
            This is my first functional component/parent
        </div>
       
        </React.Fragment>
      )
} 
ReactDOM.render(<Component1/>, document.getElementById('root'));