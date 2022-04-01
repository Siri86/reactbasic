import React, {Component} from 'react'; // use component when we class component and we extend with component
// creating class component 
//rendering is done in the class component itself and is a method
class Header extends Component {
    //class should have return
    render() { 
    return (
        
             <center>
            <h2> My Search bar </h2>
            <p>Header added to parent</p>
           
        
        <input type="text"/>
        </center>
             
    
    )
}
}
export default Header; 