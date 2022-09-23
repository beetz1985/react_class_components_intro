import React from "react";

class App extends React.Component {

    //Notes

    /*

        First thing to mention is that the handler function needs to be an 
        arrow function due to how 'this' is binded. We learnt about this before.

        Second rememebr that you are in an object class, not a function. So the word
        this is going to be everywhere!

        Initial setting of state is different, see state = {}. The object 
        must always be called 'state'.

    */

    
    /* Notes from Scrimba 
    
    /*
     * A class component with state will ALWAYS save state in a class
     * instance variable called `state`, which will always be an object.
     * The individual values you save in state will be properties on
     * the `state` object.
     * 
     * The simplest (and more modern) way to delcare new state in a
     * class component is to just use a "class field" declaring state
     * as an object, like you see below.
     * 
     * Then, throughout the rest of the component (e.g. inside the render
     * method) you can access that state with `this.state.<yourPropertyHere>`
     */

    state = { blueText: true }

    /*
     * Any class methods you create that need to call the `this.setState`
     * method (which is available to our component because we're extending
     * React.Component) should be declared as an arrow function, for 
     * reasons we will discuss soon. (Note: other class methods you
     * want to make that DON'T use `this.setState` don't necessarily
     * need to be declared as arrow function to work correctly)
     */


    handleClick = () => {
        this.setState(s=>({ blueText: (!s.blueText) }))
    }


    render() {
        const style = {
            cursor: "pointer",
            backgroundColor: (this.state.blueText) ? "RoyalBlue" : ""
        }

        return (
            <button style={style} onClick={this.handleClick}>Click!</button>
        )
    }
}

export default App