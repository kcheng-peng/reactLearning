import React from "react";
import MyComponent from "./myComponent";

class AutoFocusTextInput extends React.Component{
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    componentDidMount() {
        this.textInput.current.focusTextInput();
        console.log(this.textInput.current)
    }

    render() {
        return (
            <MyComponent ref={this.textInput} />
        );
    }
}
export default AutoFocusTextInput;